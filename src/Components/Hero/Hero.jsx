import React from "react";
import "./Hero.css";
import reactIcon from "../../images/react1.png";
import profileImg from "../../images/profile.jpeg";
import htmlIcon from "../../images/html.png";
import cssIcon from "../../images/css.png";
import jsIcon from "../../images/Js.png";

const Hero = () => {
  return (
    <section className="hero-container">
      <div className="container hero-content">
        <div className="row">
          <div className="col-lg-6 content">
            <h2>Transforming Ideas into Digital Reality</h2>
            <p>
              Passionate Frontend Developer | Crafting Seamless and Visually
              Stunning Web Solutions
            </p>
          </div>
          <div className="col-lg-6 hero-img">
            <img src={profileImg} alt="Profile" />
            <div className="tech-icons">
              <div className="tech-icon react-icon">
                <img src={reactIcon} alt="React" />
              </div>
              <div className="other-icons">
                <div className="tech-icon">
                  <img src={htmlIcon} alt="HTML" />
                </div>
                <div className="tech-icon">
                  <img src={cssIcon} alt="CSS" />
                </div>
                <div className="tech-icon">
                  <img src={jsIcon} alt="JavaScript" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
