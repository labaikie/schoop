import { combineReducers } from 'redux'

const list = (state = [], action) => {
  return state
}

const hash = (state = {}, action) => {
  return state
}

export default combineReducers({
  list,
  hash,
})
