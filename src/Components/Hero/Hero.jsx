import React from "react";
import "./Hero.css";
import reactImg from "../../images/react1.png";
import profileImg from "../../images/profile.jpeg";
import htmlImg from "../../images/html.png";
import cssImg from "../../images/css.png";
import jsImg from "../../images/Js.png";

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

          <div className="col-lg-6">
            <div className="hero-img">
              <div>
                <div className="tech-icon">
                  <img src={htmlImg} alt="HTML" />
                </div>
                <img src={profileImg} alt="Profile" />
              </div>
              <div>
                <div className="tech-icon">
                  <img src={cssImg} alt="CSS" />
                </div>
                <div className="tech-icon">
                  <img src={jsImg} alt="JavaScript" />
                </div>
                <div className="tech-icon">
                  <img src={reactImg} alt="React Logo" className="react-img" />
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
