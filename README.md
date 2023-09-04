# LDAP Lookup
This application serves as a portal for technicians to view user account information from Active Directory (or other compatible directory service) such as account status, group membership, password expiry date, and more. Computer account information is also available.

# TODO
- Dark/light favicon based on browser

# Features
- Lookup user account details
- Lookup group information

# Tech Stack
- NextJS

# Page Endpoints
- /
- /login
- /user/{ sAMAccountName }
- /group/{ CN }
- /computer/{ Hostname | FQDN }