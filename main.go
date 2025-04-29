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
	webConfig := config.GetWebConfig()
	ldapConfig := config.GetLDAPConfig()

	// TODO - Enable TLS & LDAPS
	ldapConnection, err := ldap.DialURL(fmt.Sprintf("ldap://%s:%d", ldapConfig.ServerURL, ldapConfig.ServerPort))
	if err != nil {
		log.Fatal(err)
	}
	defer ldapConnection.Close()

	err = ldapConnection.Bind(ldapConfig.BindDN, ldapConfig.BindPassword)
	if err != nil {
		log.Fatal(err)
	}

	http.HandleFunc("/users/{sAMAccountName}", func(w http.ResponseWriter, r *http.Request) {
		username := r.PathValue("sAMAccountName")
		user, err := directory.GetDirectoryUser(ldapConnection, ldapConfig, username)
		if err != nil {
			log.Printf("Could not find %s!\n", username)
			web.Error().Render(r.Context(), w)
			return
		}

		web.UserPage(user).Render(r.Context(), w)
	})
	http.ListenAndServe(fmt.Sprintf(":%d", webConfig.ServerPort), nil)
}

