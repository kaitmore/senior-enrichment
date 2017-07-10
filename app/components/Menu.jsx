import React, { Component } from 'react';
import AddStudent from './AddStudent';

import {
  HashRouter as Router,
  Route, Link
} from 'react-router-dom';

const Menu = () => {
  return (
    <div className="header">
      <div className="title">
        <img className="logo" src="http://orig01.deviantart.net/a9f7/f/2013/152/7/c/planet_dubstepdiscovery_logo_by_hoellenzwang-d67dtgs.png" />
        <h1>Margaret Hamilton Interplanetary Academy of JavaScript</h1>
      </div>
      <nav id="menu" className="nav">
        <ul>
          <li><Link to={'/'}>Home</Link></li>
          <li><Link to={'/students'}>Students</Link></li>
          <li><Link to={'/campuses'}>Campuses</Link></li>
          <li><Link to={'/add-student'}>Add Student</Link></li>
        </ul></nav>
    </div>
  )
}
export default Menu;
