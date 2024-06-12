import React, { useEffect, useState } from "react";
import "./navbar.css";
import MobileNav from "../MobileNav/MobileNav";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".navbar");
      if (window.scrollY > 50) {
        navbar.classList.add("shrink");
      } else {
        navbar.classList.remove("shrink");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="nav-main">
      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />

      <nav className="navbar navbar-expand-lg">
        <div className="container nav-content">
          <a className="navbar-brand" href="/#">
            ZAIN ALI
          </a>
          <ul className="navbar-nav">
            <li className="nav-item" key="home">
              <a className="nav-link" href="/#">
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
                Work Experience
              </a>
            </li>
            <li className="nav-item" key="contact-me">
              <a className="nav-link" href="#contact-me">
                Contact Me
              </a>
            </li>
            <li key="hire-me">
              <button className="btn-primary contact-btn">Hire Me</button>
            </li>
          </ul>

          <button className="menu-btn" onClick={toggleMenu}>
            <span
              className="material-symbols-outlined"
              style={{ fontSize: "1.8rem" }}
            >
              {openMenu ? "close" : "menu"}
            </span>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
