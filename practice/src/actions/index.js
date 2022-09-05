import { ADD_USER, DELETE_USER, UPDATE_USER, SEARCH_USER } from '../constants'

const addUser = inputs => ({
  type: ADD_USER,
  inputs
})

const updateUser = item => ({
  type: UPDATE_USER,
  item
})
const deleteUser = id => ({
  type: DELETE_USER,
  id
})

const searchUser = name => ({
  type: SEARCH_USER,
  name
})

export { addUser, updateUser, deleteUser, searchUser }
