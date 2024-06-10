import React from "react";
import "./SkillCard.css";

const SkillCard = ({ title, iconURL, isActive, onClick }) => {
  return (
    <div>
      <div
        className={`skills-card ${isActive ? "active" : ""}`}
        onClick={() => onClick()}
      >
        <div className="skill-icon">
          <img src={iconURL} alt={title} />
        </div>
        <span>{title}</span>
      </div>
    </div>
  );
};
export default SkillCard;
