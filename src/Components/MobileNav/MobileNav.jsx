import React from "react";
import "./MobileNav.css";

export const MobileNav = ({ isOpen, toggleMenu }) => {
  const handleHireMeClick = () => {
    const contactSection = document.getElementById("form");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <div
        className={`mobile-menu ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <div className="mobile-menu-container">
          <ul>
            <li key="brand">
              <a className="navbar-brand" href="/#">
                ZAIN ALI
              </a>
            </li>
            <li className="nav-item" key="home">
              <a className="nav-link" href="#home">
                Home
              </a>
            </li>
            <li className="nav-item" key="skills">
              <a className="nav-link" href="#skill">
                Skills
              </a>
            </li>
            <li className="nav-item" key="work-experience">
              <a className="nav-link" href="#work">
                Experience
              </a>
            </li>
            <li className="nav-item" key="Projects">
              <a className="nav-link" href="#project">
                Projects
              </a>
            </li>
            <li className="nav-item" key="contact-me">
              <a className="nav-link" href="#contact-me">
                Contact Me
              </a>
            </li>
            <li key="hire-me">
              <button
                className="btn-primary contact-btn"
                onClick={handleHireMeClick}
              >
                Hire Me
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
