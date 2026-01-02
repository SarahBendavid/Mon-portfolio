import BlocGauche from "./Bloc-Gauche.jsx";
import Losange from "./Losange.jsx";
import BlocDroit from "./Bloc-Droit.jsx";

import "../../Assets/styles/Footer/Footer.css";

export default function Footer({ className = "" }) {
  
  return (
    <footer className={className}>
      <BlocGauche/>
      <Losange/>
      <BlocDroit/>
    </footer>
  );
}


      
    
