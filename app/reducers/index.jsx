import {
    combineReducers
} from 'redux'

const initialState = {
    campuses: [],
    students: [],
    student: { campus: {} },
    campus: { name: '' },
    currentCampusStudents: [],
    studentAssignment: '',
    newStudent: {},
    newCampus: {},
    editing: false
}

const rootReducer = function (state = initialState, action) {
    const newState = Object.assign({}, state)
    switch (action.type) {
        case 'CREATE_STUDENT_SUCCESS':
            newState.students = state.students.concat(action.student);
            return newState;
        case 'FETCH_CAMPUSES_SUCCESS':
            newState.campuses = action.campuses;
            return newState;
        case 'FETCH_STUDENTS_SUCCESS':
            newState.students = action.students;
            return newState;
        case 'FETCH_STUDENT_BY_ID_SUCCESS':
            newState.student = action.student;
            return newState;
        case 'FETCH_CAMPUS_BY_ID_SUCCESS':
            newState.campus = action.campus;
            return newState;
        case 'FETCH_CURRENT_CAMPUS_STUDENTS_SUCCESS':
            newState.currentCampusStudents = action.students;
            return newState;
        case 'WRITE_STUDENT':
            newState.newStudent.name = action.name;
            newState.newStudent.email = action.email;
            newState.newStudent.campusId = action.campusId;
            return newState;
        case 'WRITE_CAMPUS':
            newState.newCampus.name = action.name;
            return newState;
        case 'WRITE_STUDENT_ASSIGNMENT':
            newState.studentAssignment = action.studentid;
            return newState;
            //SHOULD I DO THESE?
        case 'DELETE_STUDENT_SUCCESS':
            return newState;
        case 'DELETE_STUDENT_FROM_CAMPUS_SUCCESS':
            newState.currentCampusStudents = newState.currentCampusStudents.filter((student) => {
                return student.id !== action.studentId
            })
            return newState;
        case 'ASSIGN_STUDENT_SUCCESS':
            newState.currentCampusStudents = newState.currentCampusStudents.concat(action.student);
            return newState;
        case 'UPDATE_STUDENT_SUCCESS':
            return newState;
        case 'UPDATE_CAMPUS_SUCCESS':
            return newState;
        case 'EDITING':
            newState.editing = !state.editing;
            return newState;
        default:
            return state;
    }
};

export default rootReducer