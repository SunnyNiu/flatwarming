import { setError } from './error.action'
import * as api from '../api/registerFlatDetails'

export function addFlatmateDetail (flatmateDetail) {
  return {
    type: 'ADD_FLATMATE_DETAIL',
    payload: flatmateDetail
  }
}

export function addRegisterFlatmateDetail (flatmateDetail) {
  return dispatch => {
    return api.addUserDetail(flatmateDetail)
      .then(() => {
        dispatch(addFlatmateDetail(flatmateDetail))
      })
      .catch(err => dispatch(setError(err.message)))
  }
}
