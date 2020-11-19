import React from "react";

const BookDetails = ({ book, loading }) => {
  return (
    <div className="book-detail">
      <p>Book details</p>
      {loading ? (
        <p>Loading detail...</p>
      ) : (
        <div>
          <p>{book.name}</p>
          <p>{book.genre}</p>
        </div>
      )}
    </div>
  );
};

export default BookDetails;
