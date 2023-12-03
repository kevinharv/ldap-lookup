

export async function getLDAPObject(type: string, term: string) {
    const res = await fetch(`${process.env.SERVER_ADDRESS}/api/detail?type=${type}&term=${term}`, {
        method: "GET",
        mode: "cors",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json"
        }
    });
    if (!res.ok) {
        throw new Error("Failed to get LDAP object(s) from API.");
    }

    return res.json();
}

export async function searchLDAPObjects(type: string, term: string, numEntries: number) {
    const res = await fetch(`${process.env.SERVER_ADDRESS}/api/search?type=${type}&term=${term}&qtyResults=${numEntries}`, {
        method: "GET",  
        mode: "cors",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json"
        }
    });
    if (!res.ok) {
        throw new Error("Failed to search LDAP objects via API.");
    }

    return res.json();
}