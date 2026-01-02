import { useTranslation } from "react-i18next";
import "../../Assets/styles/Header/LanguageSwitcher.css";

export default function LanguageSwitcher({ changeLanguage }) {
  const { t } = useTranslation();

  return (
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
);
}