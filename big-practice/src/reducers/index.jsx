import {
  ADD_USER,
  DELETE_USER,
  UPDATE_USER,
  SEARCH_USER,
} from "../constants";

/**  get from localStorage */
const listUser = JSON.parse(localStorage.getItem("listUser")) || [];

const initState = {
  users: listUser,
  isSearchActive: false,
  filteredList: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_USER: {
      const users = [...state.users, action.data];
      localStorage.setItem("listUser", JSON.stringify(users));

      return {
        ...state,
        users: users,
      };
    }

    case UPDATE_USER: {
      const updatedUser = action.data;
      const updatedUsers = state.users.map((user) => {
        if (user.id === updatedUser.id) {
          return updatedUser;
        }
        return user;
      });
      localStorage.setItem("listUser", JSON.stringify(updatedUsers));

      return {
        ...state,
        users: updatedUsers,
      };
    }

    case DELETE_USER: {
      return {
        ...state,
        // Delete by id
        users: state.users.filter(
          (user) => user.id !== action.data
          ),
          // localStorage.removeItem("listUser", JSON.stringify(action.data));
      };
    }

    case SEARCH_USER: {
      return {
        ...state,
        // convert to lowcase
        users: state.users.filter(
          (user) =>
            user.name
              .toLowerCase()
              .search(action.data.toLowerCase().trim()) !== -1
        ),
      };
    }

    default:
      return state;
    // throw new Error(`Unknown action type: ${action.type}`);

  }
}

export { initState };
export default reducer;
