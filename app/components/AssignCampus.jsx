import React from 'react';

const AssignCampus = ({ students, campusid, studentAssignment, assignStudent, writeStudentAssignment }) => {

  function handleSubmit(evt) {
    assignStudent(studentAssignment, campusid)
  }

  function handleChange(evt) {
    writeStudentAssignment(evt.target.value)
  }

  return (
    <form className="form-group" onSubmit={handleSubmit} id="assign-campus-form">
      <select className="dropdown" onChange={handleChange} className="input-control" name="studentCampus">
        {students.map((student, i) => {
          return <option value={`${student.id}`} key={i}>{student.name}</option>
        })}
      </select>
      <button className="card-btn" type="button" onClick={handleSubmit} >Assign Student</button>
    </form>)
}

export default AssignCampus;
