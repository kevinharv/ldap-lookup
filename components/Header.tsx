import Link from "next/link";

export default function Header() {


    return (
        <div className="mb-4 w-full flex justify-start bg-neutral-800">
            <Link href="/"><h1 className="p-4 text-4xl font-bold">LDAP Lookup</h1></Link>
        </div>
    );
}