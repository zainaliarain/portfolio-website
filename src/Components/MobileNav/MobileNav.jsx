import React from "react";
import "./MobileNav.css";

export const MobileNav = ({ isOpen, toggleMenu }) => {
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
              <a className="nav-link" href="/#">
                Home
              </a>
            </li>
            <li className="nav-item" key="skills">
              <a className="nav-link" href="/#">
                Skills
              </a>
            </li>
            <li className="nav-item" key="work-experience">
              <a className="nav-link" href="/#">
                Work Experience
              </a>
            </li>
            <li className="nav-item" key="contact-me">
              <a className="nav-link" href="/#">
                Contact Me
              </a>
            </li>
            <li key="hire-me">
              <button className="btn-primary contact-btn">Hire Me</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
