const initial = {
  data: ""
};

const reducer = (state = initial, action) => {
  switch (action.type) {
    case "SEARCH":
      return {
        ...state,
        data: action.data
      };
    default:
      return state;
  }
};

export default reducer;
