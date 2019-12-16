const INITIAL_STATE = {
  flatmates: []
}

const flatmateReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_FLATMATE': {
      return {
        ...state,
        flatmates: [...state.flatmates, action.payload]
      }
    }
    case 'REMOVE_FLATMATE': {
      return {
        ...state,
        flatmates: [ ...state.flatmates.filter((flatmate, index) => action.payload !== index) ]
      }
    }
    default:
      return state
  }
}

export default flatmateReducer
