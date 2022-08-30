import {
  ADD_USER,
  DELETE_USER,
  UPDATE_USER,
  SEARCH_USER,
} from "../constants";

export const addUser = (data) => ({
  type: ADD_USER,
  data,
});

export const updateUser = (data) => ({
  type: UPDATE_USER,
  data,
});

export const deleteUser = (data) => ({
  type: DELETE_USER,
  data,
});

export const searchUser = (data) => ({
  type: SEARCH_USER,
  data,
});