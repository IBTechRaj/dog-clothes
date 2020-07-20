import React, { useEffect } from "react";
import PropTypes from "prop-types";
import "../styles/DogDetails.scss";
import { connect } from "react-redux";
import { FETCH_DOG, CLEAR_DATA } from "../actions/index";

function mapStateToProps(state) {
  const { dogs, filter } = state;
  return { dogs, filter };
}
function DogDetails({ location, dogs, fetchDog, clearData }) {
  // useEffect(() => {
  //   fetchDog(location.state.id);
  //   console.log("ue", dog.id);
  //   return clearData();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [fetchDog, clearData]);
  console.log("12", location);
  console.log(location.state.id);
  console.log("dgs", dogs);
  // console.log()
  const dog = location.state;
  // const dog = () => dogs.filter(dog => dog.id === location.state.id);
  console.log("dg", dog);
  return (
    // return Object.entries(dog).length === 0 ? (
    //   <p>Loading</p>
    // ) : (

    <div className="dog-item">
      <div className="show-item">
        <img src={dog.image} alt="Img missing" />
      </div>
      <div className="info">
        <h2 className="title">{dog.apparel_name}</h2>
        <ul className="ingredients">
          <li className="item">Category : {dog.apparel_category}</li>
          <li className="item">Price : {dog.price}</li>
          <li className="item">Rating : {dog.stars}</li>
        </ul>
      </div>
    </div>
  );
}

DogDetails.propTypes = {
  // id: PropTypes.number.isRequired,
  // image: PropTypes.string.isRequired,
  // apparel_name: PropTypes.string.isRequired,
  // apparel_category: PropTypes.string.isRequired,
  // price: PropTypes.number.isRequired,
  // stars: PropTypes.number.isRequired,
  // fetchDog: PropTypes.func.isRequired
  // dog: PropTypes.instanceOf(Object).isRequired,
  location: PropTypes.instanceOf(Object).isRequired
  // fetchDog: PropTypes.func.isRequired,
  // clearData: PropTypes.func.isRequired
};

// const mapStateToProps = state => ({
//   dog: state.dogs.dog
//   // console.log(dog),
// });

// const mapDispatchToProps = dispatch => ({
//   fetchDog: id => dispatch(FETCH_DOG(id)),
//   clearData: () => dispatch(CLEAR_DATA())
// });

export default connect(mapStateToProps, null)(DogDetails);
