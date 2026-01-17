package web

import "github.com/go-ldap/ldap/v3"

func hello(str string) string {
	// This is a test function to ensure the package compiles correctly.
	return str
}

func printUser(user *ldap.Entry) string {
	return user.Attributes[0].Name
}