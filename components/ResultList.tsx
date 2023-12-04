import { searchLDAPObjects } from "@/utils/fetchLDAP"
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function ResultList(props: any) {
    const objects = await searchLDAPObjects(props.type, props.term, 10);
    console.log(objects)
    if (objects.results.length == 1) {
        redirect(`/results/details?type=${props.type}&term=${props.term}`);
    } else if (objects.results.length == 0) {
        return (
            <h1>No Results Found</h1>
        )
    }

    return (
        <table className="table-fixed border-collapse border-spacing-2">
            <caption className="caption-bottom">
                Select a user to continue.
            </caption>
            <thead>
                <tr className="border">
                    <th>Name</th>
                    <th>Account</th>
                    <th>Link</th>
                </tr>
            </thead>
            <tbody className="border">
                {objects.results.map((item: any) => {
                    return <tr key={item.dn} className="border">
                        <td className="p-2">{item.displayName ? item.displayName : (item.cn ? item.cn : "No Name")}</td>
                        <td className="p-2">{item.sAMAccountName ? item.sAMAccountName : ""}</td>
                        <td className="p-2"><Link className="bg-neutral-800 p-2 rounded-lg" href={`/results/details?type=${props.type}&term=${item.sAMAccountName}`}>Go</Link></td>
                    </tr>
                })}
            </tbody>
        </table>
    );
}