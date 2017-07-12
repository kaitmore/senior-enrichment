import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as action from './../actions';
import { withRouter } from 'react-router-dom';

class StudentDetail extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchStudentById(this.props.match.params.id);

    }

    render() {
        const student = this.props.student;

        return (
            <div className="container" >
                <div className="card">
                    <img src="https://cms-assets.tutsplus.com/uploads/users/107/posts/22984/image/25a-space-flat-icons-photoshop-saturn.jpg" className="profile-pic" />
                    <p className="name">{student.name}</p>
                    <p className="name">{student.campus.name} Campus</p>

                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        student: state.student

    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchStudentById: studentId => dispatch(action.fetchStudentById(studentId)),
    };
}


// Use connect to put them together
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(StudentDetail));