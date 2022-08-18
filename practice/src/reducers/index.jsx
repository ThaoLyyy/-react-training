import { actions } from "../store";
import { ADD_USER } from "../store/constants";

const listUser = JSON.parse(localStorage.getItem("listUser")) || [];

const initState = {
  users: listUser,
  user: {
    id: new Date().getTime().toString(),
  },
};

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_USER: {
      return {
        ...state,
        id: new Date().getTime().toString(),
        users: [...state.users, action.payload],
        user: {
          id: new Date().getTime().toString(),
          image: action.payload.userImage,
          username: action.payload.userName,
          email: action.payload.userEmail,
          phone: action.payload.userPhone,
          address: action.payload.userAddress,
        },
      };
    }

    default:
      throw new Error("Invalid action");
  }
};

export { initState };
export default reducer;
