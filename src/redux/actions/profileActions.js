import { toast } from "react-toastify";

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

export const saveUser = async (login, apiKey) => {
  if (login && apiKey) {
    try {
      const response = await fetch(`https://api.github.com/users/${login}`, {
        headers: {
          Authorization: `token ${apiKey}`,
        },
      });

      if (!response.ok) {
        if (response.status === 401) {
          toast.error("Неверный API Key!");
        } else if (response.status === 404) {
          toast.error("Пользователь не найден!");
        } else {
          toast.error(`Ошибка: ${response.status}`);
        }
      }

      const data = await response.json();
      console.log(data);
      toast.success('Данный сохранены!')
    } catch (err) {
      toast.error(`Произошла ошибка!`);
    }
  }
};
