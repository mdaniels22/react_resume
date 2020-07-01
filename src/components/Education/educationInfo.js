import React from "react";
import EducationDisplay from "./educationDisplay";

const educationInfo = (props) => {
  return (
    <EducationDisplay
      schoolName="University of the Sciences in Philadelphia"
      schoolLink="https://www.usciences.edu/"
      year="2008"
      degree={`B.S. Computer Science & Minor in Mathematics`}
    />
  );
};

export default educationInfo;
