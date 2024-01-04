import React from "react";


export default function Footer() {
    
    return (
        <div className="fixed bottom-0 mt-2 w-full flex justify-start bg-neutral-800">
            <h1 className="p-2 text-md font-bold">© {new Date().getFullYear()}</h1>
        </div>
    );
}