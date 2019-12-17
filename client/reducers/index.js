import { combineReducers } from 'redux'

import login from './login-button.reducer'
import register from './reg-button.reducer'
import logout from './logout-button.reducer'
import flatmateReducer from './flatmate.reducer'
import flatmateDetailReducer from './flatmateDetails.reducer'
import jobsReducer from './jobs.reducer'
import flatmatesReducer from './flatmates.reducer'
import userReducer from './user.reducer'
import error from './error.reducer'

export default combineReducers({
  login,
  register,
  logout,
  flatmateReducer,
  flatmateDetailReducer,
  jobsReducer,
  flatmatesReducer,
  userReducer,
  error
})
