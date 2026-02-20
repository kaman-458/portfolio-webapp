import React, { useContext } from "react";
import "../css/HomeGallery.css";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { MouseContext } from ".././context/MouseContext";
import Logo from "./Logo";

const HomeGallery = ({ projectRef }) => {
  const ProjectsClick = () => {
    projectRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const { cursorChangeHandler } = useContext(MouseContext);

  return (
    <>
      <section className="home-gallery">
        <motion.div
          className="name-logo"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.35 }}
          transition={{
            duration: 0.6,
            delay: 0.8,
          }}
        >
          <Logo />
        </motion.div>
        <div className="wrapper">
          <div className="home-row">
            <div className="home-main">
              <motion.h5
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: 0.7,
                }}
              >
                Kaman So
              </motion.h5>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: 1,
                }}
              >
                Full Stack Developer
              </motion.h1>
              <motion.h3
                className="home-text"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: 1.3,
                }}
              >
                <p>{"Full-Stack Developer who learns fast, ships faster, and builds real product features using modern frameworks."}</p>
                <p>{"Open to new challenges and passionate about delivering scalable, high-impact solutions."}</p>
              </motion.h3>
              <motion.nav
                className="links"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: 1.6,
                }}
              >
                <motion.h4
                  className="links-btn"
                  onMouseEnter={() => cursorChangeHandler("hovered")}
                  onMouseLeave={() => cursorChangeHandler("")}
                >
                  <Link className="btn" onClick={ProjectsClick}>
                    View Projects
                  </Link>
                </motion.h4>
                <span>or</span>
                <motion.h4
                  className="links-btn"
                  onMouseEnter={() => cursorChangeHandler("hovered")}
                  onMouseLeave={() => cursorChangeHandler("")}
                >
                  <NavLink className="btn" to="/about">
                    Read About Me
                  </NavLink>
                </motion.h4>
              </motion.nav>
            </div>
          </div>
          <motion.div
            onMouseEnter={() => cursorChangeHandler("hovered")}
            onMouseLeave={() => cursorChangeHandler("")}
            onClick={ProjectsClick}
            className="scroll-to"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.3,
              delay: 1.8,
            }}
          >
            <div className="scroll-to-icon"></div>
          </motion.div>
        </div>
        <motion.ul
          className="icons"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.6,
            delay: 0.5,
          }}
        >
          <li
            onMouseEnter={() => cursorChangeHandler("hovered")}
            onMouseLeave={() => cursorChangeHandler("")}
          >
            <a href="https://github.com/horodvladys" target="_blank" rel="noreferrer">
              <FaGithub size={50} className="icon-size" />
            </a>
          </li>
          <li
            onMouseEnter={() => cursorChangeHandler("hovered")}
            onMouseLeave={() => cursorChangeHandler("")}
          >
            <a href="https://www.linkedin.com/in/kaman-so-80218515b/" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn size={50} className="icon-size" />
            </a>
          </li>
        </motion.ul>
      </section>
    </>
  );
};

export default HomeGallery;
