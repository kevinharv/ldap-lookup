

export default function ResultCard(props: {
    fieldName: string,
    fieldValue: string
}) {

    // Create card for each section
    // Contains table of details

    // (FRIENDLY) FIELD NAME | VALUE | DESCRIPTION
    // Tooltip on each field name that shows the LDAP field? Maybe swap that and description?

    return (
        <div className="p-2 m-2 rounded-md bg-neutral-800 flex flex-row justify-between">
            <h1>{props.fieldName}</h1>
            <h1>{props.fieldValue}</h1>
        </div>
    )
}