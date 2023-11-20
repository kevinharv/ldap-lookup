import { Client } from "ldapts";

// Connect to LDAP server
// Bind to LDAP server
// Start TLS?

// Disconnect?

const SERVER = process.env.LDAP_SERVER;
const BIND_DN = process.env.LDAP_BIND_DN;
const BIND_PW = process.env.LDAP_BIND_PW;
const SEARCH_DN = process.env.LDAP_SEARCH_DN;

export class ADClient {
    client: any;

    constructor() {
        this.client = new Client({
            url: `ldap://${SERVER}`,
            timeout: 500,
            connectTimeout: 500
        });
    }

    // Bind to LDAP Server
    async bind() {
        try {
            await this.client.bind(BIND_DN, BIND_PW);
            return {
                "status": "Success"
            }
        } catch (e) {
            const debugInfo = {
                "server": SERVER,
                "bindDN": BIND_DN,
                "error": e
            }
            throw new Error(`Failed to bind to LDAP Server\n${JSON.stringify(debugInfo)}`); 
        }
    }

    // Unbind from LDAP Server
    async unbind() {
        try {
            await this.client.unbind();
            return {
                "status": "Success"
            }
        } catch (e) {
            const debugInfo = {
                "server": SERVER,
                "bindDN": BIND_DN,
                "error": e
            }
            throw new Error(`Failed to unbind to LDAP server\n${JSON.stringify(debugInfo)}`);
        }
    }

    async searchUser(searchTerm: string) {
        try {
            const { searchEntries, searchReferences } = await this.client.search(SEARCH_DN, {
                    scope: "sub",
                    filter: `(&(objectClass=user)(|(sAMAccountName=${searchTerm})(userPrincipalName=${searchTerm}*)))`
                });
            return searchEntries;
        } catch (e) {
            const debugInfo = {
                "server": SERVER,
                "bindDN": BIND_DN,
                "searchTerm": searchTerm,
                "error": e
            }
            throw new Error(`Error when searching\n${JSON.stringify(debugInfo)}`);
        }
    }

    async searchComputer(searchTerm: string) {
        try {
            const { searchEntries, searchReferences } = await this.client.search(SEARCH_DN, {
                    scope: "sub",
                    filter: `(&(objectClass=computer)(|(sAMAccountName=*${searchTerm}*)(name=*${searchTerm}*)))`
                });
            return searchEntries;
        } catch (e) {
            const debugInfo = {
                "server": SERVER,
                "bindDN": BIND_DN,
                "searchTerm": searchTerm,
                "error": e
            }
            throw new Error(`Error when searching\n${JSON.stringify(debugInfo)}`);
        }
    }

    async searchGroup(searchTerm: string) {
        try {
            const { searchEntries, searchReferences } = await this.client.search(SEARCH_DN, {
                    scope: "sub",
                    filter: `(&(objectClass=group)(|(sAMAccountName=${searchTerm})(name=${searchTerm})))`
                });
            return searchEntries;
        } catch (e) {
            const debugInfo = {
                "server": SERVER,
                "bindDN": BIND_DN,
                "searchTerm": searchTerm,
                "error": e
            }
            throw new Error(`Error when searching\n${JSON.stringify(debugInfo)}`);
        }
    }
}