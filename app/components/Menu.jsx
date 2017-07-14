import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (<div>
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
          <li><Link to={'/create-campus'}>Create Campus</Link></li>
        </ul></nav>

    </div>
    <div className="breadcrumbs"></div>
  </div>
  )

}
export default Menu;
