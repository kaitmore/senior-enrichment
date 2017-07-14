import React, { Component } from 'react';
import StudentForm from './StudentForm'

const AddStudent = () => {

  return <div className="wrapper">
    <div className="container">
      <div className="add-card ">
        <h3>Add a Student</h3>
        <StudentForm />
      </div >
    </div >
  </div >
}

export default AddStudent;