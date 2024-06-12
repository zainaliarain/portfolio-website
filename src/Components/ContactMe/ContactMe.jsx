import React from "react";
import "./ContactMe.css";
import ContactInfoCard from "./ContactInfoCard/ContactInfoCard";
import ContactFrom from "./ContactFrom/ContactFrom";
import mailIcon from "../../images/email.png";
import github from "../../images/github.png";

const ContactMe = () => {
  return (
    <section className="contact-section" id="contact-me">
      <div className="container contact-container">
        <h5>Contact Me</h5>

        <div className="contact-content">
          <div style={{ flex: 1 }}>
            <ContactInfoCard
              iconURL={mailIcon}
              text="Gmail"
              link="mailto:zaynaliarain@gmail.com"
            />
            <ContactInfoCard
              iconURL={github}
              text="GitHub"
              link="https://github.com/zainaliarain/"
            />
          </div>
          <div style={{ flex: 1 }}>
            <ContactFrom />
          </div>
        </div>
      </div>
    </section>
  );
};
export default ContactMe;
