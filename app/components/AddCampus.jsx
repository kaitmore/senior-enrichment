import React, { Component } from 'react';
import CampusForm from './CampusForm'

const AddCampus = () => {

  return <div className="wrapper">
    <div className="container">

      <div className="add-card ">
        <h3>Create a Campus</h3>
        <CampusForm />
      </div >
    </div >
  </div >
}

export default AddCampus;