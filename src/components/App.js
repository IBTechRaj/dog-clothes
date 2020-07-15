// import React from 'react';
import '../styles/App.css';
// import BooksList from '../containers/BooksList';
// import BooksForm from '../containers/BooksForm';

function App() {
  return (
    <div className="App">
      <nav>
        <li className="bookstore-cms">Bookstore CMS</li>
        <li className="books">BOOKS</li>
        <li className="categories">CATEGORIES</li>
        <li className="oval">
          <i className="mask" />
        </li>
      </nav>
      <BooksList />
      <BooksForm />
    </div>
  );
}

export default App;
