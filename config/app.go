package config

import (
	"log"
	"os"

	"gopkg.in/yaml.v3"
)

type WebConfiguration struct {
	ServerPort          int    `yaml:"ServerPort"`
	ServeTLS            bool   `yaml:"ServeTLS"`
	CertificateFilePath string `yaml:"CertificateFilePath"`
	PrivateKeyFilePath  string `yaml:"PrivateKeyFilePath"`
}

type LDAPConfiguration struct {
	ServerURL           string `yaml:"ServerURL"`
	ServerPort          int    `yaml:"ServerPort"`
	EnableTLS           bool   `yaml:"EnableTLS"`
	CertificateFilePath string `yaml:"CertificateFilePath"`
	BindDN              string `yaml:"BindDN"`
	BindPassword        string `yaml:"BindPassword"`
	BaseSearchDN        string `yaml:"BaseSearchDN"`
}

type AppConfiguration struct {
	WebConfig  WebConfiguration  `yaml:"WebConfig"`
	LDAPConfig LDAPConfiguration `yaml:"LDAPConfig"`
}

func LoadAppConfig() AppConfiguration {
	log.Println("Loading application configuration from YAML file.")

	configFilePath := "config.yml"
	if path := os.Getenv("WEB_CONFIG_PATH"); path != "" {
		configFilePath = path
	}

	data, err := os.ReadFile(configFilePath)
	if err != nil {
		log.Fatalf("Failed to read config file: %s", err)
	}

	var appConfig AppConfiguration
	err = yaml.Unmarshal(data, &appConfig)
	if err != nil {
		log.Fatalf("Failed to parse YAML config: %s", err)
	}

	return appConfig
}
