"use client"
import { ChangeEvent, FormEvent, useState } from "react";

export default function SearchForm() {
    const [searchTerm, setSearchTerm] = useState<string>("");

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        setSearchTerm(e.target.value);
    }

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        alert(`Searching for ${searchTerm}...`);
        setSearchTerm("");
    }

    return (
        <div className="mt-4">
            <form onSubmit={handleSubmit} className="flex flex-col">
                <label className="flex flex-col italic">Search
                    <input 
                        type="text"
                        name="search-term" 
                        placeholder="Term..."
                        value={searchTerm}
                        onChange={handleChange}
                        className="p-2 mb-2 rounded-md text-neutral-900"
                    />
                </label>
                <button type="submit" className="py-2 rounded-md bg-neutral-700">Submit</button>
            </form>
        </div>
    );
}