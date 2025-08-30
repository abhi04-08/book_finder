import React, { useState } from 'react';
import SearchBar from "./components/SearchBar";
import BookList from "./components/BookList";

function App() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (query) => {
    if (!query) return;
    setLoading(true);
    try {
      const res = await fetch(`https://openlibrary.org/search.json?title=${query}`);
      const data = await res.json();
      setBooks(data.docs);
    }catch(error){
      console.error("Error fetching errors:", error);
    } finally{
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
        <h1 className="text-3xl font-bold text-center mb-6">📚 Book Finder</h1>
        <SearchBar onSearch={handleSearch}/>
        {loading ? (
          <p className="text-center mt-4">Searching Books....</p>
        ) : (
          <BookList books={books}/>
        )}
    </div>
  );
}

export default App;