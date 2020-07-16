import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Dog from "../components/Dog";
import { changeFilter } from "../actions"; //removeBook,
import CategoryFilter from "../components/CategoryFilter";

function mapStateToProps(state) {
  const { dogs, filter } = state;
  return { dogs, filter };
}

const mapDispatchToProps = dispatch => ({
  // removeBook: id => dispatch(removeBook(id)),
  changeFilter: value => dispatch(changeFilter(value))
});

const DogsList = ({ dogs, filter, changeFilter }) => {
  const handleFilterChange = e => {
    const { value } = e.target;
    changeFilter(value);
  };

  const filteredDogs = () =>
    filter === "All" ? dogs : dogs.filter(dog => dog.category === filter);

  return (
    <div className="dogs-list">
      <CategoryFilter handleChange={handleFilterChange} />
      <div>
        {filteredDogs().map(dog => (
          <Link key={dog.id} to={{ pathname: `/dog/${dog.id}`, state: dog }}>
            <Dog key={dog.id} dog={dog} />
          </Link>
        ))}
      </div>
    </div>
  );
};

DogsList.propTypes = {
  dogs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      apparel_category: PropTypes.string.isRequired,
      apparel_name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      // sizes: PropTypes.string.isRequired,
      stars: PropTypes.number.isRequired
    }).isRequired
  ).isRequired,
  // removeBook: PropTypes.func.isRequired,
  changeFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(DogsList);
