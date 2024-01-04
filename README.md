# LDAP Lookup
This application serves as a portal for technicians to view user account information from Active Directory (or other compatible directory service) such as account status, group membership, password expiry date, and more. Computer account information is also available.

# TODO
- Authentication & Authorization
    - SAML for web client
    - Token between client and server?
- Page of search results - list CN, sAMAccountName if user?
    - Update AD class to have methods that only return those attributes
    - Will only need to do if more than one result, otherwise redirect to details page
- Details page - show cards for categories of attributes
    - Will have to manually specify attributes for each category for each object type
    - Groups should do paginated member enumeration

- Look into AAD query for some fields
    - M365 group membership would be most useful

# Administrative Capabilities
- Show/hide any field for any user/group with access
- eduPerson enabled?

# Features
- Lookup user account details
- Lookup group information
## UI Features
- Tooltips on fields
    - i.e. "Computer When Created" - When the computer first appeared in the directory. Usually, this is when the computer was joined to the domain.

# Development
This application requires the following environment variables to be specified in the an `.env.local` file.
```env
LDAP_SERVER="192.168.1.10"
LDAP_BIND_DN="CN=Dev IDM Service Account,OU=Service Accounts,OU=KEVHARV Users,DC=ad,DC=kevharv,DC=com"
LDAP_BIND_PW="PASSWORD HERE"
```

# Tech Stack
- NextJS

# Page Endpoints
- /
- /login
- /user/{ sAMAccountName }
- /group/{ CN }
- /computer/{ Hostname | FQDN }

# References
- [AD Computer](https://learn.microsoft.com/en-us/powershell/module/activedirectory/get-adcomputer?view=windowsserver2022-ps)
- [Next Routing and Pages](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts)
- [TailwindCSS Docs](https://tailwindcss.com/docs/)
