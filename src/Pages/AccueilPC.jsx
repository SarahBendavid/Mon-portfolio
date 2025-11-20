
import React from "react";

import HeaderPC from "../Composants/PC/HeaderPC.jsx";
import PresentationPC from "../Composants/PC/PresentationAccueilPC.jsx";
import FooterPC from "../Composants/PC/FooterPC.jsx";

import "../assets/styles/StylePC/AccueilPC.css";


  export default function AccueilPC() {
  return (
    <>
    <main className="accueil-page">
      <HeaderPC />
      <PresentationPC />
      <FooterPC />
    </main>
    </>
  );
}
