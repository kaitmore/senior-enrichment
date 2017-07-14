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
const writeCampus = ({ name }) => ({ type: WRITE, name })
const updateCampusSuccess = campus => ({ type: UPDATE, campus })
// const deleteCampusSuccess = () => ({ type: DELETE })



