import React, { useState } from "react";
import "./navbar.css";
import MobileNav from "../MobileNav/MobileNav";

const Navbar = () => {
  const [openManu, setOpenManu] = useState(false);

  const toggleMenu = () => {
    setOpenManu(!openManu);
  };

  return (
    <div>
      <MobileNav isOpen={openManu} toggleMenu={toggleMenu} />

      <nav className="navbar navbar-expand-lg">
        <div className="container nav-content">
          <a className="navbar-brand" href="/#">
            ZAIN ALI
          </a>
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

            <button className="btn-primary contact-btn" onClick={() => {}}>
              Hire Me
            </button>
          </ul>

          <button className="menu-btn" onClick={toggleMenu}>
            <span
              className={"material-symbols-outlined"}
              style={{ fontSize: "1.8rem" }}
            >
              {openManu ? "close" : "menu"}
            </span>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
