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
            url: `ldap://${SERVER}`
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
            console.error(`Failed to bind to LDAP server\n${debugInfo}`);
            return {
                "status": "Failure",
                "debug": e
            }
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
            console.error(`Failed to unbind to LDAP server\n${debugInfo}`);
            return {
                "status": "Failure",
                "debug": e
            }
        }
    }

    async searchUser(searchTerm: string) {
        const { searchEntries, searchReferences } = await this.client.search(SEARCH_DN, {
                scope: "sub",
                filter: `|(sAMAccountName=${searchTerm})(userPrincipalName=${searchTerm}*)`
            });
        return searchEntries;
    }

    async searchGroup(searchTerm: string) {

    }

    async searchComputer(searchTerm: string) {

    }
}