import React, { useState } from "react";
import "../css/header.css";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import Logo from "./Logo";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [header, setHeader] = useState(false);

  const animations = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 2,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const handleClick = () => {
    setShowMenu(!showMenu);
  };

  if (showMenu) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "unset";
  }

  const changeBackground = () => {
    if (window.scrollY >= 70) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <motion.div
      className={header ? "header active" : "header"}
      variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <NavLink to="/" className="logo">
        <Logo />
      </NavLink>
      <motion.ul
        onClick={handleClick}
        className={showMenu ? "menu active" : "menu"}
      >
        <div
          onClick={handleClick}
          className={showMenu ? "hamburger open" : "hamburger"}
        >
          <span>Close</span>
          <div>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
        <motion.li onClick={handleClick}>
          <NavLink
            end
            to="/"
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            <span>Home</span>
          </NavLink>
        </motion.li>
        <motion.li onClick={handleClick}>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            <span>About Me</span>
          </NavLink>
        </motion.li>
        <div className="logo">
          <Logo />
        </div>
      </motion.ul>
      <div
        onClick={handleClick}
        className={showMenu ? "hamburger open" : "hamburger"}
      >
        <span>Menu</span>
        <div>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
