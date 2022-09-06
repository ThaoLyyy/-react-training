import { listUser, USER_FUNCTION_LIST } from '../constants'
import { saveLocalStorage } from '../utils/helper'

/**
 * init state
 */
const initState = {
  users: listUser,
  filteredList: []
}

const reducer = (state, action) => {
  switch (action.type) {
    case USER_FUNCTION_LIST.ADD_USER: {
      const users = [...state.users, action.inputs]
      saveLocalStorage(users)
      return {
        ...state,
        users: users
      }
    }

    case USER_FUNCTION_LIST.UPDATE_USER: {
      const updatedUser = action.item
      const updatedUsers = state.users.map(user => (user.id === updatedUser.id ? updatedUser : user))
      saveLocalStorage(updatedUsers)
      return {
        ...state,
        users: updatedUsers
      }
    }

    case USER_FUNCTION_LIST.DELETE_USER: {
      const filtered = state.users.filter(user => user.id !== action.id)
      saveLocalStorage(filtered)
      return {
        ...state,
        users: filtered
      }
    }

    case USER_FUNCTION_LIST.SEARCH_USER: {
      return {
        ...state,
        users: state.users.filter(user => user.name.toLowerCase().search(action.name.toLowerCase().trim()) !== -1)
      }
    }

    default:
      return state
  }
}

export { initState }
export default reducer
