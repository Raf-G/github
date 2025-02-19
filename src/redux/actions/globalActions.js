export const setData = (data) => ({
  type: "SET_DATA",
  payload: data,
});

export const fetchData = () => {
  return async (dispatch) => {
    try {
      const response = await fetch("https://api.example.com/data");
      const data = await response.json();
      dispatch(setData(data));
    } catch (error) {
      dispatch(setData([{ id: 1, name: "Ошибочка" }]));
      console.error("Ошибка при загрузке данных:", error);
    }
  };
};
