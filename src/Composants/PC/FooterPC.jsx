import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import logo from "../../assets/images/logo-header.png";
import linkedinLogo from "../../assets/images/logo-linkedin.png";
import githubLogo from "../../assets/images/logo-github.png";
import discordLogo from "../../assets/images/logo-discord.jpg";

export default function FooterPC() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  const legalLink = currentLang === "fr" ? "/Mentions-legales" : "/Legal-notice";
  const privacyLink = currentLang === "fr" ? "/Confidentialite" : "/Privacy-policy";

  return (
    <footer className="footer">
      <div className="bloc-gauche">
        <div className="titre2">
          <h2>{t("footer.contact")}</h2>
        </div>
        <div className="coordonees">
          {t("footer.tel")}: 053.788.92.12
          <br />
          <br />
          {t("footer.mail")}: sarah.laura.bendavid@gmail.com
          <br />
        </div>
      </div>

      <Link to="/" className="logo-footer">
        <div className="losange">
          <img src={logo} alt="Logo" />
        </div>
      </Link>

      <div className="liens">
        <div className="reseaux">
          <a href="https://www.linkedin.com/in/sarah-bendavid-6176a0224/" target="_blank" rel="noopener noreferrer">
            <img src={linkedinLogo} alt="LinkedIn" />
          </a>
          <a href="https://github.com/SarahBendavid" target="_blank" rel="noopener noreferrer">
            <img src={githubLogo} alt="GitHub" />
          </a>
          <a href="https://discord.com/users/laurage3236" target="_blank" rel="noopener noreferrer">
            <img src={discordLogo} alt="Discord" />
          </a>
        </div>

        <div className="liens-legaux">
          <Link to={legalLink}>{t("footer.legal")}</Link> 
          <span className="separator">|</span>{" "}
          <Link to={privacyLink}>{t("footer.privacy")}</Link>
        </div>

        <div className="copyright">
          © 2025 Sarah Bendavid. {t("footer.rights")}
        </div>
      </div>
    </footer>
  );
}
