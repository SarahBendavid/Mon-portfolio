import { useTranslation } from "react-i18next";

import "../../Assets/styles/Footer/Bloc-Gauche.css";

export default function BlocGauche () {
  
  const { t } = useTranslation ();

  return (

    <div className="bloc-gauche">
        <div className="titre2">
          <h2>{t("footer.contact")}</h2>
        </div>
        <div className="coordonees">
          {t("footer.tel")}: <span className="span-tel">053.788.92.12</span>
          <br />
          {t("footer.mail")}: <span className="span-mail">sarah.laura.bendavid@gmail.com</span>
          <br />
        </div>
    </div>
  );
}