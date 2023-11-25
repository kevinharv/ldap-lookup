import { redirect } from "next/navigation";
import { Suspense } from "react";
import { getLDAPObjects } from "@/utils/fetchLDAP";



export default async function Page(req: any) {
    const type = req.searchParams.type;
    const term = req.searchParams.term;

    if (!type || !term) {
        redirect("/");
    }

    try {
        const objects = await getLDAPObjects(type, term);
        if (objects.legnth <= 1) {
            redirect(`/results/details?type=${type}&term=${term}`);
        }
    } catch (e: any) {
        e.printStackTrace();
    }


    // If more than one result, present list to choose
        // Should be based on display name and sAMAccountName

    // If only one result, present results

    return (
        <div>
            <Suspense fallback={<h1>Loading...</h1>}>
            </Suspense>
        </div>
    )
}