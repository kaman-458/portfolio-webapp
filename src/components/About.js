import React, { useState, useRef, useContext, useEffect } from "react";
import { motion } from "framer-motion";
import { BounceLoader } from "react-spinners";
import { MdSend } from "react-icons/md";
import { HiExternalLink } from "react-icons/hi";
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
                  I'm Basith Ahamad, a Senior Software Engineer (Full-Stack) with 8+ years of experience designing, architecting, and deploying scalable distributed systems and cloud-native applications.
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
                    <h4>Webxkey</h4>
                  </div>
                  <ul className="experience-details">
                    <li>Built and shipped end-to-end product features, delivering both user-facing interfaces and backend systems that power core marketplace workflows.</li>
                    <li>Designed systems responsible for matching demand with available resources, enabling efficient allocation and scheduling across large-scale operational networks.</li>
                    <li>Developed internal tools and dashboards that allowed operations teams to monitor marketplace activity, manage orders, and resolve issues quickly.</li>
                    <li>Played a key role in evolving the platform architecture to support high-volume marketplace activity, improving reliability and ensuring consistent system performance under heavy load.</li>
                    <li>Took ownership of critical production services, proactively identifying system bottlenecks and implementing improvements that increased overall responsiveness by 40%.</li>
                    <li>Improved data processing pipelines and data access patterns, reducing system latency by 30% and enabling faster operational decisions.</li>
                    <li>Introduced intelligent automation features that helped reduce manual operational work, improving internal efficiency and reducing support workload by 25%.</li>
                    <li>Built features that enhanced dynamic pricing, recommendations, and marketplace intelligence, improving both user experience and business outcomes.</li>
                    <li>Implemented improved monitoring, alerting, and operational tooling that reduced incident recovery time by 35%.</li>
                    <li>Worked closely with product and operations teams in a startup-style environment, rapidly shipping improvements and iterating based on real-world user feedback.</li>
                    <li>Mentored engineers, contributed to architectural decisions, and helped establish scalable engineering practices across the team.</li>
                  </ul>
                </div>
              </div>
            </motion.section>
            <motion.section
              className="about-certifications"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.3,
                delay: 2,
              }}
            >
              <div className="wrapper">
                <h5>Certificates</h5>
                <ul className="certifications-list">
                  <li>
                    <a className="cert-link" href="https://www.testdome.com/certificates/ea181d20e8fc445e807f0f13f5d840e4" target="_blank" rel="noopener noreferrer">Javascript <HiExternalLink className="cert-link-icon" aria-hidden /></a>
                  </li>
                  <li>
                    <a className="cert-link" href="https://www.testdome.com/certificates/2898472275724131ad3866e12b56063f" target="_blank" rel="noopener noreferrer">TypeScript <HiExternalLink className="cert-link-icon" aria-hidden /></a>
                  </li>
                  <li>
                    <a className="cert-link" href="https://www.testdome.com/certificates/a70995f3fb6e464c96004ffa51d173c3" target="_blank" rel="noopener noreferrer">NodeJS <HiExternalLink className="cert-link-icon" aria-hidden /></a>
                  </li>
                  <li>
                    <a className="cert-link" href="https://www.testdome.com/certificates/5049d14aefc34b4d97705ea5204c5d6d" target="_blank" rel="noopener noreferrer">React <HiExternalLink className="cert-link-icon" aria-hidden /></a>
                  </li>
                  <li>
                    <a className="cert-link" href="https://www.testdome.com/certificates/bce01cf43c34480aaf6abae2f42db535" target="_blank" rel="noopener noreferrer">React Native <HiExternalLink className="cert-link-icon" aria-hidden /></a>
                  </li>
                  <li>
                    <a className="cert-link" href="https://www.testdome.com/certificates/577cedb6f23d4c2490cd9dcabfd6cef1" target="_blank" rel="noopener noreferrer">Java <HiExternalLink className="cert-link-icon" aria-hidden /></a>
                  </li>
                  <li>
                    <a className="cert-link" href="https://www.testdome.com/certificates/27743c67fa3f40bc852969fadfef9f76" target="_blank" rel="noopener noreferrer">Python <HiExternalLink className="cert-link-icon" aria-hidden /></a>
                  </li>
                  <li>
                    <a className="cert-link" href="https://www.testdome.com/certificates/9716698b40e24b9c82c2f449edcfb9fc" target="_blank" rel="noopener noreferrer">.Net <HiExternalLink className="cert-link-icon" aria-hidden /></a>
                  </li>
                  <li>
                    <a className="cert-link" href="https://www.testdome.com/certificates/5243adcc2b9641049ccb94368350ac17" target="_blank" rel="noopener noreferrer">PHP <HiExternalLink className="cert-link-icon" aria-hidden /></a>
                  </li>
                </ul>
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
