import { ADD_USER, UPDATE_USER } from "../store/Constants";

export const addUser = data => ({
  type: ADD_USER,
  data,
});

export const updateUser = data => ({
  type: UPDATE_USER,
  data,
});

