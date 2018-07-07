import React from "react";
import "./Card.css";

const Card = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    <div className="content">
      <ul>
        <li>
          <strong>User:</strong> {props.user}
        </li>
        <li>
          <strong>Photo:</strong> {props.photo}
        </li>
        <li>
          <strong>Location:</strong> {props.location}
        </li>
      </ul>
    </div>
    <span onClick={() => props.removeCard(props.id)} className="remove">
      𝘅
    </span>
  </div>
);

export default Card;
