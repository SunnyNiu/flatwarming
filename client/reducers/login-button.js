import { HIDE_LOGIN, SHOW_LOGIN } from '../actions/nav-buttons'

export default function login (state = true, action) {
  switch (action.type) {
    case SHOW_LOGIN:
      return true

    case HIDE_LOGIN:
      return false

    default:
      return state
  }
}
