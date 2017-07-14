import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as action from './../redux';
import Card from './Card';

class Students extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getStudents()
    }

    render() {
        return (<div className="wrapper" ><div className="container" >
            {
                this.props.students.map((student, i) => {
                    console.log(student.name);
                    return <Card type="students" key={i} item={student} />

                })
            }
        </div></div>
        )
    }

}

const mapStateToProps = (state, ownProps) => {
    return {
        students: state.students
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        getStudents: () => dispatch(action.fetchStudents())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Students);