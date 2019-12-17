export const addFlatmate = (flatmate) => ({
  type: 'ADD_FLATMATE',
  payload: flatmate
})

export const removeFlatmate = (index) => ({
  type: 'REMOVE_FLATMATE',
  payload: index
})
