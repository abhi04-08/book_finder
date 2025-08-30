import React, { useState } from 'react';

function SearchBar({ onSearch }){
    const [query, setQuery] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(query);
    };

    return (
        <form onSubmit={handleSubmit} className="flex justify-center mb-6">
            <input 
                type='text'
                placeholder="Search for books"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-2/3 p-2 border-xl border-gray-300 rounded-1-md focus:outline-none"
            />
            <button 
                type="submit"
                className="bg-blue-600 text-white px-4 rounded-r-md hover:bg-green-700"
            >
                Search
            </button>
        </form>
    );
}

export default SearchBar;