const initialState = {
  activeTab: "profile",
};

const globalReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ACTIVE_TAB":
      return { ...state, activeTab: action.payload };
    default:
      return state;
  }
};

export default globalReducer;
