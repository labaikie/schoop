import { combineReducers } from 'redux'

const appReducer = combineReducers({})

const reducer = (state, action) => {
  if(action.type === 'LOGOUT') {
    state = undefined
  }
  return appReducer(state, action)
}

export default reducer
