import { NavLink } from "react-router";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <li className="navbar__item">
          <NavLink to="/" className={({ isActive }) => (isActive ? "navbar__link active" : "navbar__link")}>About</NavLink>
        </li>
        <li className="navbar__item">
          <NavLink to="/resume" className={({ isActive }) => (isActive ? "navbar__link active" : "navbar__link")}>Resume</NavLink>
        </li>
        <li className="navbar__item">
          <NavLink to="/portfolio" className={({ isActive }) => (isActive ? "navbar__link active" : "navbar__link")}>Portfolio</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
