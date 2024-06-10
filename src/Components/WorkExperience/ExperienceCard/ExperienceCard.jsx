import React from "react";
import "./ExperienceCard.css";
// import { WORK_EXPERIENCE } from "../../utils/data";

const ExperienceCard = ({ details }) => {
  return (
    <div>
      <div className="work-experience-card">
        <h6>{details.title}</h6>

        <div className="work-duration">{details.date}</div>

        <ul>
          {details.responsibilities.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceCard;
