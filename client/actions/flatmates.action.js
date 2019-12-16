import { setError } from './error'
import * as api from '../api/flatmates'

export const GET_FLATMATES_PENDING = 'GET_FLATMATES_PENDING'
export const GET_FLATMATES_SUCCESS = 'GET_FLATMATES_SUCCESS'
export const ADD_FLATMATE_SETTING = 'ADD_FLATMATE_SETTING'

export function getFlatmatesPending () {
  return {
    type: GET_FLATMATES_PENDING
  }
}

export function getFlatmatesSuccess (flatmates) {
  return {
    type: GET_FLATMATES_SUCCESS,
    flatmates
  }
}

export function getFlatmates (userId) {
  return dispatch => {
    dispatch(getFlatmatesPending())

    return api.getAllFlatmates(userId)
      .then(flatmates => { console.log('getAllFlatMates:', flatmates); dispatch(getFlatmatesSuccess(flatmates.flatmates)) })
      .catch(err => dispatch(setError(err.message)))
  }
}

export function removeFlatmateByUserId (userId, flatmateId) {
  return dispatch => {
    return api.removeFlatmateByUserId(userId, flatmateId)
      .then(flatmates => dispatch(getFlatmatesSuccess(flatmates)))
      .catch(err => dispatch(setError(err.message)))
  }
}

export const addFlatmateSetting = (flatmate) => ({
  type: ADD_FLATMATE_SETTING,
  payload: flatmate
})

export const addFlatmateSettingIntoDB = (userId, flatmate) => {
  return dispatch => {
    return api.addFlatmateByUserId(userId, flatmate)
      .then(flatmates => dispatch(getFlatmatesSuccess(flatmates)))
      .catch(err => dispatch(setError(err.message)))
  }
}
