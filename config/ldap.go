package config

import (
	"log"
	"os"
	"strconv"
)

type LDAPConfiguration struct {
	ServerURL           string
	ServerPort          int
	EnableTLS           bool
	CertificateFilePath string
	BindDN              string
	BindPassword        string
	BaseSearchDN        string
}

func GetLDAPConfig() LDAPConfiguration {
	log.Println("Loading LDAP server configuration from environment.")

	/* Load LDAP server config from environment variables */

	serverURL, found := os.LookupEnv("LDAP_URL")
	if !found {
		log.Fatalf("Could not load LDAP URL.")
	}

	serverPortString, found := os.LookupEnv("LDAP_PORT")
	if !found {
		serverPortString = "389"
	}

	ldapTLSString, found := os.LookupEnv("LDAP_ENABLE_TLS")
	if !found {
		ldapTLSString = "False"
	}

	serverPort, err := strconv.Atoi(serverPortString)
	if err != nil {
		log.Fatalf("Failed to parse server port: %s", serverPortString)
	}

	ldapTLS, err := strconv.ParseBool(ldapTLSString)
	if err != nil {
		log.Fatalf("Failed to parse TLS boolean: %s", ldapTLSString)
	}

	certFilePath, found := os.LookupEnv("CERT_PATH")
	if !found && ldapTLS {
		log.Fatalf("Could not parse certificate file path: %s", certFilePath)
	}

	ldapBindDN, found := os.LookupEnv("LDAP_BIND_DN")
	if !found {
		log.Fatalf("Could not load LDAP bind DN.")
	}

	ldapBindPassword, found := os.LookupEnv("LDAP_BIND_PASSWORD")
	if !found {
		log.Fatalf("Could not load LDAP bind password.")
	}

	ldapBaseSearchDN, found := os.LookupEnv("LDAP_SEARCH_DN")
	if !found {
		log.Fatalf("Could not load LDAP search DN.")
	}

	/* Ensure certificate file exists if TLS enabled */

	if ldapTLS {
		_, err := os.Stat(certFilePath)
		if err != nil {
			log.Fatalf("Failed to load certificate file from: %s", certFilePath)
		}
	}

	return LDAPConfiguration{
		ServerURL:           serverURL,
		ServerPort:          serverPort,
		EnableTLS:           ldapTLS,
		CertificateFilePath: certFilePath,
		BindDN:              ldapBindDN,
		BindPassword:        ldapBindPassword,
		BaseSearchDN:        ldapBaseSearchDN,
	}
}
