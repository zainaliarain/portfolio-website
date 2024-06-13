import React from "react";
import "./ProjectsCard.css";

const ProjectsCard = ({ imgURL, link }) => {
  return (
    <div className="project-card">
      <div className="project-info">
        <div className="project-img">
          <img src={imgURL} alt="Project" />
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
