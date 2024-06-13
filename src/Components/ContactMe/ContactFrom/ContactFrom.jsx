import React from "react";
import emailjs from "emailjs-com";
import "./ContactFrom.css";

const ContactForm = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target, "YOUR_USER_ID")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="contact-form" id="form">
      <div className="contact-form-content">
        <form className="form" onSubmit={sendEmail}>
          <div className="name-container">
            <input
              type="text"
              name="firstname"
              placeholder="First Name"
              required
            />
            <input
              type="text"
              name="lastname"
              placeholder="Last Name"
              required
            />
          </div>
          <input type="email" name="email" placeholder="Email" required />
          <textarea
            name="message"
            placeholder="Message"
            rows={3}
            required
          ></textarea>
          <button type="submit">SEND</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
