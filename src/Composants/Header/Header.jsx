import { useTranslation } from "react-i18next";
import NavBar from "./NavBar.jsx";
import VShape from "./VShape.jsx";
import LanguageSwitcher from "./LanguageSwitcher";
import "../../Assets/styles/Header/Header.css";

export default function Header() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header className="header">
      <VShape>
      <NavBar language={i18n.language} />
      </VShape>
      <LanguageSwitcher changeLanguage={changeLanguage} />
    </header>
  );
}

