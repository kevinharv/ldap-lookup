import { Client } from "ldapts";

// Connect to LDAP server
// Bind to LDAP server
// Start TLS?

// Disconnect?


export class ADClient {
    client: any;

    constructor() {
        this.client = new Client({
            url: `ldap://${process.env.LDAP_SERVER}`
        });
    }

    async bind() {
        await this.client.bind(process.env.LDAP_BIND_DN, process.env.LDAP_BIND_PW);
        // console.debug(`AD Client Bound on DN: ${process.env.LDAP_BIND_DN}`);
        return process.env.LDAP_BIND_DN;
    }

    async unbind() {
        await this.client.unbind();
    }
}