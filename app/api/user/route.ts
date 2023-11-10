// GET request under user route
import { Client, DN } from "ldapts";

const SERVER = process.env.LDAP_SERVER;
const BIND_DN = process.env.LDAP_BIND_DN;
const BIND_PW = process.env.LDAP_BIND_PW;

export async function GET(request: Request) {
    const AD = new Client({
        url: `ldap://${SERVER}`
    });
    await AD.bind(`${BIND_DN}`, BIND_PW);

    // const { searchEntries, searchReferences } = await AD.search("OU=KEVHARV Users,DC=ad,DC=kevharv,DC=com", {
    //     scope: "sub",
    //     filter: '(sAMAccountName=kharvey)'
    // });

    const { searchEntries, searchReferences } = await AD.search("CN=Schema,CN=Configuration,DC=ad,DC=kevharv,DC=com", {
        scope: "sub",
        sizeLimit: 6000,
        attributes: ['cn']
    });

    await AD.unbind();
    return Response.json({entries: searchEntries.length});
}