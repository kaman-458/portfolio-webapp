import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import "../css/Footer.css";
import { MouseContext } from ".././context/MouseContext";
import Logo from "./Logo";
import { HiMail, HiPhone, HiStar, HiExternalLink } from "react-icons/hi";
import { projects } from "../projects-data/projects-data";

const Footer = () => {
  const { cursorChangeHandler } = useContext(MouseContext);

  const featuredProjects = projects.map((project) => ({
    id: project.id,
    name: project.title,
    url: project.link,
  }));

  return (
    <footer id="footer">
      <div className="wrapper">
        <div className="footer-row">
          <div className="contact-info">
            <h3>
              Contact&nbsp;
              information
            </h3>
            <p>
              Feel free to reach out to me any time. I don't mind speaking over
              any media outlet.
            </p>
            <ul>
              <li>
                <HiMail className="email-icon" />
                <NavLink
                  to="mailto:basith.ahamad@hotmail.com"
                  onMouseEnter={() => cursorChangeHandler("hovered")}
                  onMouseLeave={() => cursorChangeHandler("")}
                  className={({ isActive }) => (isActive ? "special active" : "special")}
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = "mailto:basith.ahamad@hotmail.com";
                  }}
                >
                  basith.ahamad@hotmail.com
                </NavLink>
              </li>
              <li>
                <HiPhone className="phone-icon" />
                <NavLink
                  to="tel:+447874480270"
                  onMouseEnter={() => cursorChangeHandler("hovered")}
                  onMouseLeave={() => cursorChangeHandler("")}
                  className={({ isActive }) => (isActive ? "special active" : "special")}
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = "tel:+447874480270";
                  }}
                >
                  +44 7874 480270
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="footer-logo">
            <Logo />
          </div>
          <div className="latest-projects">
            <h3>
              <HiStar className="featured-icon" />
              <span>Featured projects</span>
            </h3>
            <ul className="projects-links">
              {featuredProjects.map((project) => (
                <li
                  key={project.id}
                  onMouseEnter={() => cursorChangeHandler("hovered")}
                  onMouseLeave={() => cursorChangeHandler("")}
                >
                  <NavLink
                    to={project.url}
                    className={({ isActive }) => (isActive ? "special active" : "special")}
                    onClick={(e) => {
                      e.preventDefault();
                      window.open(project.url, "_blank");
                    }}
                  >
                    <span className="link-icon">
                      <HiExternalLink />
                    </span>
                    <span>{project.name}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="copyright"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
