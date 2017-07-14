import axios from 'axios';

/* -----------------    ACTION TYPES ------------------ */

const CREATE = 'CREATE_CAMPUS_SUCCESS';
const FETCH = 'FETCH_CAMPUSES_SUCCESS';
const FETCH_BY_ID = 'FETCH_CAMPUS_BY_ID_SUCCESS';
const WRITE = 'WRITE_CAMPUS';
const UPDATE = 'UPDATE_CAMPUS_SUCCESS';
const DELETE = 'DELETE_CAMPUS_SUCCESS';
const FETCH_STUDENTS = 'FETCH_CURRENT_CAMPUS_STUDENTS_SUCCESS';
const DELETE_STUDENT = 'DELETE_STUDENT_FROM_CAMPUS_SUCCESS';
const WRITE_STUDENT = 'WRITE_STUDENT_ASSIGNMENT';
const ASSIGN_STUDENT = 'ASSIGN_STUDENT_SUCCESS';


/* ------------   ACTION CREATORS     ------------------ */

const createCampusSuccess = campus => ({ type: CREATE, campus })
const fetchCampusesSuccess = campuses => ({ type: FETCH, campuses })
const fetchCampusByIdSuccess = campus => ({ type: FETCH_BY_ID, campus })
export const writeCampus = ({ name }) => ({ type: WRITE, name })
const updateCampusSuccess = campus => ({ type: UPDATE, campus })
const deleteCampusSuccess = () => ({ type: DELETE })
const fetchCurrentCampusStudentsSuccess = students => ({ type: FETCH_STUDENTS, students })
const deleteStudentFromCampusSuccess = studentId => ({ type: DELETE_STUDENT, studentId })
export const writeStudentAssignment = studentId => ({ type: WRITE_STUDENT, studentId })
const assignStudentSuccess = student => ({ type: ASSIGN_STUDENT, student })

/* ------------       REDUCER     ------------------ */

export function campuses(state = [], action) {
  switch (action.type) {
    case CREATE: return [...state, action.campus]
    case FETCH: return action.campuses;
    default: return state
  }
}

export function campus(state = {}, action) {
  switch (action.type) {
    case FETCH_BY_ID: return action.campus;
    default: return state
  }
}

export function newCampus(state = {}, action) {
  switch (action.type) {
    case WRITE: return action;
    default: return state;
  }
}

export function currentCampusStudents(state = [], action) {
  switch (action.type) {
    case FETCH_STUDENTS: return action.students;
    case DELETE_STUDENT: return state.filter((student) => {
      return student.id !== action.studentId
    })
    case ASSIGN_STUDENT: return [...state, action.student]
    default: return state
  }
}

export function studentAssignment(state = '', action) {
  switch (action.type) {
    case WRITE_STUDENT: return action.studentId
    default: return state
  }
}

/* ------------   THUNK CREATORS     ------------------ */

export const createCampus = (campus, history) => dispatch => {

  return axios.post('/api/campuses', campus)
    .then(response => {
      dispatch(createCampusSuccess(response.data))
      history.push(`/campuses/${response.data.id}`)
    })
    .catch(error => {
      throw (error);
    })
}

export const fetchCampuses = () => dispatch => {
  return axios.get('/api/campuses')
    .then(response => {
      dispatch(fetchCampusesSuccess(response.data))
    })
    .catch(error => {
      throw (error);
    })
}

export const fetchCampusById = campusid => dispatch => {
  return axios.get(`/api/campuses/${campusid}`)
    .then(response => {
      dispatch(fetchCampusByIdSuccess(response.data))
    })
    .catch(error => {
      throw (error);
    })
}

export const updateCampus = (id, campus) => dispatch => {
  return axios.put(`/api/campuses/${id}`, campus)
    .then(response => {
      dispatch(updateCampusSuccess(response.data))
    })
    .catch(error => {
      throw (error);
    })
}

export const deleteCampus = (campusid, history) => dispatch => {
  return axios.delete(`/api/campuses/${campusid}`)
    .then(response => {
      dispatch(deleteCampusSuccess())
      history.push(`/campuses`)
    })
    .catch(error => {
      throw (error);
    })
}

export const fetchCurrentCampusStudents = campusid => dispatch => {
  return axios.get(`/api/campuses/${campusid}/students`)
    .then(response => {
      dispatch(fetchCurrentCampusStudentsSuccess(response.data))
    })
    .catch(error => {
      throw (error);
    })
}

export const deleteStudentFromCampus = (student, history) => dispatch => {
  const studentId = student.id;
  return axios.put(`/api/students/${student.id}`, { campusId: null })
    .then(result => {
      dispatch(deleteStudentFromCampusSuccess(studentId))
    })
    .catch(error => {
      throw (error);
    });
}

export const assignStudent = (studentid, campusid) => dispatch => {
  console.log(campusid, studentid)
  return axios.put(`/api/students/${studentid}`, { campusId: campusid })
    .then(student => {
      dispatch(assignStudentSuccess(student.data))
    })
    .catch(error => {
      throw (error);
    })
}




