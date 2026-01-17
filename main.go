package main

import (
	"fmt"
	"log"
	"net/http"

	"github.com/go-ldap/ldap/v3"
	"github.com/kevinharv/ldap-lookup/config"
	"github.com/kevinharv/ldap-lookup/directory"
	"github.com/kevinharv/ldap-lookup/web"
)

func main() {
	// Load configurations
	appConfig := config.LoadAppConfig()

	// TODO - Enable TLS & LDAPS
	ldapConnection, err := ldap.DialURL(fmt.Sprintf("ldap://%s:%d", appConfig.LDAPConfig.ServerURL, appConfig.LDAPConfig.ServerPort))
	if err != nil {
		log.Fatal(err)
	}
	defer ldapConnection.Close()

	err = ldapConnection.Bind(appConfig.LDAPConfig.BindDN, appConfig.LDAPConfig.BindPassword)
	if err != nil {
		log.Fatal(err)
	}

	http.HandleFunc("/users/{sAMAccountName}", func(w http.ResponseWriter, r *http.Request) {
		username := r.PathValue("sAMAccountName")
		user, err := directory.GetDirectoryUser(ldapConnection, appConfig.LDAPConfig, username)
		if err != nil {
			log.Printf("Could not find %s!\n", username)
			web.Error().Render(r.Context(), w)
			return
		}

		web.UserPage(user).Render(r.Context(), w)
	})
	log.Printf("Starting web server on port %d", appConfig.WebConfig.ServerPort)
	http.ListenAndServe(fmt.Sprintf(":%d", appConfig.WebConfig.ServerPort), nil)
}
