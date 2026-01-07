import { useTranslation, Trans } from "react-i18next";

import "../../Assets/styles/Main/Accueil/AccueilMain.css";
import "../../Assets/styles/Main/Accueil/Texte.css";
import "../../Assets/styles/Main/Accueil/DivImg.css";
import "../../Assets/styles/Main/Accueil/Postites.css";

import photoCv from "../../Assets/images/photoCv.jpg";
import cadre from "../../Assets/images/cadre.svg";
import postitNom from "../../Assets/images/postite-nom.png";
import postitAgeFR from "../../Assets/images/postite-age-FR.png";
import postitAgeEN from "../../Assets/images/postite-age-EN.svg";
import postitDev from "../../Assets/images/developpeuse.png";
import postitPsy from "../../Assets/images/Psychologue.png";
import postitRedac from "../../Assets/images/Redactrice.png";


export default function Presentation() {
  const { t, i18n } = useTranslation();

  const postitAge = i18n.language === "fr" ? postitAgeFR : postitAgeEN;

  const lang = i18n.language;

  return (
    <main>

      <p className="introduction">{t("presentation.intro")}</p>

        <div className="zoneImg">

          <div className="postits postits-gauche"> 

            <div className="postit postit1">
              <img src={postitNom} alt="postit nom" />
            </div>

            <div className={`postit postit2-${lang}`}> 
              <img src={postitAge} alt="postit age"  />
            </div>
          </div>

          <div className="wrapperImg">

            <img className="photoCv" src={photoCv} alt="photoCv" />
            <img src={cadre} alt="cadre" className="cadre" />

          </div>

          <div className={`postits postits-droit-${lang}`}>

            <div className="postit postit3">
              <img src={postitDev} alt="postit dev" />
            </div>

            <div className="postit postit4">
              <img src={postitRedac} alt="postit redac" />
            </div>

            <div className="postit postit5">
              <img src={postitPsy} alt="postit psy" />
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
