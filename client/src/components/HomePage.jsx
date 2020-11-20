import React from "react";
import AddBooks from "./AddBooks";
import BookList from "./BookList";

const HomePage = () => {
  return (
    <>
      <h1>My Reading List</h1>
      <AddBooks />
      <BookList />
    </>
  );
};

export default HomePage;
