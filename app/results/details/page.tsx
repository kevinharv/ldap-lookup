import ResultCard from "@/components/ResultCard";
import { getLDAPObject } from "@/utils/fetchLDAP"
import { redirect } from "next/navigation";

interface LDAPField {
    fieldName: string,
    fieldValue: any
}

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

    let elements: LDAPField[] = [];
    for (let [key, value] of Object.entries(object.results[0])) {
        elements.push({
            "fieldName": key,
            "fieldValue": value
        });
    }

    // page holds cards of LDAP object details
    // last fetch here, takes only first result

    return (
        <div className="">
            <h1>Enumerated details of LDAP object</h1>
            {elements.map((element: LDAPField) => {
                return <ResultCard key={element.fieldName} fieldName={element.fieldName} fieldValue={element.fieldValue} />
            })}
        </div>
    )
}