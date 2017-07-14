import axios from 'axios';

/* -----------------    ACTION TYPES ------------------ */

const CREATE = 'CREATE_STUDENT_SUCCESS';
const FETCH = 'FETCH_STUDENTS_SUCCESS';
const FETCH_BY_ID = 'FETCH_STUDENT_BY_ID_SUCCESS';
const WRITE = 'WRITE_STUDENT';
const EDITING = 'EDITING';
const DELETE = 'DELETE_STUDENT_SUCCESS';

/* ------------   ACTION CREATORS     ------------------ */
const createStudentSuccess = student => ({ type: CREATE, student });
const fetchStudentsSuccess = students => ({ type: FETCH, students });
const fetchStudentByIdSuccess = student => ({ type: FETCH_BY_ID, student });
const deleteStudentSuccess = () => ({ type: DELETE })
export const writeStudent = ({ name, email, campusId }) => ({ type: WRITE, name, email, campusId });
export const editingToggle = () => ({ type: EDITING })

/* ------------       REDUCERS    ------------------ */

export function students(state = [], action) {
  switch (action.type) {
    case CREATE:
      return [...state, action.student]
    case FETCH:
      return action.students;
    default: return state
  }
}

export function student(state = {}, action) {
  switch (action.type) {
    case FETCH_BY_ID:
      return action.student;
    default: return state
  }
}

export function newStudent(state = {}, action) {
  switch (action.type) {
    case WRITE: return action;
    default: return state
  }
}

export function editing(state = false, action) {

  switch (action.type) {
    case EDITING:
      return !state
    default: return state

  }
}

/* ------------   THUNK CREATORS     ------------------ */
export const fetchStudents = () => dispatch => {
  return axios.get('/api/students')
    .then(response => {
      dispatch(fetchStudentsSuccess(response.data))
    })
    .catch(error => {
      throw (error);
    });
};

export const fetchStudentById = studentid => dispatch => {
  return axios.get(`/api/students/${studentid}`)
    .then(response => {
      dispatch(fetchStudentByIdSuccess(response.data))
    })
    .catch(error => {
      throw (error);
    });
};

export const createStudent = (student, history) => dispatch => {
  return axios.post('/api/students', student)
    .then(response => {
      dispatch(createStudentSuccess(response.data))
      history.push(`/students/${response.data.id}`)
    })
    .catch(error => {
      throw (error);
    });
};

export const updateStudent = (id, student) => dispatch => {
  return axios.put(`/api/students/${id}`, student)
    .then(response => {
      dispatch(updateStudentSuccess(response.data))
    })
    .catch(error => {
      throw (error);
    });
};
export const deleteStudent = (studentid, history) => (dispatch) => {
  return axios.delete(`/api/students/${studentid}`)
    .then(response => {
      // Dispatch a synchronous action
      // // to handle data
      dispatch(deleteStudentSuccess())
      history.push(`/students`)
    })
    .catch(error => {
      throw (error);
    })
}
