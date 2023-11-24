

export default function ResultCard(props: any) {

    // Create card for each section
    // Contains table of details

    // (FRIENDLY) FIELD NAME | VALUE | DESCRIPTION
    // Tooltip on each field name that shows the LDAP field? Maybe swap that and description?

    return (
        <div className="border-2">
            <h1>{props.name}</h1>
        </div>
    )
}