import { redirect } from "next/navigation";
import { Suspense } from "react";
import ResultList from "@/components/ResultList";



export default function Page(req: any) {
    const type = req.searchParams.type;
    const term = req.searchParams.term;

    if (!type || !term) {
        redirect("/");
    }

    return (
        <Suspense fallback={<h1>Loading...</h1>}>
            <ResultList type={type} term={term} />
        </Suspense>
    );
}