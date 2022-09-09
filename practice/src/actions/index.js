import { USER_FUNCTIONS } from '../constants'

export const addUser = inputs => ({
  type: USER_FUNCTIONS.ADD,
  inputs
})

export const updateUser = item => ({
  type: USER_FUNCTIONS.UPDATE,
  item
})
export const deleteUser = id => ({
  type: USER_FUNCTIONS.DELETE,
  id
})

export const searchUser = name => ({
  type: USER_FUNCTIONS.SEARCH,
  name
})
