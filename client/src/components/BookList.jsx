import React from "react";
import { useQuery, useLazyQuery } from "@apollo/client";
import { GET_BOOKS, GET_BOOK } from "../queries/queries";
import BookDetails from "./BookDetails";

const BookList = () => {
  const { loading, error, data } = useQuery(GET_BOOKS);
  console.log(data);

  const [getBook, { loading: loadingBook, data: bookDetails }] = useLazyQuery(
    GET_BOOK
  );

  const handleClick = (id) => {
    console.log(id);
    getBook({
      variables: { id },
    });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error Loading :(</p>;

  return (
    <div>
      <ul id="book-list">
        {data.books.map((book) => (
          <li key={book.id} onClick={() => handleClick(book.id)}>
            {book.name}
          </li>
        ))}
      </ul>
      {bookDetails && (
        <BookDetails book={bookDetails.book} loading={loadingBook} />
      )}
    </div>
  );
};

export default BookList;
