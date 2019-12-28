import actionTypes from 'reduxStore/actionTypes'

function setUserAction(user) {
  return {
    type: actionTypes.SET_USER,
    data: user,
  }
}

function clearUserAction() {
  return {
    type: actionTypes.CLEAR_USER,
  }
}

export { setUserAction, clearUserAction }
