import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as action from './../redux';
import { withRouter, Link } from 'react-router-dom';
import StudentForm from './StudentForm';

class StudentDetail extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchStudentById(this.props.match.params.id);
    }

    renderDeets() {
        const student = this.props.student;
        return <div><h2>{student.name}</h2>
            <p className="name"><Link to={`/campuses/${student.campusId}`}>{student.campus ? student.campus.name : "No"} Campus</Link></p>
            <p>{student.email}</p>
            <button onClick={() => this.props.editingToggle()} className="card-btn">Edit Student</button>
            <button onClick={() => this.props.deleteStudent(this.props.match.params.id)} className="card-btn">Delete</button>
        </div>
    }

    render() {
        const student = this.props.student;

        return (
            <div className="wrapper" >
                <div className="container" >
                    <div className="detail-card">
                        <img src={student.picture} className="profile-pic-lg" />
                        {this.props.editing ? <StudentForm currentStudentId={student.id} /> : this.renderDeets()}
                    </div>
                </div>
                <div className="back">
                    <Link to={`/students`}><span className="glyphicon glyphicon-arrow-left" aria-hidden="true"></span><p className="backlink">Back to All Students</p></Link>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        student: state.student,
        editing: state.editing
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchStudentById: studentId => dispatch(action.fetchStudentById(studentId)),
        deleteStudent: (studentId, history) => dispatch(action.deleteStudent(studentId, ownProps.history)),
        editingToggle: () => dispatch(action.editingToggle())
    };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(StudentDetail));