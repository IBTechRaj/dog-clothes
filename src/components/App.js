import React from "react";
import "../styles/App.css";
import DogsList from "../containers/DogsList";
import Dog from "./Dog";
import { BrowserRouter, Route } from "react-router-dom";
// import BooksForm from "../containers/BooksForm";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <nav>
          <li className="bookstore-cms">Dog Clothes Store</li>
          <li className="books">DOGS</li>
          <li className="categories">CATEGORIES</li>
          <li className="oval">
            <i className="mask" />
          </li>
        </nav>
        <Route exact path="/" component={DogsList} />
        <Route path="/dog/:id" component={Dog} />
      </div>
    </BrowserRouter>
  );
}

export default App;
