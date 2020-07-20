const dogs = (state = [], action) => {
  console.log("9", action);
  console.log("a.id", action.id);
  switch (action.type) {
    case "FETCH_DOG":
      console.log("f", action.id);
      return { ...state, dog: action.payload };
    // return state.filter(dog => dog.id === action.id);

    default:
      return state;
  }
};

export default dogs;

// case "CREATE_BOOK":
//       return [
//         ...state,
//         {
//           id: action.id,
//           title: action.title,
//           category: action.category
//         }
//       ];
//     case "REMOVE_BOOK":
//       return state.filter(dog => dog.id !== action.id);
