import React from "react";
import { Link } from "react-router-dom";

const AuthorList = ({ loading, authors }) => {
  return (
    <div className="author-list">
      <Link to="/" className="btn-link">
        Back
      </Link>
      <h2>Author List</h2>
      {loading ? (
        <p>Loading authors...</p>
      ) : (
        <div className="container">
          <ul>
            {authors &&
              authors.map((author) => <li key={author.id}>{author.name}</li>)}
          </ul>
        </div>
      )}
    </div>
  );
};

export default AuthorList;
