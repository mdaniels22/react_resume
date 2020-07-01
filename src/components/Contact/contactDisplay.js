import React from "react";
import "./contact.css";

const contact = (props) => {
  return (
    <div className="Contact">
      <h1>{props.name}</h1>
      <h2>Contact Info</h2>
      <h4>Phone: {props.phone}</h4>
      <h4>Email: {props.email}</h4>
      <h4>
        Website:
        <a href={props.site} target="_blank" rel="noopener noreferrer">
          {props.siteName}
        </a>
      </h4>
    </div>
  );
};

export default contact;
