import React from "react";
import { Link } from "react-router-dom";

const BookDetails = ({ book, loading }) => {
  return (
    <div className="book-detail">
      <Link to="/add-author" className="btn-link">
        Add Author
      </Link>
      <h2>Book Details</h2>
      {loading ? (
        <p className="loader">Loading detail...</p>
      ) : book ? (
        <div className="container">
          <h1>{book.name}</h1>
          <h3>{book.genre}</h3>
          <p>{book.author.name}</p>
          <h3>Other Books by Author:</h3>
          <ul>
            {book.author.books.length > 1 ? (
              book.author.books.map((item) => (
                <li key={item.id}>{item.name}</li>
              ))
            ) : (
              <p>No other books found.</p>
            )}
          </ul>
        </div>
      ) : (
        <p className="default">No Book Selected</p>
      )}
    </div>
  );
};

export default BookDetails;
