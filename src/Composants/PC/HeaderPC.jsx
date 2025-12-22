import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo-header.png";

export default function HeaderPC() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const losangeClass = i18n.language === "fr" ? "losangeFR" : "losangeEN";

  const navBarClass =
  i18n.language === "fr" ? "navBar navBarFR" : "navBar navBarEN";

  return (
    <header className="header">
      <div className="vShape" />

      <div className={navBarClass}>
        <Link to="/cv" className="monNavLink">{t("header.cv")}</Link>

        <Link to="/" className="logo">
          <div className={losangeClass} key={i18n.language}>
            <img src={logo} alt="Logo" className="logoImg" />
          </div>
        </Link>

        <Link to="/projets" className="monNavLink">{t("header.projects")}</Link>
      </div>

      <div className="language-switcher dropdown">
  <button
    className="btn dropdown-toggle"
    type="button"
    data-bs-toggle="dropdown"
    aria-expanded="false"
  >
     <i className="fa-solid fa-earth-americas"></i>
     {t("header.language")}
  </button>
  <ul className="dropdown-menu">
    <li>
      <button className="dropdown-item" onClick={() => changeLanguage("fr")}>
        🇫🇷 Français
      </button>
    </li>
    <li>
      <button className="dropdown-item" onClick={() => changeLanguage("en")}>
        🇬🇧 English
      </button>
    </li>
  </ul>
</div>

    </header>
  );
}
