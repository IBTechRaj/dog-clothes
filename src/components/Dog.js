import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Dog.css';

function Dog({ dog }) {
  return (<div className="dog-panel">
      <div className="cards">
          <img
              alt="no"
              className="pic"
              src={dog.image}
          />
          <p>
              {' '}
              {dog.apparel_name}
          </p>
      </div>
  </div>);
}

Dog.propTypes = {
  dog: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    apparel_category: PropTypes.string.isRequired,
    apparel_name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    stars: PropTypes.number.isRequired,
  }).isRequired,
};

export default Dog;
