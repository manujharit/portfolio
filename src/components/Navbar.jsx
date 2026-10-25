import { NavLink } from "react-router";
import ThemeToggle from "./ThemeToggle";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";
import "./Navbar.scss";

const Navbar = () => {
  const { t } = useTranslation();
  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <li className="navbar__item">
          <NavLink to="/" end className={({ isActive }) => (isActive ? "navbar__link active" : "navbar__link")}>{t("nav.about")}</NavLink>
        </li>
        <li className="navbar__item">
          <NavLink to="/resume" className={({ isActive }) => (isActive ? "navbar__link active" : "navbar__link")}>{t("nav.resume")}</NavLink>
        </li>
        <li className="navbar__item">
          <NavLink to="/portfolio" className={({ isActive }) => (isActive ? "navbar__link active" : "navbar__link")}>{t("nav.portfolio")}</NavLink>
        </li>
        <li className="navbar__item">
          <NavLink to="/contact" className={({ isActive }) => (isActive ? "navbar__link active" : "navbar__link")}>{t("nav.contact")}</NavLink>
        </li>
      </ul>
      <div className="navbar__actions">
        <LanguageSwitcher />
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
