
export default function User() {
    fetch("localhost:3000/api/user", {method: "GET"});

    return(
        <>
            <h1>USER</h1>
        </>
    )
}