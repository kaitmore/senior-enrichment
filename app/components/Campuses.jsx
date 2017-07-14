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
    return (<div className="wrapper">
      <div className="container" >
        {this.props.campuses.map((campus, i) => {
          return <Card type="campuses" key={i} item={campus} />
        })
        }
      </div>
    </div>
    )
  }

}

const mapStateToProps = (state, ownProps) => {
  return {
    campuses: state.campuses
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCampuses: () => dispatch(action.fetchCampuses())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Campuses);