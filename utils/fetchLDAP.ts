

export async function getLDAPObjects(type: string, term: string) {
    const res = await fetch(`${process.env.SERVER_ADDRESS}/api/${type}?term=${term}`, {
        method: "GET"
    });
    if (!res.ok) {
        throw new Error("Failed to get LDAP object(s) from API.");
    }

    return res.json();
}

export async function searchLDAPObjects(type: string, term: string) {
    const res = await fetch(`${process.env.SERVER_ADDRESS}/api/search?type=${type}&term=${term}`, {
        method: "GET"
    });
    if (!res.ok) {
        throw new Error("Failed to search LDAP objects via API.");
    }

    return res.json();
}