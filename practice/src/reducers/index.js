import { listUser, USER_FUNCTIONS } from '../constants'
import { saveLocalStorage } from '../utils/helper'

/**
 * initState
 */
const initState = {
  users: listUser,
  filteredList: []
}

const reducer = (state, action) => {
  switch (action.type) {
    case USER_FUNCTIONS.ADD: {
      const users = [...state.users, action.inputs]
      saveLocalStorage(users)
      return {
        ...state,
        users: users
      }
    }

    case USER_FUNCTIONS.UPDATE: {
      const updatedUser = action.item
      const updatedUsers = state.users.map(user => (user.id === updatedUser.id ? updatedUser : user))
      saveLocalStorage(updatedUsers)
      return {
        ...state,
        users: updatedUsers
      }
    }

    case USER_FUNCTIONS.DELETE: {
      const filtered = state.users.filter(user => user.id !== action.id)
      saveLocalStorage(filtered)
      return {
        ...state,
        users: filtered
      }
    }

    case USER_FUNCTIONS.SEARCH: {
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
