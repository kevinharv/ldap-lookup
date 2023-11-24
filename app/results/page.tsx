import { redirect } from "next/navigation";
import { Suspense } from "react";
import User from "@/components/User";

async function getUser(term: string) {

}

async function getGroup(term: string) {

}

async function getComputer(term: string) {

}


export default async function Page(req: any) {
    const type = req.searchParams.type;
    const term = req.searchParams.term;

    if (!type || !term) {
        redirect("/");
    } else if (type == "user") {
        // Fetch user(s)
    } else if (type == "group") {
        // Fetch group(s)
    } else if (type == "computer") {
        // Fetch computer(s)
    } else {
        redirect("/");
    }

    // If more than one result, present list to choose
        // Should be based on display name and sAMAccountName

    // If only one result, present results

    return (
        <div>
            <Suspense fallback={<h1>Loading...</h1>}>
                <User term={term} />
            </Suspense>
        </div>
    )
}