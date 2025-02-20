import { toast } from "react-toastify";

const API_URL = `https://api.github.com/user/repos`;

export const setRepositories = (repositories) => ({
  type: "SET_REPOSITORIES",
  payload: repositories,
});

export const setLoading = (loading) => ({
  type: "SET_LOADING",
  payload: loading,
});

export const setNewRepoName = (name) => ({
  type: "SET_NEW_REPO_NAME",
  payload: name,
});

export const setNewRepoDescription = (description) => ({
  type: "SET_NEW_REPO_DESCRIPTION",
  payload: description,
});

export const setNewRepoVisibility = (visibility) => ({
  type: "SET_NEW_REPO_VISIBILITY",
  payload: visibility,
});

export const setShowCreateModal = (showCreateModal) => ({
  type: "SET_SHOW_CREATE_MODAL",
  payload: showCreateModal,
});

export const setSelectedRepo = (selectedRepo) => ({
  type: "SET_SELECTED_REPO",
  payload: selectedRepo,
});

export const setUpdateRepoDescription = (updateRepoDescription) => ({
  type: "SET_UPDATE_REPO_DESCRIPTION",
  payload: updateRepoDescription,
});

export const setUpdateRepoVisibility = (updateRepoVisibility) => ({
  type: "SET_UPDATE_REPO_VISIBILITY",
  payload: updateRepoVisibility,
});

export const setShowUpdateModal = (showUpdateModal) => ({
  type: "SET_SHOW_UPDATE_MODAL",
  payload: showUpdateModal,
});

export const changeNewRepoName = (name) => {
  return async (dispatch) => dispatch(setNewRepoName(name));
};

export const changeNewRepoDescription = (description) => {
  return async (dispatch) => dispatch(setNewRepoDescription(description));
};

export const changeNewRepoVisibility = (visibility) => {
  return async (dispatch) => dispatch(setNewRepoVisibility(visibility));
};

export const changeShowCreateModal = (showCreateModal) => {
  return async (dispatch) => dispatch(setShowCreateModal(showCreateModal));
};

export const changeSelectedRepo = (selectedRepo) => {
  return async (dispatch) => dispatch(setSelectedRepo(selectedRepo));
};

export const changeUpdateRepoDescription = (updateRepoDescription) => {
  return async (dispatch) =>
    dispatch(setUpdateRepoDescription(updateRepoDescription));
};

export const changeUpdateRepoVisibility = (updateRepoVisibility) => {
  return async (dispatch) =>
    dispatch(setUpdateRepoVisibility(updateRepoVisibility));
};

export const changeShowUpdateModal = (showUpdateModal) => {
  return async (dispatch) => dispatch(setShowUpdateModal(showUpdateModal));
};

export const getRepositories = async (apiKey, dispatch) => {
  dispatch(setLoading(true));

  try {
    const response = await fetch(API_URL, {
      headers: {
        Authorization: `token ${apiKey}`,
      },
    });

    if (!response.ok) {
      toast.error(`Ошибка: ${response.status}`);

      return;
    }

    const data = await response.json();
    dispatch(setRepositories(data));
  } catch (error) {
  } finally {
    dispatch(setLoading(false));
  }
};

export const postCreateSubmit = async (
  apiKey,
  newRepoName,
  newRepoDescription,
  newRepoVisibility,
  dispatch
) => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        Authorization: `token ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: newRepoName,
        description: newRepoDescription,
        private: newRepoVisibility === "private",
      }),
    });

    if (!response.ok) {
      toast.error(`Ошибка: ${response.status}`);

      return;
    }

    getRepositories(apiKey, dispatch);
    dispatch(changeShowCreateModal());
  } catch (error) {
    toast.error(error.message);
  }
};

export const updateShow = (repo, dispatch) => {
  dispatch(changeSelectedRepo(repo));
  dispatch(changeUpdateRepoDescription(repo.description));
  dispatch(changeUpdateRepoVisibility(repo.private ? "private" : "public"));
  dispatch(changeShowUpdateModal(true));
};