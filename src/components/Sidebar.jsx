import { useState } from "react";
import { GMAIL, LINKEDIN } from "../configs/configs";
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub } from "react-icons/fa";
import { MdOutlineExpandMore } from "react-icons/md";
import ManujPhoto from "../assets/ManujPhoto.png";
import "./Sidebar.scss";

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <aside className={`sidebar ${isExpanded ? "sidebar--expanded" : ""}`}>
      <div className="sidebar__info">
        <figure className="sidebar__avatar-box">
          <img src={ManujPhoto} alt="Manuj Haritwal" />
        </figure>

        <div className="sidebar__info-content">
          <h1 className="sidebar__name">Manuj Haritwal</h1>
          <p className="sidebar__title">Software Engineer</p>
        </div>

        <button 
          className="sidebar__toggle" 
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <span>Show Contacts</span>
          <MdOutlineExpandMore className={`sidebar__toggle-icon ${isExpanded ? "rotated" : ""}`} />
        </button>
      </div>

      <div className="sidebar__contacts-wrapper">
        <div className="sidebar__separator"></div>

        <ul className="sidebar__contacts-list">
          <li className="sidebar__contact-item">
            <div className="sidebar__icon-box">
              <FaEnvelope />
            </div>
            <div className="sidebar__contact-info">
              <p className="sidebar__contact-title">Email</p>
              <a href={GMAIL} className="sidebar__contact-link">manuj.haritwal01@gmail.com</a>
            </div>
          </li>

          <li className="sidebar__contact-item">
            <div className="sidebar__icon-box">
              <FaMapMarkerAlt />
            </div>
            <div className="sidebar__contact-info">
              <p className="sidebar__contact-title">Location</p>
              <address className="sidebar__contact-link">Jaipur, Rajasthan, India</address>
            </div>
          </li>
        </ul>

        <div className="sidebar__separator"></div>

        <ul className="sidebar__social-list">
          <li className="sidebar__social-item">
            <a href={LINKEDIN} target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          </li>
          <li className="sidebar__social-item">
            <a href="https://github.com/manujharitwal" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
          </li>
        </ul>
        
        <div className="sidebar__separator"></div>

        <div className="sidebar__action">
          <a href="https://docs.google.com/document/d/1kIHDA1Vhzcom8FmGn39DAANmgVqA50Kg8QsMAz8GNDE/export?format=pdf" target="_blank" rel="noopener noreferrer" className="sidebar__download-btn" download>
            Download CV
          </a>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
