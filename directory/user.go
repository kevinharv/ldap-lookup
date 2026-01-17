package directory

import (
	"fmt"

	"github.com/go-ldap/ldap/v3"
	"github.com/kevinharv/ldap-lookup/config"
)

func GetDirectoryUser(server *ldap.Conn, conf config.LDAPConfiguration, sAMAccountName string) (*ldap.Entry, error) {
	sAMAccountNameSearch := ldap.NewSearchRequest(
		conf.BaseSearchDN,
		ldap.ScopeWholeSubtree,
		ldap.NeverDerefAliases,
		1, 0, false,
		fmt.Sprintf("(sAMAccountName=%s)", ldap.EscapeFilter(sAMAccountName)),
		[]string{"*"},
		nil,
	)

	searchResults, err := server.Search(sAMAccountNameSearch)
	if err != nil {
		return nil, err
	}

	if len(searchResults.Entries) > 0 {
		return searchResults.Entries[0], nil
	}

	// searchResults.Entries[0].

	return nil, fmt.Errorf("no user found")
}
