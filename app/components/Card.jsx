import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// import Button from 'react-button';

function Card(props) {

  return (
    <div className="card">
      <div className="info">
        <img src="https://cms-assets.tutsplus.com/uploads/users/107/posts/22984/image/25a-space-flat-icons-photoshop-saturn.jpg" className="profile-pic" />
        <p className="name">{props.item.name}</p>
        <Link to={`/${props.type}/${props.item.id}`}><button className="card-btn">View</button></Link><button className="card-btn">Delete</button>
      </div>
    </div>
  )
}

export default Card;