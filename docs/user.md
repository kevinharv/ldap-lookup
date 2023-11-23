# AD User Object
The return values of the user queries will be organized into these categories.

# AD User
## Security Attributes
- Blocked
- Password Last Set
- Password Expires

## Organization
- Title
- Manager
- Department
- Job Codes

## Mail and Calendar
- Email

## Personal Details
- Birthdate
- Address

## [OPTIONAL] Education
Educause eduPerson LDAP Directory extension attributes


# AD User Object
## AD DS Attributes
### Personal Details
- sAMAccountName
- Name (cn) - string
- Last Name (sn) - string
- Display Name (displayName) - string
- Display Name Printable (displayNamePrintable) - string
- Given Name (givenName) - string
- Description (description) - string
- l?
- middleName
- name


### Security Attributes
- Account Expires (accountExpires) - Datetime
- Bad Password Time (badPasswordTime) - Datetime
- Bad Password Count (badPwdCount) - Int
- lastLogon? lastLogonTimestamp?
- lockoutTime?
- pwdLastSet
- userAccountControl (0x200 = OKAY)

### Organization
- title
- Department (department) - string
- Department Number (departmentNumber) - string
- employeeID? employeeNumber?
- manager

### Communications
- mail
- otherMailbox
- facsimileTelephoneNumber?
- otherMobile? otherTelephone?
- postalAddress?
- street?

### Network Resources
- homeDirectory
- homeDrive
- loginShell
- unixHomeDirectory

### (OPTIONAL) Education
Educause eduPerson LDAP Directory extension attributes.


### Technical Information
- Distinguished Name (distinguishedName)
- whenCreated
- whenChanged
- userPrincipalName

## EntraID Attributes


## Combined
*All should include relevant details from both sources for each entry.*
### Group Membership
- AD DS Security Groups
- AD DS Distribution Groups
- EntraID Cloud-only groups