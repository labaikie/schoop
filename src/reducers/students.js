import { combineReducers } from 'redux'

const list = (state = [], action) => {
  switch (action.type) {

  case 'RECEIVE_STUDENTS':
    return action.response.map(i => i._id)
  default:
    return state
  }
}

const hash = (state = {}, action) => {
  switch (action.type) {

  case 'RECEIVE_STUDENTS':
    const newState = {}
    for (let i = 0; i < action.response.length; i++) {
      newState[action.response[i]._id] = action.response[i]
    }
    return newState
  default:
    return state
  }
}

export default combineReducers({
  list,
  hash,
})

export const getStudents = (state, ) => {

}
