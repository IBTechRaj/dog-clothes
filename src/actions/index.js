// import getId from "../utils/getId";

export const FETCH_DOG = id => dispatch => ({
  type: "FETCH DOG",
  payload: id
});
export const CLEAR_DATA = () => dispatch => {
  dispatch({
    type: "RESET_DATA"
  });
};

// export const createBook = (title, category) => ({
//   type: "CREATE_BOOK",
//   id: getId(),
//   title,
//   category
// });

// export const REMOVE_BOOK = id => ({
//   type: "REMOVE_BOOK",
//   id
// });

export const changeFilter = filter => ({
  type: "CHANGE_FILTER",
  filter
});

// const FETCH_RECIPE = foodId => async dispatch => {
//   const data = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${foodId}`);
//   dispatch({
//     type: 'FETCH RECIPE',
//     payload: data.data.meals[0],
//   });
// };
