export const HIDE_LOGIN = 'HIDE_LOGIN'
export const SHOW_LOGIN = 'SHOW_LOGIN'
export const HIDE_REG = 'HIDE_REG'
export const SHOW_REG = 'SHOW_REG'
export const HIDE_LOGOUT = 'HIDE_LOGOUT'
export const SHOW_LOGOUT = 'SHOW_LOGOUT'

export function hideLogin () {
  return {
    type: HIDE_LOGIN
  }
}

export function showLogin () {
  return {
    type: SHOW_LOGIN
  }
}

export function hideReg () {
  return {
    type: HIDE_REG
  }
}

export function showReg () {
  return {
    type: SHOW_REG
  }
}

export function hideLogout () {
  return {
    type: HIDE_LOGOUT
  }
}

export function showLogout () {
  return {
    type: SHOW_LOGOUT
  }
}
