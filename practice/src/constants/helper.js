import { KEY } from '.'

const listUser = JSON.parse(localStorage.getItem(KEY)) || []

const saveLocalStorage = value => {
  localStorage.setItem(KEY, JSON.stringify(value))
}
export { listUser, saveLocalStorage }
