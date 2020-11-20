import React from "react";
import AddBooks from "./components/AddBooks";
import BookList from "./components/BookList";

const App = () => {
  return (
    <div className="App">
      <h1>My Reading List</h1>
      <AddBooks />
      <BookList />
    </div>
  );
};

export default App;
