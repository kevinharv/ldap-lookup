"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { z } from 'zod';

interface SearchFormState {
  searchCategory: string;
  searchTerm: string;
}

// Zod form validation requirements
const searchTermSchema = z.string().length(5);

export default function SearchCard() {
    const router = useRouter();

    /*
        - State vars for form fields.
        - Setter functions for change events
        - Forms are hard :(
    */
    const [formState, setFormState] = useState<SearchFormState>({
        searchCategory: 'user',
        searchTerm: '',
    });
    const handleCategoryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormState({ ...formState, searchCategory: event.target.value });
    };
    const handleSearchTermChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormState({ ...formState, searchTerm: event.target.value });
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('[DEBUG] Category:', formState.searchCategory);
        console.log('[DEBUG] Search Term:', formState.searchTerm);
        
        // Validate input using Zod schema
        if (!searchTermSchema.safeParse(formState.searchTerm).success) {
            console.log("[ERROR] Invalid entry detected.");
            return;
        }

        // Redirect to appropriate page based on category
        const category = formState.searchCategory;
        if (category == "user") {
            router.push(`/user/${formState.searchTerm}`);
        } else if (category == "group") {
            router.push(`/group/${formState.searchTerm}`);
        } else if (category == "computer") {
            router.push(`/computer/${formState.searchTerm}`);
        } else {
            console.log("ERROR: An illegal category has been selected!");
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="p-2">
            <div className="my-2">
                <input
                type="radio"
                id="user"
                name="category"
                value="user"
                checked={formState.searchCategory === 'user'}
                onChange={handleCategoryChange}
                />
                <label className="ml-2" htmlFor="user">User</label>
            </div>
            <div>
                <input
                type="radio"
                id="group"
                name="category"
                value="group"
                checked={formState.searchCategory === 'group'}
                onChange={handleCategoryChange}
                />
                <label className="ml-2" htmlFor="group">Group</label>
            </div>
            <div className="my-2">
                <input
                type="radio"
                id="computer"
                name="category"
                value="computer"
                checked={formState.searchCategory === 'computer'}
                onChange={handleCategoryChange}
                />
                <label className="ml-2" htmlFor="computer">Computer</label>
            </div>
            <div>
                <label htmlFor="searchTerm">Search Term:</label>
                <input
                className="w-full text-black"
                type="text"
                id="searchTerm"
                name="searchTerm"
                placeholder="ABC123 | UTD-12345"
                value={formState.searchTerm}
                onChange={handleSearchTermChange}
                />
            </div>
            <div className="flex justify-center mt-2 border-2">
                <button type="submit">Search</button>
            </div>
            </form>            
        </div>
    );
}