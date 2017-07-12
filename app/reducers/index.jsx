import {
    combineReducers
} from 'redux'

const initialState = {
    campuses: [],
    students: [],
    student: { campus: {} },
    campus: { name: '' }
}

const rootReducer = function(state = initialState, action) {
    const newState = Object.assign({}, state)
    switch (action.type) {
        case 'CREATE_STUDENT_SUCCESS':
            newState.students = state.concat(action.student);
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
        default:
            return state;
    }
};

export default rootReducer