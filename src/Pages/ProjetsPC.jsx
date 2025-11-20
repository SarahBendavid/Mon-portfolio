import React from "react";

import HeaderPC from "../Composants/PC/HeaderPC.jsx";
import ProjetsMainPC from "../Composants/PC/ProjetsMainPC.jsx";
import FooterPC from "../Composants/PC/FooterPC.jsx";

import "../assets/styles/StylePC/ProjetsPC.css";

export default function ProjetsPC() {
  return (
    <>
    <main className="projet-page">
      <HeaderPC />
      <ProjetsMainPC />
      <FooterPC />
    </main>
    </>
  );
}