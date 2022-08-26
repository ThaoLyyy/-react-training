import { useReducer } from "react";
// import Context from "./Context";
import reducer, { initState } from "../reducers";
import { actions } from ".";
import Context from "./Context";

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState);

  const value = {
    users: state.users,
    filteredList: state.filteredList,
    addUser: ({ ...user }) => {
      dispatch(actions.addUser(user));
    },
    deleteUser: (id) => {
      dispatch(actions.deleteUser(id));
    },
    updateUser: (user) => {
      dispatch(actions.updateUser(user));
    },
    searchUser: (name) => {
      dispatch(actions.searchUser(name));
    },
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export default Provider;
