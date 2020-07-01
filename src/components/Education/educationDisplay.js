import React from "react";

const education = (props) => {
  return (
    <div>
      <h2>Education</h2>
      <hr />
      <h4>
        <strong>
          <a href={props.schoolLink} target="_blank" rel="noopener noreferrer">
            {" "}
            {props.schoolName}
          </a>
        </strong>
      </h4>

      <p>
        {props.degree} <i>{props.year}</i>
      </p>
    </div>
  );
};

export default education;
