import login from '../../../client/reducers/login-button'
import logout from '../../../client/reducers/logout-button'
import register from '../../../client/reducers/reg-button'

import { HIDE_LOGIN, SHOW_LOGIN, HIDE_REG, SHOW_REG, HIDE_LOGOUT, SHOW_LOGOUT } from '../../../client/actions/nav-buttons.action'

describe('login button reducer tests', () => {
  it('case SHOW_LOGIN', () => {
    // Arrange
    const expected = true
    const action = {
      type: SHOW_LOGIN
    }
    // Act
    const actual = login(true, action)
    // Assert
    expect(actual).toBe(expected)
  })

  it('case HIDE_LOGIN', () => {
    // Arrange
    const expected = false
    const action = {
      type: HIDE_LOGIN
    }
    // Act
    const actual = login(true, action)
    // Assert
    expect(actual).toBe(expected)
  })
})

describe('logout button reducer tests', () => {
  it('case SHOW_LOGOUT', () => {
    // Arrange
    const expected = true
    const action = {
      type: SHOW_LOGOUT
    }
    // Act
    const actual = logout(true, action)
    // Assert
    expect(actual).toBe(expected)
  })

  it('case HIDE_LOGOUT', () => {
    // Arrange
    const expected = false
    const action = {
      type: HIDE_LOGOUT
    }
    // Act
    const actual = logout(true, action)
    // Assert
    expect(actual).toBe(expected)
  })
})

describe('register button reducer tests', () => {
  it('case SHOW_REGISTER', () => {
    // Arrange
    const expected = true
    const action = {
      type: SHOW_REG
    }
    // Act
    const actual = register(true, action)
    // Assert
    expect(actual).toBe(expected)
  })

  it('case HIDE_REGISTER', () => {
    // Arrange
    const expected = false
    const action = {
      type: HIDE_REG
    }
    // Act
    const actual = register(true, action)
    // Assert
    expect(actual).toBe(expected)
  })
})
