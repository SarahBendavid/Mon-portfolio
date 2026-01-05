import { useTranslation, Trans } from "react-i18next";

import "../../Assets/styles/Main/Accueil/AccueilMain.css";
import "../../Assets/styles/Main/Accueil/Texte.css";
import "../../Assets/styles/Main/Accueil/DivImg.css";
import "../../Assets/styles/Main/Accueil/Postites.css";

import photoCv from "../../Assets/images/photoCv.jpg";
import cadre from "../../Assets/images/cadre.svg";

import postitNomFR from "../../Assets/images/postite-nom.svg";
import postitMetierFR from "../../Assets/images/postite-metier.svg";
import postitNomEN from "../../Assets/images/postite-nom-english.svg";
import postitMetierEN from "../../Assets/images/postite-metier-english.svg";

export default function Presentation() {
  const { t, i18n } = useTranslation();

  const postitNom = i18n.language === "fr" ? postitNomFR : postitNomEN;
  const postitMetier = i18n.language === "fr" ? postitMetierFR : postitMetierEN;

  const lang = i18n.language;

  return (
    <main>

      <p className="introduction">{t("presentation.intro")}</p>

        <div className="zoneImg">

          <div className="decor">

            <img className="photoCv" src={photoCv} alt="photoCv" />
            <img src={cadre} alt="cadre" className="cadre" />

            <div className={`postits postits-${lang}`}> 
              <img src={postitNom} alt="postit nom" className="postit1" />
              <img src={postitMetier} alt="postit métier" className="postit2" />
            </div>
          </div>
        </div>

      <h1>{t("presentation.title")}</h1>

      <p className="presentation">
        <Trans i18nKey="presentation.textWithBr" components={{ br: <br /> }} />
      </p>
    </main>
  );
}
