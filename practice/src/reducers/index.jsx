import { ADD_USER, UPDATE_USER} from "../store/Constants";

/**get item localStorage */
const listUsers = JSON.parse(localStorage.getItem("listUser")) || [];

const initState = {
  users: listUsers,
};

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_USER: {
      const users = [...state.users, action.payload];
      localStorage.setItem("listUser", JSON.stringify(users));
      return {
        ...state,
        users: users,
      };
    }

    case UPDATE_USER: {
      const updatedUser = action.payload;
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

    default:
    // throw new Error("Invalid action");
    throw new Error(`Unknown action type: ${action.type}`);
  }
};

export { initState };
export default reducer;
