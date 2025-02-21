import { toast } from "react-toastify";
import { API_USERS_URL } from "../../shared/api/api";

export const setLogin = (login) => ({
  type: "SET_LOGIN",
  payload: login,
});

export const setApiKey = (key) => ({
  type: "SET_API_KEY",
  payload: key,
});

export const setAuthorized = (authorized) => ({
  type: "SET_AUTHORIZED",
  payload: authorized,
});

export const changeLogin = (login) => {
  return async (dispatch) => dispatch(setLogin(login));
};

export const changeApiKey = (apiKey) => {
  return async (dispatch) => dispatch(setApiKey(apiKey));
};

export const changeAuthorized = (authorized) => {
  return async (dispatch) => dispatch(setAuthorized(authorized));
};

export const saveUser = async (login, apiKey, dispatch) => {
  if (login && apiKey) {
    try {
      const response = await fetch(`${API_USERS_URL}/${login}`, {
        headers: {
          Authorization: `token ${apiKey}`,
        },
      });

      if (!response.ok) {
        if (response.status === 401) {
          toast.error("Неверный API Key");
        } else if (response.status === 404) {
          toast.error("Пользователь не найден");
        } else {
          toast.error(`Ошибка: ${response.status}`);
        }

        dispatch(changeAuthorized(false));
        return;
      }

      localStorage.setItem("login", login);
      localStorage.setItem("apiKey", apiKey);

      toast.success("Данный сохранены");
      dispatch(changeAuthorized(true));
    } catch (err) {
      toast.error(`Произошла ошибка при авторизации`);
      dispatch(changeAuthorized(false));
    }
  }
};

export const checkInfo = (dispatch) => {
  const login = localStorage.getItem("login");
  const apiKey = localStorage.getItem("apiKey");

  if (login) {
    dispatch(changeLogin(login));
  }

  if (apiKey) {
    dispatch(changeApiKey(apiKey));
  }
};
