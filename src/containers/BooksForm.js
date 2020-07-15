import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createBook } from '../actions';
import '../styles/BooksForm.css';

const CATEGORIES = [
  'Action',
  'Biography',
  'History',
  'Horror',
  'Kids',
  'Learning',
  'Sci-Fi',
];

class BooksForm extends React.Component {
  constructor() {
    super();
    this.state = { title: '', category: '' };
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { title, category } = this.state;
    const { createBook } = this.props;

    if (title && category) {
      createBook(title, category);
      this.setState({
        title: '',
        category: '',
      });
    }
  };

  render() {
    const { title, category } = this.state;

    return (
      <div className="books-form">
        <div className="ab-title"> ADD BOOK </div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="title"
            value={title}
            onChange={this.handleChange}
            placeholder="Book Title"
          />
          {/* </label> */}
          <select
            name="category"
            value={category}
            onChange={this.handleChange}
            id=""
          >
            <option defaultValue="">Choose a category</option>
            {CATEGORIES.map(category => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          <button type="submit" value="ADD BOOK" className="add-book">
            Add Book{' '}
          </button>
        </form>
      </div>
    );
  }
}

BooksForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};

export default connect(null, { createBook })(BooksForm);
