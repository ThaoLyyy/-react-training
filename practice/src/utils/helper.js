import { KEY } from '../constants'

export const saveLocalStorage = value => {
  localStorage.setItem(KEY, JSON.stringify(value))
}
