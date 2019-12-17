const INITIAL_STATE = {
  userid: ''
}

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'NEW_USER': {
      return { ...state, userid: action.payload }
    }
    default:
      return state
  }
}

export default userReducer
