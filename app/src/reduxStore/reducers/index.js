import { combineReducers } from 'redux'
import user from './user'
import shopOpenTime from './shopOpenTime'

const rootReducer = combineReducers({
  user,
  shopOpenTime,
})

export default rootReducer
