import { redirect } from "next/navigation";
import { searchLDAPObjects } from "@/utils/fetchLDAP";
import ListItemCard from "@/components/ListItemCard";



export default async function Page(req: any) {
    const type = req.searchParams.type;
    const term = req.searchParams.term;
    let objects = [];

    if (!type || !term) {
        redirect("/");
    }

    try {
        objects = await searchLDAPObjects(type, term);
        if (objects.legnth <= 1) {
            redirect(`/results/details?type=${type}&term=${term}`);
        }
    } catch (e: any) {
        e.printStackTrace();
    }


    // If more than one result, present list to choose
        // Should be based on display name and sAMAccountName

    // If only one result, present results

    // TODO - abstract for computer, user, group

    return (
        <div>
            {objects.map((obj: any) => {
                return <ListItemCard key={obj.dn} displayName={obj.displayName} sAMAccountName={obj.sAMAccountName} />
            })}
        </div>
    )
}