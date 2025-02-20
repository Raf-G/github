const initialState = {
  repositories: [],
  loading: false,
  newRepoName: "",
  newRepoDescription: "",
  newRepoVisibility: "public",
  showCreateModal: false,
  selectedRepo: null,
  updateRepoDescription: "",
  updateRepoVisibility: "public",
  showUpdateModal: false,
};

const repositoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_REPOSITORIES":
      return { ...state, repositories: action.payload };
    case "SET_LOADING":
      return { ...state, loading: action.payload };
    case "SET_NEW_REPO_NAME":
      return { ...state, newRepoName: action.payload };
    case "SET_NEW_REPO_DESCRIPTION":
      return { ...state, newRepoDescription: action.payload };
    case "SET_NEW_REPO_VISIBILITY":
      return { ...state, newRepoVisibility: action.payload };
    case "SET_SHOW_CREATE_MODAL":
      return { ...state, showCreateModal: action.payload };
    case "SET_SELECTED_REPO":
      return { ...state, selectedRepo: action.payload };
    case "SET_UPDATE_REPO_DESCRIPTION":
      return { ...state, updateRepoDescription: action.payload };
    case "SET_UPDATE_REPO_VISIBILITY":
      return { ...state, updateRepoVisibility: action.payload };
    case "SET_SHOW_UPDATE_MODAL":
      return { ...state, showUpdateModal: action.payload };
    default:
      return state;
  }
};

export default repositoriesReducer;
