import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AddAuthor from "./components/AddAuthor";
import HomePage from "./components/HomePage";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Route path="/add-author" component={AddAuthor} exact />
        <Route path="/" component={HomePage} exact />
      </div>
    </Router>
  );
};

export default App;
