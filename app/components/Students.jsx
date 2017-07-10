import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as action from './../actions';
import Card from './Card';

class Students extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getStudents()
  }

  render() {
    return (<div className="container" > {
      this.props.students.map((student, i) => {
        return <Card type="student" modalOpen={this.props.modalState} toggleModal={this.props.toggleModal} key={i} item={student} />
      })
    }
    </div>
    )
  }

}

const mapStateToProps = (state, ownProps) => {
  return {
    // You can now say this.props.students
    students: state.students,
    modalState: state.modalState
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
    getStudents: () => dispatch(action.fetchStudents()),
    toggleModal: () => dispatch(action.toggleModal())
  };
}

// Use connect to put them together
export default connect(mapStateToProps, mapDispatchToProps)(Students);