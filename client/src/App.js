import React from "react";
import AddBooks from "./components/AddBooks";
import BookList from "./components/BookList";

const App = () => {
  return (
    <div className="App">
      <h1>Reading List</h1>
      <BookList />
      <AddBooks />
    </div>
  );
};

export default App;
