export const setLogin = (login) => ({
  type: "SET_LOGIN",
  payload: login,
});

export const setApiKey = (key) => ({
  type: "SET_API_KEY",
  payload: key,
});

export const changeLogin = (login) => {
  return async (dispatch) => dispatch(setLogin(login));
};

export const changeApiKey = (apiKey) => {
  return async (dispatch) => dispatch(setApiKey(apiKey));
};
