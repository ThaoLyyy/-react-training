import { actions } from "../store";
import { Add_User } from "../store/Constants";

const listUser = JSON.parse(localStorage.getItem("listUser")) || [];

const initState = {
  users: listUser,
  user: {
    id: new Date().getTime().toString(),
  },
};

const reducer = (state, action) => {
  switch (action.type) {
    case Add_User: {
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
