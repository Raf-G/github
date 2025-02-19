const initialState = {
  login: "",
  apiKey: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_LOGIN":
      return { ...state, login: action.payload };
    case "SET_API_KEY":
      return { ...state, apiKey: action.payload };
    default:
      return state;
  }
};

export default profileReducer;
