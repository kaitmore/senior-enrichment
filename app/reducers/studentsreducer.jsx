import axios from 'axios';

/* -----------------    ACTION TYPES ------------------ */

const CREATE = 'CREATE_STUDENT_SUCCESS';
const FETCH = 'FETCH_STUDENTS_SUCCESS';
const FETCH_BY_ID = 'FETCH_STUDENT_BY_ID_SUCCESS';
const WRITE = 'WRITE_STUDENT';
const EDITING = 'EDITING';
// const DELETE = 'DELETE_STUDENT_SUCCESS';

/* ------------   ACTION CREATORS     ------------------ */
const createStudentSuccess = student => ({ type: CREATE, student });
const fetchStudentsSuccess = students => ({ type: FETCH, students });
const fetchStudentByIdSuccess = student => ({ type: FETCH_BY_ID, student });
const writeStudent = ({ name, email, campusId }) => ({ type: WRITE, name, email, campusId });
const editing = () => ({ type: EDITING })

/* ------------       REDUCER     ------------------ */
const initialState = {
  students: [],
  student: { campus: {} },
  newStudent: {},
  editing: false
}

export default function reducer(state = initialState, action) {
  const newState = Object.assign({}, state)
  switch (action.type) {
    case CREATE:
      newState.students = newState.students.concat(action.student)
      return newState;
    case FETCH:
      newState.students = action.students;
      return newState;
    case FETCH_BY_ID:
      newState.student = action.student;
      return newState;
    case WRITE:
      newState.newStudent.name = action.name;
      newState.newStudent.email = action.email;
      newState.newStudent.campusId = action.campusId;
      return newState; // refactor use a spread operator
    case EDITING:
      newState.editing = !state.editing;
      return newStaute
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
