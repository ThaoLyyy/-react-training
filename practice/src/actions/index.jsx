import {
  ADD_USER,
  DELETE_USER,
  UPDATE_USER,
  SEARCH_USER,
} from "../constants";

export const addUser = (payload) => ({
  type: ADD_USER,
  payload,
});

export const deleteUser = (payload) => ({
  type: DELETE_USER,
  payload,
});

export const updateUser = (payload) => ({
  type: UPDATE_USER,
  payload,
});

export const searchUser = (payload) => ({
  type: SEARCH_USER,
  payload,
});