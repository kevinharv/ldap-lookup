import { getLDAPObjects } from "@/utils/fetchLDAP"
import { redirect } from "next/navigation";

export default async function Page(req: any) {
    const type = req.searchParams.type;
    const term = req.searchParams.term;
    let object = null;

    if (!type || !term) {
        redirect("/");
    }

    try {
        const objects = await getLDAPObjects(type, term);
        object = objects[0];
    } catch (e: any) {
        e.printStackTrace();
    }

    // page holds cards of LDAP object details
    // last fetch here, takes only first result

    return (
        <div>
            <h1>Enumerated details of LDAP object</h1>
        </div>
    )
}