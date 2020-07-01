import React from "react";
import HOC from "../hoc/hoc";
import ContactInfo from "../components/Contact/contactInfo";
import ObjectiveInfo from "../components/Objective/objectiveInfo";
import ExperienceInfo from "../components/Experience/experienceInfo";
import EducationInfo from "../components/Education/educationInfo";

const resume = (props) => (
  <HOC>
    <ContactInfo />
    <ObjectiveInfo />
    <EducationInfo />
    <ExperienceInfo />
  </HOC>
);

export default resume;
