'use strict'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { HashRouter as Router, Route } from 'react-router-dom';
import { Switch } from 'react-router';

import Menu from './components/Menu'
import AddStudent from './components/AddStudent'
import AddCampus from './components/AddCampus'
import Campuses from './components/Campuses'
import Students from './components/Students'
import StudentDetail from './components/StudentDetail'
import CampusDetail from './components/CampusDetail'

import * as action from './actions';
import store from './store'


store.dispatch(action.fetchStudents());
store.dispatch(action.fetchCampuses());

render(<Provider store={store} >
    <Router >
        <div>
            <Menu />
            <Route exact path="/campuses" component={Campuses} />
            <Route exact path="/" component={Campuses} />
            <Route exact path="/students" component={Students} />
            <Route exact path="/students/:id" component={StudentDetail} />
            <Route exact path="/campuses/:id" component={CampusDetail} />
            <Route path="/add-student" component={AddStudent} />
            <Route path="/create-campus" component={AddCampus} />
        </div>
    </Router>
</Provider>,
    document.getElementById('main')
)