


export default async function User(props: any) {
    const res = await fetch(`http://localhost:3000/api/user?term=${props.term}`, {
        method: "GET"
    });
    const user = await res.json();
    // console.log(user);

    // Build objects for results cards
    // Should include field name, value, description?

    return (
        <h1>Distinguished Name: {user[0].dn}</h1>
    )
}