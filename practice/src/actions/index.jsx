import { ADD_USER } from "../store/Constants";

export const addUser = payload => ({
  type: ADD_USER,
  payload,
});
