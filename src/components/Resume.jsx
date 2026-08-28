import { FaGraduationCap, FaBriefcase } from "react-icons/fa";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import "./Resume.scss";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const Resume = () => {
  const { t } = useTranslation();
  const experiences = t("resume.experiences", { returnObjects: true }) || [];

  return (
    <div className="resume-page">
      <header className="page-header">
        <h2 className="page-title">{t("resume.resume")}</h2>
        <div className="page-title-underline"></div>
      </header>

      <motion.section 
        className="timeline-section"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="title-wrapper">
          <div className="icon-box">
            <FaBriefcase />
          </div>
          <h3 className="section-title">{t("resume.experience")}</h3>
        </div>

        <motion.ol 
          className="timeline-list"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {experiences.map((exp, index) => (
            <motion.li className="timeline-item" variants={fadeInUp} key={index}>
              <h4 className="timeline-item-title">{exp.title}</h4>
              <span className="timeline-item-period">{exp.period}</span>
              <ul className="timeline-item-desc-list">
                {exp.desc && exp.desc.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </motion.li>
          ))}
        </motion.ol>
      </motion.section>

      <motion.section 
        className="timeline-section"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="title-wrapper">
          <div className="icon-box">
            <FaGraduationCap />
          </div>
          <h3 className="section-title">{t("resume.education")}</h3>
        </div>

        <motion.ol 
          className="timeline-list"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.li className="timeline-item" variants={fadeInUp}>
            <h4 className="timeline-item-title">B.Tech - Computer Science & Engineering</h4>
            <span className="timeline-item-period">Dehradun Institute of Technology | 2017 — 2021</span>
            <p className="timeline-item-desc">CGPA: 7.44</p>
          </motion.li>
        </motion.ol>
      </motion.section>

      <motion.section 
        className="skills-section"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <h3 className="section-title">{t("resume.mySkills")}</h3>
        <div className="skills-container">
          <motion.ul 
            className="skills-list"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <motion.li className="skills-item" variants={fadeInUp}>
              <div className="skill-title-wrapper">
                <h5 className="skill-title">React.js</h5>
                <span className="skill-percent">95%</span>
              </div>
              <div className="skill-progress-bg">
                <div className="skill-progress-fill" style={{ width: "95%" }}></div>
              </div>
            </motion.li>
            <motion.li className="skills-item" variants={fadeInUp}>
              <div className="skill-title-wrapper">
                <h5 className="skill-title">Redux</h5>
                <span className="skill-percent">90%</span>
              </div>
              <div className="skill-progress-bg">
                <div className="skill-progress-fill" style={{ width: "90%" }}></div>
              </div>
            </motion.li>
            <motion.li className="skills-item" variants={fadeInUp}>
              <div className="skill-title-wrapper">
                <h5 className="skill-title">JavaScript (ES6+) / TypeScript</h5>
                <span className="skill-percent">90%</span>
              </div>
              <div className="skill-progress-bg">
                <div className="skill-progress-fill" style={{ width: "90%" }}></div>
              </div>
            </motion.li>
            <motion.li className="skills-item" variants={fadeInUp}>
              <div className="skill-title-wrapper">
                <h5 className="skill-title">Node.js / Express</h5>
                <span className="skill-percent">80%</span>
              </div>
              <div className="skill-progress-bg">
                <div className="skill-progress-fill" style={{ width: "80%" }}></div>
              </div>
            </motion.li>
            <motion.li className="skills-item" variants={fadeInUp}>
              <div className="skill-title-wrapper">
                <h5 className="skill-title">AI Assisted Development</h5>
                <span className="skill-percent">85%</span>
              </div>
              <div className="skill-progress-bg">
                <div className="skill-progress-fill" style={{ width: "85%" }}></div>
              </div>
            </motion.li>
            <motion.li className="skills-item" variants={fadeInUp}>
              <div className="skill-title-wrapper">
                <h5 className="skill-title">UI/UX Design & Prototyping</h5>
                <span className="skill-percent">80%</span>
              </div>
              <div className="skill-progress-bg">
                <div className="skill-progress-fill" style={{ width: "80%" }}></div>
              </div>
            </motion.li>
            <motion.li className="skills-item" variants={fadeInUp}>
              <div className="skill-title-wrapper">
                <h5 className="skill-title">Next.js / Frontend Architecture</h5>
                <span className="skill-percent">85%</span>
              </div>
              <div className="skill-progress-bg">
                <div className="skill-progress-fill" style={{ width: "85%" }}></div>
              </div>
            </motion.li>
          </motion.ul>
        </div>
      </motion.section>
    </div>
  );
};

export default Resume;
