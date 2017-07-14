import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Card = (props) => {
  return (
    <div className="card">
      <div className="info">
        <img src={props.item.picture} className="profile-pic" />
        <p className="name">{props.item.name}</p>
        <Link to={`/${props.type}/${props.item.id}`}><button className="card-btn">View</button></Link>
      </div>
    </div>
  )
}

export default Card;