import { HIDE_LOGOUT, SHOW_LOGOUT } from '../actions/nav-buttons'

export default function logout (state = false, action) {
  switch (action.type) {
    case SHOW_LOGOUT:
      return true

    case HIDE_LOGOUT:
      return false

    default:
      return state
  }
}
