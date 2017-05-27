import { combineReducers } from 'redux'
import students from './reducers/students'

const appReducer = combineReducers({
  students
})

const reducer = (state, action) => {
  if(action.type === 'LOGOUT') {
    state = undefined
  }
  return appReducer(state, action)
}

export default reducer
