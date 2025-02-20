export const setActiveTab = (activeTab) => ({
  type: "SET_ACTIVE_TAB",
  payload: activeTab,
});

export const changeActiveTab = (activeTab) => {
  return async (dispatch) => dispatch(setActiveTab(activeTab));
};
