import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { fetchStudents } from '../actions/students'
import Explore from '../components/Explore'

const mapStateToProps = (state, { params }) => {
  // const institution = params.institutionId
  const institution = 1
  return {
    // students: getStudents(state, institution),
    institution
  }
}

export default withRouter(connect(
  mapStateToProps,
  { fetchStudents },
)(Explore))
