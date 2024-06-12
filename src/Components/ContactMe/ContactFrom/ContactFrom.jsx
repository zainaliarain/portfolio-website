import React from "react";
import "./ContactFrom.css";

const ContactFrom = () => {
  return (
    <div className="contact-form" id="form">
      <div className="contact-form-content">
        <form className="form">
          <div className="name-container">
            <input type="text" name="firstname" placeholder="First Name" />
            <input type="text" name="lastname" placeholder="Last Name" />
          </div>
          <input type="text" name="email" placeholder="Email" />
          <textarea
            type="text"
            name="messahe"
            placeholder="Message"
            rows={3}
            id=""
          ></textarea>
          <button>SEND</button>
        </form>
      </div>
    </div>
  );
};

export default ContactFrom;
