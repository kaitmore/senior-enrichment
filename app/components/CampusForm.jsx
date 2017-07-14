import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as action from './../actions';
import { withRouter, Link } from 'react-router-dom';

class CampusForm extends React.Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault();
    if (this.props.editing) {
      this.props.updateCampus(this.props.currentCampusId, this.props.newCampus);
      this.props.fetchCampusById(this.props.currentCampusId);
      this.props.editingToggle()

    } else {
      this.props.createCampus(this.props.newCampus)
    }
    this.props.writeCampus({})
  }

  handleNameChange(evt) {
    const updateCampus = this.props.newCampus;
    updateCampus.name = evt.target.value;
    this.props.writeCampus(updateCampus)
  }

  render() {
    let cancelLink = '';
    this.props.editing ? cancelLink = `/campuses/${this.props.campus.id}` : cancelLink = "/campuses";

    return (<div>
      <form className="form-group" onSubmit={this.handleSubmit} id="new-name-form" >
        <div className="input-group input-group-lg">
          <input
            className="input-control"
            type="text"
            name="name"
            value={this.props.newCampus.name}
            onChange={this.handleNameChange}
            placeholder="Campus Name"
          />

          <button className="card-btn" type="submit">Save</button>
          <Link to={cancelLink} onClick={() => this.props.editingToggle()} className="card-btn" >Cancel</Link>

        </div>
      </form>
    </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    campuses: state.campuses,
    newCampus: state.newCampus,
    editing: state.editing,
    campus: state.campus,
    studentAssignment: state.studentAssignment
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchCampusById: campusId => dispatch(action.fetchCampusById(campusId)),
    writeCampus: name => dispatch(action.writeCampus(name)),
    createCampus: newCampus => dispatch(action.createCampus(newCampus, ownProps.history)),
    editingToggle: () => dispatch(action.editing()),
    updateCampus: (id, updatedCampus) => dispatch(action.updateCampus(id, updatedCampus)),
  }
}

// Use connect to put them together
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CampusForm));