import { HIDE_REG, SHOW_REG } from '../actions/nav-buttons.action'

export default function register (state = true, action) {
  switch (action.type) {
    case SHOW_REG:
      return true

    case HIDE_REG:
      return false

    default:
      return state
  }
}
