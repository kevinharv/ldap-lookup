/*
    TODO
    - Add DN, *CN*, *SN*, *displayName*, etc. to searches
*/


import { Client } from "ldapts";

const SERVER = process.env.LDAP_SERVER;
const BIND_DN = process.env.LDAP_BIND_DN;
const BIND_PW = process.env.LDAP_BIND_PW;

const SEARCH_DN = process.env.LDAP_SEARCH_DN;
const SEARCH_LENGTH = 10;
const SHORT_SEARCH_LENGTH = 3;

export class ADClient {
    client: any;

    constructor() {
        // TODO - add SSL/TLS support
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

    // Searches AD for user - returns n number of search results with all attributes
    async searchUser(searchTerm: string, numEntries: number) {
        try {
            const { searchEntries, searchReferences } = await this.client.search(SEARCH_DN, {
                    scope: "sub",
                    filter: `(&(objectClass=user)(|(sAMAccountName=${searchTerm})(userPrincipalName=${searchTerm}*)))`,
                    attributes: "",
                    sizeLimit: numEntries
                });
            return searchEntries;
        } catch (e) {
            const debugInfo = {
                "server": SERVER,
                "bindDN": BIND_DN,
                "searchTerm": searchTerm,
                "error": e
            }
            throw new Error(`Error when searching users\n${JSON.stringify(debugInfo)}`);
        }
    }

    // Searches AD for group - returns n number of search results with all attributes
    async searchGroup(searchTerm: string, numEntries: number) {
        try {
            const { searchEntries, searchReferences } = await this.client.search(SEARCH_DN, {
                    scope: "sub",
                    filter: `(&(objectClass=group)(|(sAMAccountName=${searchTerm})(name=${searchTerm})))`,
                    attributes: "",
                    sizeLimit: numEntries
                });
            return searchEntries;
        } catch (e) {
            const debugInfo = {
                "server": SERVER,
                "bindDN": BIND_DN,
                "searchTerm": searchTerm,
                "error": e
            }
            throw new Error(`Error when searching groups\n${JSON.stringify(debugInfo)}`);
        }
    }

    // Searches AD for computer - returns n number of search results with all attributes
    async searchComputer(searchTerm: string, numEntries: number) {
        try {
            const { searchEntries, searchReferences } = await this.client.search(SEARCH_DN, {
                    scope: "sub",
                    filter: `(&(objectClass=computer)(|(sAMAccountName=*${searchTerm}*)(name=*${searchTerm}*)))`,
                    attributes: "",
                    sizeLimit: numEntries
                });
            return searchEntries;
        } catch (e) {
            const debugInfo = {
                "server": SERVER,
                "bindDN": BIND_DN,
                "searchTerm": searchTerm,
                "error": e
            }
            throw new Error(`Error when searching computers\n${JSON.stringify(debugInfo)}`);
        }
    }

    // Searches AD for users - returns n entries with limited attributes
    async shortUserSearch(searchTerm: string, numEntries: number) {
        try {
            const { searchEntries, searchReferences } = await this.client.search(SEARCH_DN, {
                    scope: "sub",
                    filter: `(&(objectClass=user)(|(sAMAccountName=${searchTerm})(userPrincipalName=${searchTerm}*)))`,
                    attributes: "",
                    limitSize: numEntries
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

    // Searches AD for groups - returns n entries with limited attributes
    async shortGroupSearch(searchTerm: string, numEntries: number) {
        try {
            const { searchEntries, searchReferences } = await this.client.search(SEARCH_DN, {
                    scope: "sub",
                    filter: `(&(objectClass=group)(|(sAMAccountName=${searchTerm})(name=${searchTerm})))`,
                    attributes: "",
                    sizeLimit: numEntries
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

    // Searches AD for computers - returns n entries with limited attributes
    async shortComputerSearch(searchTerm: string, numEntries: number) {
        try {
            const { searchEntries, searchReferences } = await this.client.search(SEARCH_DN, {
                    scope: "sub",
                    filter: `(&(objectClass=computer)(|(sAMAccountName=*${searchTerm}*)(name=*${searchTerm}*)))`,
                    attributes: "",
                    sizeLimit: numEntries
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