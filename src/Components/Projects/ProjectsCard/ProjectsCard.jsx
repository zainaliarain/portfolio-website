import React from "react";
import "./ProjectsCard.css";

const ProjectsCard = ({ imgURL, link }) => {
  return (
    <div className="project-card">
      <div className="project-info">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <div className="project-img">
            <img src={imgURL} alt="Project" />
          </div>
        </a>
      </div>
    </div>
  );
};

export default ProjectsCard;
