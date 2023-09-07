# LDAP Lookup
This application serves as a portal for technicians to view user account information from Active Directory (or other compatible directory service) such as account status, group membership, password expiry date, and more. Computer account information is also available.

# TODO
- Dark/light favicon based on browser
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
