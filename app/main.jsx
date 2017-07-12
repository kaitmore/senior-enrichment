'use strict'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { HashRouter as Router, Route } from 'react-router-dom';
import { Switch } from 'react-router';

import store from './store'
import Menu from './components/Menu'

import AddStudent from './components/AddStudent'
import Campuses from './components/Campuses'
import Students from './components/Students'
import StudentDetail from './components/StudentDetail'

import CampusDetail from './components/CampusDetail'
import * as action from './actions';


store.dispatch(action.fetchStudents());
store.dispatch(action.fetchCampuses());

render(<Provider store={store} >
  <Router >
    <div>
      <Menu />
      <Route path="/add-student" component={Students} />
      <Route path="/campuses" component={Campuses} />
      <Route exact path="/" component={Campuses} />
      <Route exact path="/students" component={Students} />
      <Route exact path="/students/:id" component={StudentDetail} />
      <Route exact path="/campuses/:id" component={CampusDetail} />
      <Route path="/add-student" component={AddStudent} />
    </div>
  </Router>
</Provider>,
  document.getElementById('main')
)