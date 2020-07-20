import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Dog from '../components/Dog';
import changeFilter from '../actions'; // removeBook,
import CategoryFilter from '../components/CategoryFilter';
import '../styles/DogsList.css';

function mapStateToProps(state) {
  const { dogs, filter } = state;
  return { dogs, filter };
}

const mapDispatchToProps = dispatch => ({
  // removeBook: id => dispatch(removeBook(id)),
  changeFilter: value => dispatch(changeFilter(value)),
});

function DogsList({ dogs, filter, changeFilter }) {
  const handleFilterChange = e => {
    const { value } = e.target;
    // console.log('v', value);
    changeFilter(value);
  };

  const filteredDogs = () => (filter === 'All'
    ? dogs
    : dogs.filter(dog => dog.apparel_category === filter));
  // console.log('f', filter);
  return (
      <div className="dogs-list">
          <div>
              <div className="dogs-clothes-store">
                  Dog Clothes Store
              </div>
              <div className="dogs-filter">
                  <CategoryFilter handleChange={handleFilterChange} />
              </div>
          </div>
          <div className="album">
              {filteredDogs().map(dog => (
                  <Link
                      key={dog.id}
                      to={{ pathname: `/dog/${dog.id}`, state: dog }}
                  >
                      <Dog
                          dog={dog}
                          key={dog.id}
                      />
                  </Link>
              ))}
          </div>
      </div>
  );
}

DogsList.propTypes = {
  dogs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      apparel_category: PropTypes.string.isRequired,
      apparel_name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      // sizes: PropTypes.string.isRequired,
      stars: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
  // removeBook: PropTypes.func.isRequired,
  changeFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(DogsList);
