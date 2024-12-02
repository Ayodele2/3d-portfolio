import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on helping your brand grow
          <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{color:"orange"}}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{color:"orange"}}>For Your</motion.b> Business.
          </h1>
          <button>WHAT WE DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Problem Solving</h2>
          <p>
          Problem Solving & Requirements Gathering
          Understand the Problem: Work closely with stakeholders (such as product managers, clients, or business teams) to understand the problems that need solving.
          Requirements Gathering: Collect and document technical requirements for the software you're building, including performance, security, and scalability considerations.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Designing Solutions</h2>
          <p>
          Designing Solutions
         System Design: Architect the structure of the application or system, including how different components will interact with each other.
         Software Architecture: Make decisions about the underlying architecture (e.g., monolithic, microservices, serverless) and choose appropriate technologies.
         UI/UX Design (optional): Collaborate with designers to ensure the application is user-friendly and accessible.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Writing Code</h2>
          <p>
           Writing Code
           Developing Software: Write clean, efficient, and maintainable code in one or more programming languages (e.g., Python, Java, JavaScript, C++).
            Frontend Development: Implement the user interface and ensure it works well across different devices and browsers.
            Backend Development: Develop the server-side logic, databases, and APIs that power the frontend.
            Mobile Development (optional): Build mobile applications for iOS or Android, often using frameworks like React Native, Swift, or Kotlin.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2> Deployment and Maintenance</h2>
          <p>
           Deployment and Maintenance
           Deployment: Deploy your software to production, often using CI/CD (Continuous Integration/Continuous Deployment) pipelines to automate deployment processes.
           Monitoring & Optimization: After deployment, monitor the software for performance issues, bugs, or crashes, and optimize as necessary.
           Maintenance & Updates: Ensure the software continues to function smoothly by releasing patches, updates, and new features.
          </p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
