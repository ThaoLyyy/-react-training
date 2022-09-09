const USER_FUNCTIONS = {
  ADD: 'add_user',
  UPDATE: 'update_user',
  DELETE: 'delete_user',
  SEARCH: 'search_user'
}

const KEY = 'listUser'
const listUser = JSON.parse(localStorage.getItem(KEY)) || []

export { KEY, USER_FUNCTIONS, listUser }
