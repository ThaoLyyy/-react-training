import { useReducer } from 'react'
import { actions } from '.'
import Context from './Context'
import reducer, { initState } from '../reducers'

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState)

  const value = {
    users: state.users,
    filteredList: state.filteredList,
    addUser: ({ ...user }) => {
      dispatch(actions.addUser(user))
    },
    updateUser: user => {
      dispatch(actions.updateUser(user))
    },
    deleteUser: id => {
      dispatch(actions.deleteUser(id))
    },
    searchUser: name => {
      dispatch(actions.searchUser(name))
    }
  }

  return <Context.Provider value={value}>{children}</Context.Provider>
}

export default Provider
