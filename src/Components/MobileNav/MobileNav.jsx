import React from "react";
import "./MobileNav.css";
export const MobileNav = ({ isOpen, toggleMenu }) => {
  return (
    <div>
      <div
        className={`mobile-menu ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <div className="mobile-menu-contianer">
          <ul>
            <li className="nav-item">
              <a className="nav-link" href="/#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#">
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#">
                Work Experience
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#">
                Contact Me
              </a>
            </li>

            <button className="btn-primary contact-btn" onClick={() => {}}>
              Hire Me
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
