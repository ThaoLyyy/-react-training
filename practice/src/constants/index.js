const USER_FUNCTION_LIST = {
  ADD_USER: 'add_user',
  UPDATE_USER: 'update_user',
  DELETE_USER: 'delete_user',
  SEARCH_USER: 'search_user'
}

const KEY = 'listUser'
const listUser = JSON.parse(localStorage.getItem(KEY)) || []

export { KEY, USER_FUNCTION_LIST, listUser }
