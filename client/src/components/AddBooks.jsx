import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { GET_AUTHORS, ADD_BOOK, GET_BOOKS } from "../queries/queries";

const AddBooks = () => {
  const [name, setName] = useState("");
  const [genre, setGenre] = useState("");
  const [author, setAuthor] = useState("");

  const { loading, error, data } = useQuery(GET_AUTHORS);

  const [addBook] = useMutation(ADD_BOOK, {
    refetchQueries: [{ query: GET_BOOKS }],
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, genre, author);
    addBook({ variables: { name, genre, authorId: author } });
    setAuthor("");
    setGenre("");
    setName("");
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div className="add-books">
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label>Book Name</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="field">
          <label>Genre</label>
          <input
            type="text"
            name="genre"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          />
        </div>
        <div className="field">
          <label>Author</label>
          <select
            name="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          >
            <option default>Select author</option>
            {data.authors.map((author) => (
              <option value={author.id} key={author.id}>
                {author.name}
              </option>
            ))}
          </select>
        </div>
        <div className="add-button">
          <button className="btn">Add Book</button>
        </div>
      </form>
    </div>
  );
};

export default AddBooks;
