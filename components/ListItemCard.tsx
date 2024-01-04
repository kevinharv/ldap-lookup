import Link from "next/link"

export default function ListItemCard(props: {displayName: string, sAMAccountName: string}) {

    return (
        <div>
            <h1>{props.displayName}</h1>
            <h2>{props.sAMAccountName}</h2>
            <Link href={`/results/details?type=user&term=${props.sAMAccountName}`}>GO</Link>
        </div>
    )
}