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
export const createStudentSuccess = (student) => {
  return {
    type: 'CREATE_STUDENT_SUCCESS',
    student
  }
};

export const fetchStudentByIdSuccess = (student) => {
  return {
    type: 'FETCH_STUDENT_BY_ID_SUCCESS',
    student
  }
};
export const fetchCampusByIdSuccess = (campus) => {
  return {
    type: 'FETCH_CAMPUS_BY_ID_SUCCESS',
    campus
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

export const fetchStudentById = (studentid) => {
  // Returns a dispatcher function
  // that dispatches an action at a later time
  return (dispatch) => {
    // Returns a promise
    return axios.get(`/api/students/${studentid}`)
      .then(response => {
        // Dispatch another action
        // to consume data
        dispatch(fetchStudentByIdSuccess(response.data))
      })
      .catch(error => {
        throw (error);
      });
  };
};

export const fetchCampusById = (campusid) => {
  // Returns a dispatcher function
  // that dispatches an action at a later time
  return (dispatch) => {
    // Returns a promise
    return axios.get(`/api/campuses/${campusid}`)
      .then(response => {
        // Dispatch another action
        // to consume data
        dispatch(fetchCampusByIdSuccess(response.data))
      })
      .catch(error => {
        throw (error);
      });
  };
};


export const createStudent = (student) => {
  return (dispatch) => {
    return Axios.post('/api/students', student)
      .then(response => {
        // Dispatch a synchronous action
        // to handle data
        dispatch(createStudentSuccess(response.data))
      })
      .catch(error => {
        throw (error);
      });
  };
};