import React from 'react';
import '../styles/App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import DogsList from '../containers/DogsList';
import DogDetails from './DogDetails';
// import BooksForm from "../containers/BooksForm";

function App() {
  return (
      <BrowserRouter>
          <div className="App">
              <Route
                  component={DogsList}
                  exact
                  path="/"
              />
              <Route
                  component={DogDetails}
                  path="/dog/:id"
              />
          </div>
      </BrowserRouter>
  );
}

export default App;
