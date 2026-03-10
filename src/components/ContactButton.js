import React from "react";
import { HiMail } from "react-icons/hi";
import "../css/ContactButton.css";

const ContactButton = () => {
  return (
    <>
      <a
        href="mailto:basith.ahamad@hotmail.com"
        target="_blank"
        rel="noreferrer"
        className="contact-link"
      >
        <HiMail size={20} />
        <span>Contact me</span>
      </a>
    </>
  );
};

export default ContactButton;
