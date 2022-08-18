import { useReducer } from "react";
import Context from "./Context";
import { actions } from ".";
import reducer, { initState } from "../reducers";

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState);

  const value = {
    users: state.users,
    addUser: ({ ...user }) => {
      dispatch(actions.addUser(user));
    },
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export default Provider;
