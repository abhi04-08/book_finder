import React from 'react';


function BookCard({ book }) {
    const coverId = book.cover_i;
    const coverUrl = coverId
        ? `https://covers.openlibrary.org/b/id/${coverId}-M.jpg`
        : "https://via.placeholder.com/150x200?text=No+Cover";


    return (
        <div className="bg-white shadow-md rounded p-4 hover:shadow-xl transition-shadow">
            <img src={coverUrl} alt={book.title} className="w-full h-64 object-cover mb-4"/>
            <h2 className="text-lg font-semibold">{book.title}</h2>
            <p className="text-gray-600">Author: {book.author_name ? book.author_name.join(", ") : "Unknown"}</p>
            <p className="text-gray-600">First Published: {book.first_publish_year || "N/A"}</p>
        </div>
    );
}

export default BookCard;