import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as action from './../redux';
import { withRouter, Link } from 'react-router-dom';

class StudentForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(evt) {
        evt.preventDefault();

        if (this.props.editing) {
            this.props.updateStudent(this.props.currentStudentId, this.props.newStudent)
            this.props.fetchStudentById(this.props.currentStudentId);
            this.props.editingToggle()
        } else {
            this.props.createStudent(this.props.newStudent)
        }

        this.props.writeStudent({})
    }

    handleChange(evt) {
        const updateStudent = this.props.newStudent;
        updateStudent[evt.target.name] = evt.target.value
        this.props.writeStudent(updateStudent)
    }

    render() {
        let cancelLink = '';
        this.props.editing ? cancelLink = `/students/${this.props.student.id}` : cancelLink = "/students";
        return (

            <form className="form-group" onSubmit={this.handleSubmit} id="new-message-form" >
                <div className="input-group input-group-lg">
                    <input className="input-control"
                        type="text"
                        name="name"
                        value={this.props.newStudent.name}
                        onChange={this.handleChange}
                        placeholder="Full Name"
                    />
                    <input className="input-control"
                        type="text" name="email"
                        value={this.props.newStudent.email}
                        onChange={this.handleChange}
                        placeholder="Email"
                    />
                    <select className="input-control" name="campusId" value={this.props.newStudent.campusId} onChange={this.handleChange} >
                        <option value={undefined} disabled selected hidden>Select Campus</option>
                        {this.props.campuses.map((campus, i) => {
                            return <option value={`${campus.id}`} key={i}>{campus.name}</option>
                        })}
                    </select>

                    <button className="card-btn" type="submit">Save</button>
                    {console.log(this.props.match.path)}

                    {this.props.match.path !== "/add-student" ? <Link to={cancelLink} onClick={() => this.props.editingToggle()} className="card-btn" >Cancel</Link>
                        : ""}

                </div>
            </form>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        campuses: state.campuses,
        newStudent: state.newStudent,
        editing: state.editing,
        student: state.student
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchStudentById: studentId => dispatch(action.fetchStudentById(studentId)),
        writeStudent: updatedStudent => dispatch(action.writeStudent(updatedStudent)),
        createStudent: newStudent => dispatch(action.createStudent(newStudent, ownProps.history)),
        editingToggle: () => dispatch(action.editingToggle()),
        updateStudent: (id, updatedStudent) => dispatch(action.updateStudent(id, updatedStudent))
    };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(StudentForm));