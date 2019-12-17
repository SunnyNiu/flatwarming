import { GET_FLATMATES_SUCCESS, ADD_FLATMATE_SETTING } from '../actions/flatmates.action'

export default function flatmatesReducer (state = [], action) {
  switch (action.type) {
    case GET_FLATMATES_SUCCESS:
      return action.flatmates
    case ADD_FLATMATE_SETTING:
      return [...state, action.flatmate]

    default:
      return state
  }
}
