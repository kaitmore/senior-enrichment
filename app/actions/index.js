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
export const updateStudentSuccess = (student) => {
    return {
        type: 'UPDATE_STUDENT_SUCCESS',
        student
    }
};
export const createStudentSuccess = (student) => {
    return {
        type: 'CREATE_STUDENT_SUCCESS',
        student
    }
};
export const createCampusSuccess = (campus) => {
    return {
        type: 'CREATE_CAMPUS_SUCCESS',
        campus
    }
};
export const deleteStudentSuccess = () => {
    return {
        type: 'DELETE_STUDENT_SUCCESS'
    }
};
export const deleteCampusSuccess = () => {
    return {
        type: 'DELETE_CAMPUS_SUCCESS'
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
export const fetchCurrentCampusStudentsSuccess = (students) => {
    return {
        type: 'FETCH_CURRENT_CAMPUS_STUDENTS_SUCCESS',
        students
    }
};


export function writeStudent({ name, email, campusId }) {
    return {
        type: 'WRITE_STUDENT',
        name,
        email,
        campusId
    };
}

export function writeCampus({ name }) {
    return {
        type: 'WRITE_CAMPUS',
        name
    };
}

export const deleteStudentFromCampusSuccess = (studentId) => {
    return {
        type: 'DELETE_STUDENT_FROM_CAMPUS_SUCCESS',
        studentId
    }
};

export const assignStudentSuccess = (student) => {
    return {
        type: 'ASSIGN_STUDENT_SUCCESS',
        student
    }
};

export const writeStudentAssignment = (studentid) => {
    return {
        type: 'WRITE_STUDENT_ASSIGNMENT',
        studentid
    }
};
export const updateCampusSuccess = (campus) => {
    console.log("here")
    return {
        type: 'UPDATE_CAMPUS_SUCCESS',
        campus
    }
};

export const editing = () => {
    return {
        type: 'EDITING'
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
export const fetchCurrentCampusStudents = (campusid) => {
    // Returns a dispatcher function
    // that dispatches an action at a later time
    return (dispatch) => {
        // Returns a promise
        return axios.get(`/api/campuses/${campusid}/students`)
            .then(response => {
                // Dispatch another action
                // to consume data
                dispatch(fetchCurrentCampusStudentsSuccess(response.data))
            })
            .catch(error => {
                throw (error);
            });
    };
};

export const deleteStudentFromCampus = (student, history) => {
    // Returns a dispatcher function
    // that dispatches an action at a later time
    const studentId = student.id;
    return (dispatch) => {
        // Returns a promise
        return axios.put(`/api/students/${student.id}`, { campusId: null })
            .then(result => {
                // Dispatch another action
                // to consume data
                dispatch(deleteStudentFromCampusSuccess(studentId))
            })
            .catch(error => {
                throw (error);
            });
    };
};


export const createStudent = (student, history) => {
    return (dispatch) => {
        return axios.post('/api/students', student)
            .then(response => {
                // Dispatch a synchronous action
                // to handle data
                dispatch(createStudentSuccess(response.data))
                history.push(`/students/${response.data.id}`)
            })
            .catch(error => {
                throw (error);
            });
    };
};

export const createCampus = (campus, history) => {
    return (dispatch) => {
        return axios.post('/api/campuses', campus)
            .then(response => {
                // Dispatch a synchronous action
                // to handle data
                dispatch(createCampusSuccess(response.data))
                history.push(`/campuses/${response.data.id}`)
            })
            .catch(error => {
                throw (error);
            });
    };
};

export const updateStudent = (id, student) => {

    return (dispatch) => {
        return axios.put(`/api/students/${id}`, student)
            .then(response => {
                // Dispatch a synchronous action
                // to handle data
                dispatch(updateStudentSuccess(response.data))
            })
            .catch(error => {
                throw (error);
            });
    };

};

export const updateCampus = (id, campus) => {

    return (dispatch) => {
        return axios.put(`/api/campuses/${id}`, campus)
            .then(response => {
                dispatch(updateCampusSuccess(response.data))
            })
            .catch(error => {
                throw (error);
            });
    };

};

export const assignStudent = (studentid, campusid) => {

    return (dispatch) => {
        return axios.put(`/api/students/${studentid}`, { campusId: campusid })
            .then(student => {
                dispatch(assignStudentSuccess(student.data))
            })
            .catch(error => {
                throw (error);
            });
    };

};


export const deleteStudent = (studentid, history) => {
    return (dispatch) => {
        return axios.delete(`/api/students/${studentid}`)
            .then(response => {
                // Dispatch a synchronous action
                // // to handle data
                dispatch(deleteStudentSuccess())
                history.push(`/students`)
            })
            .catch(error => {
                throw (error);
            });
    };
};

export const deleteCampus = (campusid, history) => {
    return (dispatch) => {
        return axios.delete(`/api/campuses/${campusid}`)
            .then(response => {
                // Dispatch a synchronous action
                // // to handle data
                dispatch(deleteCampusSuccess())
                history.push(`/campuses`)
            })
            .catch(error => {
                throw (error);
            });
    };
};