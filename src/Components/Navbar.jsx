import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg nav-wrapper">
        <div className="container nav-content">
          <ul className="navbar-nav">
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

            <button className="btn-primary contact-btn">Hire Me</button>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
