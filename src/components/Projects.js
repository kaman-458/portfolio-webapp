import React, { forwardRef } from "react";
import "../css/Projects.css";
import { projects } from "../projects-data/projects-data";
import { FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const Projects = forwardRef((props, ref) => {

  return (
    <>
      <section className="projects" ref={ref}>
        <div className="wrapper">
          <motion.div
            className="headline"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.45 }}
            transition={{ duration: 0.8 }}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 50 },
            }}
          >
            <h5>What's New</h5>
            <h2>Projects</h2>
          </motion.div>
          <div className="list">
            {projects.map((project, index) => (
              <motion.div
                key={`project-${index + 1}`}
                className={`project project${index + 1}`}
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.1 }}
                transition={{ duration: 0.8 }}
                variants={{
                  visible: { opacity: 1, y: 0 },
                  hidden: { opacity: 0, y: 50 },
                }}
              >
                <NavLink
                  to={project.link}
                  className="project-image"
                  onClick={(e) => {
                    e.preventDefault();
                    window.open(project.link, "_blank");
                  }}
                >
                  <div className="project-image-container">
                    <img src={project.img} alt={project.title} />
                  </div>
                  <div className="image-number">0{index + 1}</div>
                  <div className="visit-demo-button">
                    <span>Visit Demo</span>
                    <FaExternalLinkAlt size={14} className="icon-size" />
                  </div>
                </NavLink>
                <div className="project-text">
                  <h5>0{index + 1}</h5>
                  <h2>{project.title}</h2>
                  {Array.isArray(project.about) ? (
                    project.about.map((text, textIndex) => (
                      <p key={textIndex}>{text}</p>
                    ))
                  ) : (
                    <p>{project.about}</p>
                  )}
                  <p className="stack">{project.stack}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
});

export default Projects;
