import React, { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import AuthorList from "./AuthorList";
import { ADD_AUTHOR, GET_AUTHORS } from "../queries/queries";

const AddAuthor = () => {
  const [authorName, setAuthorName] = useState("");
  const [age, setAge] = useState(0);

  const { loading, data } = useQuery(GET_AUTHORS);

  const [addAuthor] = useMutation(ADD_AUTHOR, {
    refetchQueries: [{ query: GET_AUTHORS }],
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addAuthor({ variables: { name: authorName, age: Number(age) } });
    setAuthorName("");
    setAge(0);
  };

  return (
    <div className="add-author">
      <form onSubmit={handleSubmit}>
        <h1>Add a New Author</h1>
        <div className="field">
          <label>Name</label>
          <input
            type="text"
            name="author"
            value={authorName}
            onChange={(e) => setAuthorName(e.target.value)}
          />
        </div>
        <div className="field">
          <label>Age</label>
          <input
            type="text"
            name="author"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <div className="add-button">
          <button className="btn">Add Author</button>
        </div>
      </form>
      <AuthorList loading={loading} authors={data && data.authors} />
    </div>
  );
};

export default AddAuthor;
