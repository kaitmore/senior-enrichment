import React, {
  Component
} from 'react';

import Modal from 'react-modal';

const AddStudent = () => {
  return (< Modal isOpen={true} contentLabel="Example Modal" >
    < input type="text" name="studentName" />
  </Modal>)

}
export default AddStudent;