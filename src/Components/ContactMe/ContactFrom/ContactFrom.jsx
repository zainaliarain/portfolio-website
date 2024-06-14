import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./ContactFrom.css";

const ContactForm = () => {
  const [formValues, setFormValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    message: "",
  });
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then((result) => {
        console.log("Email sent successfully:", result.text);
        setStatusMessage("Email sent successfully!");
        e.target.reset();
        setFormValues({
          firstname: "",
          lastname: "",
          email: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error("Failed to send email:", error);
        setStatusMessage("Failed to send email. Please try again.");
      });

    setTimeout(() => {
      setStatusMessage("");
    }, 5000);
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
              value={formValues.firstname}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="lastname"
              placeholder="Last Name"
              value={formValues.lastname}
              onChange={handleChange}
              required
            />
          </div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formValues.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            rows={3}
            value={formValues.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">SEND</button>
        </form>
        {statusMessage && <p className="status-message">{statusMessage}</p>}
      </div>
    </div>
  );
};

export default ContactForm;
