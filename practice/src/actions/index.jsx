import { ADD_USER, DELETE_USER, UPDATE_USER, SEARCH_USER } from "../constants";

export const addUser = (payload) => ({
  type: ADD_USER,
  payload,
});

export const updateUser = (payload) => ({
  type: UPDATE_USER,
  payload,
});
export const deleteUser = (id) => ({
  type: DELETE_USER,
  id,
});

export const searchUser = (name) => ({
  type: SEARCH_USER,
  name,
});
