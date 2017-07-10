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

import * as action from './actions';

// store.dispatch(action.fetchCampuses());
console.log(Campuses);

render(<Provider store={store} >
  <Router >
    <div>
      <Menu />
      <Route path="/add-student" component={AddStudent} />
      <Route path="/campuses" component={Campuses} />
      <Route exact path="/" component={Campuses} />
      <Route path="/students" component={Students} />
    </div>
  </Router>
</Provider>,
  document.getElementById('main')
)