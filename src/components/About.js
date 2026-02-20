import React, { useState, useRef, useContext, useEffect } from "react";
import { motion } from "framer-motion";
import { BounceLoader } from "react-spinners";
import { MdSend } from "react-icons/md";
import AnimateLeft from "./Animate/AnimateLeft";
import "../css/About.css";
import UseLoading from "../Reusables/UseLoading";
import emailjs from "@emailjs/browser";
import { MouseContext } from ".././context/MouseContext";

const About = () => {
  const form = useRef();
  const [loading] = UseLoading();
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Massage, setMassage] = useState("");
  const [notification, setNotification] = useState({ show: false, message: "", type: "" });
  const { cursorChangeHandler } = useContext(MouseContext);

  useEffect(() => {
    if (notification.show) {
      const timer = setTimeout(() => {
        setNotification({ show: false, message: "", type: "" });
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [notification.show]);

  const sendEmail = (e) => {
    e.preventDefault();

    setName("");
    setEmail("");
    setMassage("");

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          setNotification({
            show: true,
            message: "✅ Success! Your email has been sent successfully.",
            type: "success",
          });
        },
        (error) => {
          console.log(error.text);
          setNotification({
            show: true,
            message: "❌ Error! Failed to send email. Please try again later.",
            type: "error",
          });
        }
      );
  };

  return (
    <>
      {loading ? (
        <motion.div
          className="about-loader"
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
              About Me
            </motion.h5>
            <motion.h1
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.3,
              }}
            >
              Senior Software Engineer (Full-Stack)
            </motion.h1>
          </div>
        </motion.div>
      ) : (
        <AnimateLeft>
          <>
            <section className="about-text">
              <div className="wrapper">
                <motion.h5
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: 0.7,
                  }}
                >
                  a few words about me
                </motion.h5>
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: 1,
                  }}
                >
                  I'm Kaman So, a Senior Software Engineer (Full-Stack) with 8+ years of experience designing, architecting, and deploying scalable distributed systems and cloud-native applications.
                </motion.h2>
                <motion.h3
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: 1.3,
                  }}
                >
                  Strong expertise in microservices architecture, containerization, DevOps automation, and system optimization. Proven ability to lead end-to-end product development, improve system reliability, and mentor engineering teams. Experienced in high-traffic platforms, enterprise-grade systems, and AI-driven integrations.
                </motion.h3>
              </div>
            </section>
            {/* <motion.section
              className="about-skills"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.3,
                delay: 1.6,
              }}
            >
              <div className="wrapper">
                <div className="soft-skills">
                  <h5>Skills</h5>
                  <h3>
                    UX&UI<em> / </em>
                    Animations<em> / </em>
                    Infinite Curiousity<em> / </em>
                    Attention To Details<em> / </em>
                    Pixel Perfect Precision
                  </h3>
                </div>
                <div className="technologies">
                  <h5>Technologies</h5>
                  <h3>
                    HTML<em> / </em>
                    CSS<em> / </em>
                    JavaScript<em> / </em>
                    React<em> / </em>
                    Next.js<em> / </em>
                    Node.js<em> / </em>
                    Express<em> / </em>
                    SQL<em> / </em>
                    NoSQL<em> / </em>
                    Git<em> / </em>
                    Jenkins<em> / </em>
                    Docker<em> / </em>
                    GSAP<em> / </em>
                    Framer Motion<em> / </em>
                    Redux<em> / </em>
                    Sass
                  </h3>
                </div>
              </div>
            </motion.section> */}
            <motion.section
              className="about-experience"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.3,
                delay: 1.9,
              }}
            >
              <div className="wrapper">
                <h5>Experience</h5>
                <div className="experience-item">
                  <div className="experience-header">
                    <h3>Senior Software Engineer</h3>
                    <h4>YAS MicroInsurance</h4>
                    <span className="experience-date">2021 - 2023</span>
                  </div>
                  <ul className="experience-details">
                    <li>Architected and developed enterprise-grade microservices using NestJS, React, GraphQL, and Azure.</li>
                    <li>Designed scalable RESTful and GraphQL APIs with authentication, authorization, and RBAC implementation.</li>
                    <li>Migrated legacy infrastructure to Azure Kubernetes Service (AKS), improving deployment efficiency and scalability.</li>
                    <li>Implemented CI/CD pipelines reducing deployment time by over 40%.</li>
                    <li>Led development of RPA automation solutions and AI-driven recommendation system using OpenAI APIs.</li>
                    <li>Conducted system performance tuning, database optimization, and monitoring setup.</li>
                    <li>Mentored junior engineers, conducted technical design reviews, and established coding standards.</li>
                  </ul>
                </div>
                <div className="experience-item">
                  <div className="experience-header">
                    <h3>Software Engineer</h3>
                    <h4>香港01 (HK01)</h4>
                    <span className="experience-date">2019 - 2021</span>
                  </div>
                  <ul className="experience-details">
                    <li>Developed high-traffic event platforms and PWAs using Vue.js, .NET, PHP, and Sitecore CMS.</li>
                    <li>Designed scalable backend services and optimized SQL queries for performance-critical systems.</li>
                    <li>Implemented caching strategies and improved page load performance significantly.</li>
                    <li>Managed production deployments, monitoring, and incident resolution.</li>
                    <li>Revamped legacy e-commerce platforms with modern architecture and improved maintainability.</li>
                  </ul>
                </div>
                <div className="experience-item">
                  <div className="experience-header">
                    <h3>Analyst Programmer</h3>
                    <h4>ckly trading limited</h4>
                    <span className="experience-date">2018 - 2019</span>
                  </div>
                  <ul className="experience-details">
                    <li>Built insurance comparison platform and CMS from scratch using Angular, Node.js, and .NET.</li>
                    <li>Designed real-time dashboards leveraging ELK stack for monitoring trading metrics.</li>
                    <li>Implemented REST APIs with secure authentication and role-based access control.</li>
                  </ul>
                </div>
                <div className="experience-item">
                  <div className="experience-header">
                    <h3>Web Developer</h3>
                    <h4>Virtual Gaming Technology</h4>
                    <span className="experience-date">2017</span>
                  </div>
                  <ul className="experience-details">
                    <li>Developed enterprise management systems and e-commerce platforms using Laravel/PHP.</li>
                    <li>Designed modular CMS systems and delivered technical workshops to stakeholders.</li>
                  </ul>
                </div>
              </div>
            </motion.section>
            <motion.section
              className="contact"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.8 }}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 50 },
              }}
            >
              <div className="wrapper">
                <div className="contact-headline">
                  <div>
                    <h5>Contact</h5>
                    <h2>Get in touch - let's work together.</h2>
                  </div>
                </div>
                <div className="contact-form">
                  <form ref={form} onSubmit={sendEmail}>
                    <div className="row">
                      <div className="input-wrapper">
                        <label>Name</label>
                        <input
                          placeholder="What’s your name?"
                          type="text"
                          name="name"
                          required
                          onChange={(event) => setName(event.target.value)}
                          value={Name}
                        />
                        <span className="input-bottom-line"></span>
                      </div>
                      <div className="input-wrapper">
                        <label>Email</label>
                        <input
                          placeholder="What’s your email?"
                          type="email"
                          name="user_email"
                          required
                          onChange={(event) => setEmail(event.target.value)}
                          value={Email}
                        />
                        <span className="input-bottom-line"></span>
                      </div>
                    </div>
                    <div className="row textarea-row">
                      <div className="input-wrapper">
                        <label>Message</label>
                        <textarea
                          placeholder="What’s your message?"
                          name="message"
                          required
                          onChange={(event) => setMassage(event.target.value)}
                          value={Massage}
                        />
                        <span className="input-bottom-line"></span>
                      </div>
                    </div>
                    <div
                      onMouseEnter={() => cursorChangeHandler("hovered")}
                      onMouseLeave={() => cursorChangeHandler("")}
                      className="submit-button"
                    >
                      <input type="submit" value="Send message" />
                      <MdSend className="send-icon" />
                    </div>
                    {notification.show && (
                      <motion.div
                        className={`email-notification ${notification.type}`}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                      >
                        {notification.message}
                      </motion.div>
                    )}
                  </form>
                </div>
              </div>
            </motion.section>
          </>
        </AnimateLeft>
      )}
    </>
  );
};

export default About;
