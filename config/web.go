package config

import (
	"log"
	"os"
	"strconv"
)

type WebConfiguration struct {
	ServerPort          int
	ServeTLS            bool
	CertificateFilePath string
	PrivateKeyFilePath  string
}

func GetWebConfig() WebConfiguration {
	log.Println("Loading web server configuration from environment.")

	/* Load web server config from environment variables */

	serverPortString, found := os.LookupEnv("SERVER_PORT")
	if !found {
		serverPortString = "3000"
	}

	serveTLSString, found := os.LookupEnv("TLS_ENABLED")
	if !found {
		serveTLSString = "False"
	}

	serverPort, err := strconv.Atoi(serverPortString)
	if err != nil {
		log.Fatalf("Failed to parse server port: %s", serverPortString)
	}

	serveTLS, err := strconv.ParseBool(serveTLSString)
	if err != nil {
		log.Fatalf("Failed to parse TLS boolean: %s", serveTLSString)
	}

	certFilePath, found := os.LookupEnv("CERT_PATH")
	if !found && serveTLS {
		log.Fatalf("Could not parse certificate file path: %s", certFilePath)
	}

	keyFilePath, found :=  os.LookupEnv("KEY_PATH")
	if !found && serveTLS {
		log.Fatalf("Could not parse certificate file path: %s", keyFilePath)
	}


	/* Ensure certificate and private key files exist if TLS enabled */

	if serveTLS {
		_, err := os.Stat(certFilePath)
		if err != nil {
			log.Fatalf("Failed to load certificate file from: %s", certFilePath)
		}

		_, err = os.Stat(keyFilePath)
		if err != nil {
			log.Fatalf("Failed to load private key file from: %s", keyFilePath)
		}
	}

	return WebConfiguration{
		ServerPort: serverPort,
		ServeTLS: serveTLS,
		CertificateFilePath: certFilePath,
		PrivateKeyFilePath: keyFilePath,
	}
}
