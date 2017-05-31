import React, { Component } from 'react'
import StudentsList from './StudentsList'

class Explore extends Component {

  componentDidMount() {
    this.fetchData()
  }

  componentDidUpdate(prevProps) {
    if (this.props.institution !== prevProps.institution) {
      this.fetchData()
    }
  }

  fetchData() {
    const { fetchStudents, institution } = this.props
    fetchStudents(institution)
  }

  render() {
    return <StudentsList {...this.props}/>
  }
}

export default Explore
