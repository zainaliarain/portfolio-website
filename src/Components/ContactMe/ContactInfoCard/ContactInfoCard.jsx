import React from "react";
import "./ContactInfoCard.css";
const ContactInfoCard = ({ iconURL, text }) => {
  return (
    <div className="ContactInfoCard">
      <div className="contact-details-card">
        <div className="icon">
          <img src={iconURL} alt={text} />
        </div>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default ContactInfoCard;
