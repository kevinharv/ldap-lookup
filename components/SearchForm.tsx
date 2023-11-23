"use client"
import { ChangeEvent, FormEvent, MouseEventHandler, useState } from "react";

enum ObjectType {
    USER = "User",
    GROUP = "Group",
    COMPUTER = "Computer"
}

export default function SearchForm() {
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [objType, setObjType] = useState<ObjectType>(ObjectType.USER);

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        setSearchTerm(e.target.value);
    }

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        alert(`Searching for ${searchTerm} in ${objType}s`);
        setSearchTerm("");
    }

    return (
        <div className="mt-4">
            <form onSubmit={handleSubmit} className="flex flex-col">
                <div className="flex justify-center mb-2">
                    {objType == ObjectType.USER && <button type="button" className="mr-2 p-2 rounded-md bg-blue-800 w-full">User</button>}
                    {objType != ObjectType.USER && <button type="button" onClick={(e) => { setObjType(ObjectType.USER) }} className="mr-2 p-2 rounded-md bg-neutral-700 hover:bg-blue-800 w-full">User</button>}
                    {objType == ObjectType.GROUP && <button type="button" className="p-2 rounded-md bg-blue-800 w-full">Group</button>}
                    {objType != ObjectType.GROUP && <button type="button" onClick={(e) => { setObjType(ObjectType.GROUP) }} className="p-2 rounded-md bg-neutral-700 hover:bg-blue-800 w-full">Group</button>}
                    {objType == ObjectType.COMPUTER && <button type="button" className="ml-2 p-2 rounded-md bg-blue-800 w-full">Computer</button>}
                    {objType != ObjectType.COMPUTER && <button type="button" onClick={(e) => { setObjType(ObjectType.COMPUTER) }} className="ml-2 p-2 rounded-md bg-neutral-700 hover:bg-blue-800 w-full">Computer</button>}
                </div>
                <label className="flex flex-col italic">
                    <input 
                        type="text"
                        name="search-term" 
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={handleChange}
                        className="p-2 mb-2 rounded-md text-neutral-900"
                    />
                </label>
                <button type="submit" className="py-2 rounded-md bg-neutral-700 hover:bg-blue-800">Submit</button>
            </form>
        </div>
    );
}