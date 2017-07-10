import axios from 'axios'

export const fetchCampusesSuccess = (campuses) => {
  return {
    type: 'FETCH_CAMPUSES_SUCCESS',
    campuses
  }
};
export const fetchStudentsSuccess = (students) => {
  return {
    type: 'FETCH_STUDENTS_SUCCESS',
    students
  }
};
export const toggleModal = () => {
  return {
    type: 'TOGGLE_MODAL'
  }
};


//Async Actions
export const fetchCampuses = () => {
  // Returns a dispatcher function
  // that dispatches an action at a later time
  return (dispatch) => {
    // Returns a promise
    return axios.get('/api/campuses')
      .then(response => {
        // Dispatch another action
        // to consume data
        dispatch(fetchCampusesSuccess(response.data))
      })
      .catch(error => {
        throw (error);
      });
  };
};
export const fetchStudents = () => {
  // Returns a dispatcher function
  // that dispatches an action at a later time
  return (dispatch) => {
    // Returns a promise
    return axios.get('/api/students')
      .then(response => {
        // Dispatch another action
        // to consume data
        dispatch(fetchStudentsSuccess(response.data))
      })
      .catch(error => {
        throw (error);
      });
  };
};