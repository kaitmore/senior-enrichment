import {
  combineReducers
} from 'redux'

const initialState = {
  campuses: [],
  students: [],
  modalState: false,

}

const rootReducer = function (state = initialState, action) {
  const newState = Object.assign({}, state)
  switch (action.type) {
    case 'TOGGLE_MODAL':
      newState.modalState = !state.modalState;
      return newState;
    case 'FETCH_CAMPUSES_SUCCESS':
      newState.campuses = action.campuses;
      return newState;
    case 'FETCH_STUDENTS_SUCCESS':
      newState.students = action.students;
      return newState;
    default:
      return state;
  }
};

export default rootReducer