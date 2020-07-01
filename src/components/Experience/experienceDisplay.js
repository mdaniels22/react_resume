import React from "react";

const experience = (props) => {
  const WorkExperience = (props) => {
    return (
      <div>
        {props.workExperienceList.map((work) => {
          const {
            workLink,
            workLocation,
            workCity,
            workTitle,
            workDescription,
          } = work;
          return (
            <section>
              <h4>
                <strong>
                  <a href={workLink} target="_blank" rel="noopener noreferrer">
                    {workLocation}
                  </a>{" "}
                </strong>
                {workCity}
              </h4>
              <h4>
                <strong>{workTitle}</strong>
              </h4>
              <p>{workDescription}</p>
            </section>
          );
        })}
      </div>
    );
  };

  return (
    <div>
      <h2>Work Experience</h2>
      <hr />
      <WorkExperience workExperienceList={props.workList} />
    </div>
  );
};

export default experience;
