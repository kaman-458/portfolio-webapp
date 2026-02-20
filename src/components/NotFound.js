import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "../css/NotFound.css";

const NotFound = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/");
    }
  };

  const handleHome = () => {
    navigate("/");
  };

  return (
    <div className="not-found-container">
      <motion.div
        className="not-found-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1>Not Found</h1>
        <p>The page you're looking for doesn't exist.</p>
        <div className="not-found-buttons">
          <button onClick={handleBack} className="home-link">
            Back
          </button>
          <button onClick={handleHome} className="home-link">
            Visit Home Page
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFound;

