import { ADD_USER } from "../store/constants";

export const addUser = payload => ({
  type: ADD_USER,
  payload,
});
