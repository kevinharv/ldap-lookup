# LDAP Lookup


# Development
This application requires the following environment variables to be specified in the an `.env.local` file.
```env
LDAP_SERVER="192.168.1.10"
LDAP_BIND_DN="CN=Dev IDM Service Account,OU=Service Accounts,OU=KEVHARV Users,DC=ad,DC=kevharv,DC=com"
LDAP_BIND_PW="PASSWORD HERE"
```

# Page Endpoints
- /
- /login
- /user/{ sAMAccountName }
- /group/{ CN }
- /computer/{ Hostname | FQDN }

# References
- [AD Computer](https://learn.microsoft.com/en-us/powershell/module/activedirectory/get-adcomputer?view=windowsserver2022-ps)
