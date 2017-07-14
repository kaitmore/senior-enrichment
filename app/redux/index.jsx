import { combineReducers } from 'redux';
import { campuses, campus, newCampus, currentCampusStudents, studentAssignment } from './campusreducer';
import { students, student, editing, newStudent } from './studentreducer';

export default combineReducers({
  campuses,
  campus,
  newCampus,
  currentCampusStudents,
  studentAssignment,
  students,
  student,
  editing,
  newStudent
});

export * from './campusreducer';
export * from './studentreducer';