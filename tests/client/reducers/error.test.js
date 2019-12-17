import error from '../../../client/reducers/error'
import { SET_ERROR } from '../../../client/actions/error'

describe('Error reducer tests', () => {
  it('case SET_Error', () => {
    // Arrange
    const expected = 'uh oh, an error!'
    const action = {
      type: SET_ERROR,
      message: 'uh oh, an error!'
    }
    // Act
    const actual = error(null, action)
    // Assert
    expect(actual).toBe(expected)
  })
})
