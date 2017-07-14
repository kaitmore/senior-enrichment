import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as action from './../actions';
import { withRouter, Link } from 'react-router-dom';
import CampusForm from './CampusForm';
import AssignCampus from './AssignCampus';

class CampusDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchCampusById(this.props.match.params.id);
    this.props.fetchCurrentCampusStudents(this.props.match.params.id);
  }

  renderDeets() {

    const campus = this.props.campus;
    const campusStudents = this.props.currentCampusStudents;

    return <div >
      <h4>Students</h4>
      <ul className="student-list">

        {campusStudents.map((student, i) => {
          return <li key={i}><Link onClick={() => this.props.deleteStudentFromCampus(student)} to={`/campuses/${campus.id}`}><span className=" glyphicon glyphicon-remove-sign" aria-hidden="true"></span></Link><Link to={`/students/${student.id}`}>{student.name}</Link></li>
        })}
      </ul>

      <AssignCampus campusid={campus.id} students={this.props.students} studentAssignment={this.props.studentAssignment} writeStudentAssignment={this.props.writeStudentAssignment} assignStudent={this.props.assignStudent} />
    </div >

  }

  render() {
    const campus = this.props.campus;
    const campusStudents = this.props.currentCampusStudents;

    return (
      <div className="wrapper">
        <div className="container" >
          <div className="detail-card">
            <div>
              <h2>{campus.name} Campus</h2>
              <img src={campus.picture} className="profile-pic-lg" /><br />
              <button onClick={() => this.props.editingToggle()} className="card-btn">Edit Name</button>
              <button onClick={() => this.props.deleteCampus(this.props.match.params.id)} className="card-btn">Delete</button>
            </div>
            {this.props.editing ? <CampusForm currentCampusId={campus.id} />
              : this.renderDeets()}
          </div>
        </div>

        <div className="back">
          <Link to={`/campuses`}><span className="glyphicon glyphicon-arrow-left" aria-hidden="true"></span><p className="backlink">Back to All Campuses</p></Link>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    students: state.students,
    editing: state.editing,
    campus: state.campus,
    currentCampusStudents: state.currentCampusStudents,
    studentAssignment: state.studentAssignment
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    deleteCampus: campusId => dispatch(action.deleteCampus(campusId, ownProps.history)),
    fetchCampusById: campusId => dispatch(action.fetchCampusById(campusId)),
    fetchCurrentCampusStudents: campusId => dispatch(action.fetchCurrentCampusStudents(campusId)),
    deleteStudentFromCampus: studentId => dispatch(action.deleteStudentFromCampus(studentId, ownProps.history)),
    editingToggle: () => dispatch(action.editing()),
    assignStudent: (studentid, campusid) => dispatch(action.assignStudent(studentid, campusid)),
    writeStudentAssignment: student => dispatch(action.writeStudentAssignment(student)),
  };
}


// Use connect to put them together
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CampusDetail));