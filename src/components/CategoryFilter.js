import React from "react";
import PropTypes from "prop-types";
import "../styles/CategoryFilter.css";

const CATEGORIES = [
  "Action",
  "Biography",
  "History",
  "Horror",
  "Kids",
  "Learning",
  "Sci-Fi"
];

const CategoryFilter = ({ handleChange }) => (
  <div className="category-filter">
    <span>Choose the Category to view</span>
    <select className="select" onChange={handleChange}>
      <option value="All">All</option>
      {CATEGORIES.map(e => (
        <option key={e} value={e}>
          {e}
        </option>
      ))}
    </select>
  </div>
);

CategoryFilter.propTypes = { handleChange: PropTypes.func.isRequired };

export default CategoryFilter;
