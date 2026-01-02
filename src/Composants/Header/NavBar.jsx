import { Link } from "react-router-dom";
import Losange from "./Losange";
import { useTranslation } from "react-i18next";
import "../../Assets/styles/Header/NavBar.css";

export default function NavBar({ language }) {
  const { t } = useTranslation();
  const losangeClass = language === "fr" ? "losangeFR" : "losangeEN";
  const navBarClass = language === "fr" ? "navBar navBarFR" : "navBar navBarEN";
  
  return (
    <div className={navBarClass}>

      <div className="navLeft">
        <Link to="/cv" className="monNavLink">{t("header.cv")}</Link>
      </div>

      <Losange losangeClass={losangeClass} />

      <div className="navRight">
        <Link to="/projets" className="monNavLink">{t("header.projects")}</Link>
      </div>
    </div>
  );
}