import flatmateDetailReducer from '../../../client/reducers/flatmateDetails.reducer'

describe('flatmateDetails reducer and action tests', () => {
  it('case ADD_FLATMATE_DETAIL', () => {
    // Arrange
    const INITIAL_STATE = {}

    const expected = {
      flatmateDetail: 'A Detail!'
    }
    const action = {
      type: 'ADD_FLATMATE_DETAIL',
      payload: 'A Detail!'
    }
    // Act
    const actual = flatmateDetailReducer(INITIAL_STATE, action)
    // Assert
    expect(actual).toEqual(expected)
  })
})
