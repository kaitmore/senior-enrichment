import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as action from './../actions';
import Card from './Card';



class Campuses extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getCampuses()
  }

  render() {
    return (<div className="container" > {
      this.props.campuses.map((campus, i) => {
        return <Card type="campus" key={i} item={campus} />
      })
    } </div>
    )
  }

}

const mapStateToProps = (state, ownProps) => {
  return {
    // You can now say this.props.books
    campuses: state.campuses
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
    getCampuses: () => dispatch(action.fetchCampuses())
  };
}

// Use connect to put them together
export default connect(mapStateToProps, mapDispatchToProps)(Campuses);