import { getLDAPObject } from "@/utils/fetchLDAP"
import { redirect } from "next/navigation";

export default async function Page(req: any) {
    const type = req.searchParams.type;
    const term = req.searchParams.term;
    let object: any = null;

    if (!type || !term) {
        redirect("/");
    }

    try {
        object = await getLDAPObject(type, term);
    } catch (e: any) {
        e.printStackTrace();
    }

    let elements: string[] = [];
    for (let [key, value] of Object.entries(object[0])) {
        elements.push(`${key}: ${value}`);
    }

    // page holds cards of LDAP object details
    // last fetch here, takes only first result

    return (
        <div className="overflow-scroll">
            <h1>Enumerated details of LDAP object</h1>
            {elements.map((element: string) => {
                return <h3>{element}</h3>;
            })}
        </div>
    )
}