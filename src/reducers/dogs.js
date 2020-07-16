const dogs = (state = [], action) => {
  switch (action.type) {
    case "CREATE_BOOK":
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
          category: action.category
        }
      ];
    case "REMOVE_BOOK":
      return state.filter(dog => dog.id !== action.id);
    default:
      return state;
  }
};

export default dogs;
