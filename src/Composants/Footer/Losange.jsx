import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import "../../Assets/styles/Footer/Losange.css";

import logo from "../../Assets/images/logo-header.png";

export default function Losange() {

  const { i18n } = useTranslation();
  return (

    <Link to="/" className="logo-footer">
      <div className={`losange ${i18n.language === "en" ? "losangeEN" : "losangeFR"}`}>
        <img src={logo} alt="Logo" />
      </div>
    </Link>
  );
}
