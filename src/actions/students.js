import * as api from '../api'

export const fetchStudents = institution => dispatch =>
  api.fetchStudents(institution).then(response =>
    dispatch(receiveStudents(institution, response))
  )

const receiveStudents = (institution, response) => ({
  type: 'RECEIVE_STUDENTS',
  institution,
  response
})
