import {
  ADD_USER,
  UPDATE_USER,
  DELETE_USER,
  SEARCH_USER,
} from "../constants";

/**get item localStorage */
const listUsers = JSON.parse(localStorage.getItem("listUser")) || [];

const initState = {
  users: listUsers,
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
      // localStorage.removeItem("listUser", JSON.stringify(action.data));
      return {
        ...state,
        // Delete by id
        users: state.users.filter((user) => user.id !== action.data),
      };
    }

    case SEARCH_USER: {
      return {
        ...state,
        // convert to lowcase
        users: state.users.filter(
          (user) =>
            user.name.toLowerCase().search(action.data.toLowerCase().trim()) !==
            -1
        ),
      };
    }

    default:
      return state;
  }
};

export { initState };
export default reducer;
