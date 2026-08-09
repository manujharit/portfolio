import { FaGraduationCap, FaBriefcase } from "react-icons/fa";
import "./Resume.scss";

const Resume = () => {
  return (
    <div className="resume-page">
      <header className="page-header">
        <h2 className="page-title">Resume</h2>
        <div className="page-title-underline"></div>
      </header>

      <section className="timeline-section">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaBriefcase />
          </div>
          <h3 className="section-title">Experience</h3>
        </div>

        <ol className="timeline-list">
          <li className="timeline-item">
            <h4 className="timeline-item-title">Software Engineer</h4>
            <span className="timeline-item-period">Metacube Softwares Pvt Ltd. | Nov 2024 — Present</span>
            <ul className="timeline-item-desc-list">
              <li>Led a team of 3 developers to deliver the Reports Module for a client application, setting up a smooth JIRA ticketing process and guiding the team through complex project data.</li>
              <li>Worked on the Reports and Data Journey Module to help users to validate reports of user syncing from different sources and targets like O365, Google, Active Directory, etc.</li>
              <li>Built a flexible authentication UI using React.js and reusable components and added secure login features using QR codes and OAuth.</li>
              <li>Created responsive React applications that support multiple languages (i10n), accessibility standards (a11y), and work well across Chrome, Safari, and Firefox.</li>
              <li>Improved application speed and reduced bundle sizes using Vite, Babel, and tree-shaking.</li>
              <li>Reached 99% test coverage by writing detailed unit and integration tests with Jest and Playwright.</li>
              <li>Kept the code clean and followed standard guidelines using ESLint, Stylelint, and Sonarqube.</li>
            </ul>
          </li>
          <li className="timeline-item">
            <h4 className="timeline-item-title">Technology Analyst</h4>
            <span className="timeline-item-period">Infosys Pvt. Ltd. | July 2021 — Oct 2024</span>
            <ul className="timeline-item-desc-list">
              <li>Built React components and connected them to REST APIs, which made the UI faster and more responsive.</li>
              <li>Created a web app that cut down ticket analysis time by 70% and boosted the team's efficiency by 40%.</li>
              <li>Optimized the initial load time of the application using code-splitting and lazy loading.</li>
              <li>Wrote unit and integration tests with Jest and React Testing Library to keep the application bug-free.</li>
              <li>Set up real-time performance tracking dashboards using Microsoft Azure and New Relic.</li>
              <li>Worked closely with UX designers to build pixel-perfect interfaces that look great on all browsers.</li>
            </ul>
          </li>
        </ol>
      </section>

      <section className="timeline-section">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaGraduationCap />
          </div>
          <h3 className="section-title">Education</h3>
        </div>

        <ol className="timeline-list">
          <li className="timeline-item">
            <h4 className="timeline-item-title">B.Tech - Computer Science & Engineering</h4>
            <span className="timeline-item-period">Dehradun Institute of Technology | 2017 — 2021</span>
            <p className="timeline-item-desc">CGPA: 7.44</p>
          </li>
        </ol>
      </section>

      <section className="skills-section">
        <h3 className="section-title">My Skills</h3>
        <div className="skills-container">
          <ul className="skills-list">
            <li className="skills-item">
              <div className="skill-title-wrapper">
                <h5 className="skill-title">React.js</h5>
                <span className="skill-percent">95%</span>
              </div>
              <div className="skill-progress-bg">
                <div className="skill-progress-fill" style={{ width: "95%" }}></div>
              </div>
            </li>
            <li className="skills-item">
              <div className="skill-title-wrapper">
                <h5 className="skill-title">Redux</h5>
                <span className="skill-percent">90%</span>
              </div>
              <div className="skill-progress-bg">
                <div className="skill-progress-fill" style={{ width: "90%" }}></div>
              </div>
            </li>
            <li className="skills-item">
              <div className="skill-title-wrapper">
                <h5 className="skill-title">JavaScript (ES6+) / TypeScript</h5>
                <span className="skill-percent">90%</span>
              </div>
              <div className="skill-progress-bg">
                <div className="skill-progress-fill" style={{ width: "90%" }}></div>
              </div>
            </li>
            <li className="skills-item">
              <div className="skill-title-wrapper">
                <h5 className="skill-title">Node.js / Express</h5>
                <span className="skill-percent">80%</span>
              </div>
              <div className="skill-progress-bg">
                <div className="skill-progress-fill" style={{ width: "80%" }}></div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Resume;
