import React, { Component } from 'react';

import Modal from 'react-modal';
// import Button from 'react-button';
const customStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.75)'
  },
  content: {
    position: 'absolute',
    border: '1px solid #ccc',
    background: '#fff',
    overflow: 'auto',
    WebkitOverflowScrolling: 'touch',
    borderRadius: '10px',
    outline: 'none',
    padding: '20px',
    height: '300px',
    width: '400px',
  }
}
class Card extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      editing: false,
      show: false
    }

  }
  render() {
    let close = () => this.setState({
      show: false
    });
    let open = () => this.setState({ show: true });

    return (
      <div className="card">
        <div className="info">
          <img src="https://cms-assets.tutsplus.com/uploads/users/107/posts/22984/image/25a-space-flat-icons-photoshop-saturn.jpg" className="profile-pic" />
          <p className="name">{this.props.item.name}</p>
          <p>190 Lightyear Way</p>
          <p>Student Count: 3</p>
          <button onClick={open} className="card-btn">View</button><button className="card-btn">Delete</button>

          <Modal
            isOpen={this.state.show}
            onRequestClose={close}
            style={customStyles}
            contentLabel="modal"
          >
          </Modal>

        </div>
      </div>
    )
  }
}
export default Card;