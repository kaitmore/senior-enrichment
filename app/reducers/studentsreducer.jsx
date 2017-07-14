import axios from 'axios';

/* -----------------    ACTION TYPES ------------------ */

const CREATE = 'CREATE_STUDENT_SUCCESS';
const FETCH = 'FETCH_STUDENTS_SUCCESS';
const FETCH_BY_ID = 'FETCH_STUDENT_BY_ID_SUCCESS';
const WRITE = 'WRITE_STUDENT';
// const DELETE = 'DELETE_STUDENT_SUCCESS';

/* ------------   ACTION CREATORS     ------------------ */
const createStudentSuccess = student => ({ type: CREATE, student });
const fetchStudentsSuccess = students => ({ type: FETCH, students });
const fetchStudentByIdSuccess = student => ({ type: FETCH_BY_ID, student });
const writeStudent = ({ name, email, campusId }) => ({ type: WRITE, name, email, campusId });

/* ------------       REDUCER     ------------------ */

const initialState = {
    students: [],
    student: { campus: {} },
    newStudent: {},
    editing: false
}

export default function reducer (state = initialState, action) {
 switch (action.type) {
case: 
 }
}