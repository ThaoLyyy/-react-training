import { ADD_USER, DELETE_USER, UPDATE_USER, SEARCH_USER, listUser } from '../constants'
import { saveLocalStorage } from '../utils/helper'

/**  get from localStorage */
// const listUser = JSON.parse(localStorage.getItem("listUser")) || [];

/**
 * init state
 */
const initState = {
  users: listUser,
  // isSearchActive: false,
  filteredList: []
}

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_USER: {
      const users = [...state.users, action.inputs]
      // localStorage.setItem("listUser", JSON.stringify(users));
      saveLocalStorage(users)
      return {
        ...state,
        users: users
      }
    }

    case UPDATE_USER: {
      const updatedUser = action.item
      const updatedUsers = state.users.map(user => (user.id === updatedUser.id ? updatedUser : user))
      // localStorage.setItem("listUser", JSON.stringify(updatedUsers));
      saveLocalStorage(updatedUsers)

      return {
        ...state,
        users: updatedUsers
      }
    }

    case DELETE_USER: {
      // // localStorage.removeItem("listUser", JSON.stringify(action.payload));
      // return {
      //   ...state,
      //   // Delete by id
      //   users: state.users.filter(
      //     (user) => user.id !== action.payload
      //   ),
      // };
      const filtered = state.users.filter(user => user.id !== action.id)
      // localStorage.removeItem("listUser", JSON.stringify(action.id))(filtered);
      saveLocalStorage(filtered)

      return {
        ...state,
        users: filtered
      }
    }

    case SEARCH_USER: {
      return {
        ...state,
        users: state.users.filter(user => user.name.toLowerCase().search(action.name.toLowerCase().trim()) !== -1)
      }

      // return {
      //   ...state,
      //   //if search input has value
      //   isSearchActive: !!action.input.length,
      //   //create new user to not change the default state
      //   filterUser: state.users.filter(user => user.name.toLowerCase().search(action.input.toLowerCase().trim()) !== -1)
      // }
    }

    default:
      return state
    // throw new Error(`Unknown action type: ${action.type}`);
  }
}

export { initState, reducer }
// export default reducer;
