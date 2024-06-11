import React from "react";
import "./ContactInfoCard.css";
const ContactInfoCard = ({ iconURL, text, link }) => {
  return (
    <div className="ContactInfoCard">
      <div className="contact-details-card">
        <div className="icon">
          <a href={link} target="_blank" rel="noopener noreferrer">
            <div className="icon">
              <img src={iconURL} alt={text} />
            </div>
          </a>
        </div>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default ContactInfoCard;
