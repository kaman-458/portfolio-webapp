import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BounceLoader } from "react-spinners";
import { FaLinkedinIn } from "react-icons/fa";
import AnimateLeft from "./Animate/AnimateLeft";
import UseLoading from "../Reusables/UseLoading";
import "../css/LinkedInPage.css";

const LinkedInPage = () => {
  const [loading] = UseLoading();

  return (
    <>
      {loading ? (
        <motion.div
          className="linkedin-loader"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{
            duration: 0.5,
            delay: 2.2,
          }}
        >
          <div className="bounce-icon">
            <BounceLoader color="#bfbfbf" />
          </div>
          <div className="loader-text">
            <motion.h5
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.3,
              }}
            >
              LinkedIn
            </motion.h5>
            <motion.h1
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.3,
              }}
            >
              LinkedIn Page
            </motion.h1>
          </div>
        </motion.div>
      ) : (
        <AnimateLeft>
          <div className="linkedin-page-container">
            <motion.div
              className="linkedin-content"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.3,
                delay: 0.7,
              }}
            >
              <FaLinkedinIn size={80} className="linkedin-icon" />
              <h1>LinkedIn</h1>
              <p>“I do not have a LinkedIn account as it was blocked during the testing of my LinkedIn Chrome extension.”</p>
              <Link to="/" className="home-link">
                Visit Home Page
              </Link>
            </motion.div>
          </div>
        </AnimateLeft>
      )}
    </>
  );
};

export default LinkedInPage;

