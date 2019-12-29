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

function loadShopOpenTimeAction(list) {
  return {
    type: actionTypes.LOAD_SHOP_OPEN_TIME,
    data: list,
  }
}

export { setUserAction, clearUserAction, loadShopOpenTimeAction }
