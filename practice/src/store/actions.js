import { USER_FUNCTION_LIST } from './constants'

export const addUser = inputs => ({
  type: USER_FUNCTION_LIST.ADD_USER,
  inputs
})

export const updateUser = item => ({
  type: USER_FUNCTION_LIST.UPDATE_USER,
  item
})
export const deleteUser = id => ({
  type: USER_FUNCTION_LIST.DELETE_USER,
  id
})

export const searchUser = name => ({
  type: USER_FUNCTION_LIST.SEARCH_USER,
  name
})
