import React from "react";
import PropTypes from "prop-types";
import "../styles/DogDetails.scss";
import { connect } from "react-redux";
// import { FETCH_DOG, CLEAR_DATA } from "../actions/index";

function mapStateToProps(state) {
  const { dogs, filter } = state;
  return { dogs, filter };
}
function DogDetails({ location }) {
  // console.log('12', location);
  const dog = location.state;
  return (
    <div className="dog-item">
      <div className="show-item">
        <img alt="Img missing" src={dog.image} />
      </div>
      <div className="info">
        <h1 className="title">{dog.apparel_name}</h1>
        <ul className="details">
          <li className="item">Category :{dog.apparel_category}</li>
          <li className="item">Price : $ {dog.price}</li>
          <li className="item">Rating :{dog.stars} Star</li>
        </ul>
      </div>
    </div>
  );
}

DogDetails.propTypes = {
  location: PropTypes.instanceOf(Object).isRequired
};

export default connect(mapStateToProps, null)(DogDetails);
