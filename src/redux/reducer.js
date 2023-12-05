const reducer = (state = 0, action) => {
  switch ((action, state)) {
    case "ADD_TO_CART":
      return state + 1;
    case "REMOVE_ITEM":
      return state - 1;

    default:
      return state;
  }
};

export default reducer;
