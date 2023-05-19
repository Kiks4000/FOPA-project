import React from "react";

import NavBar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer";

import CelluleAnimale from "../../images/CelluleAnimalePDF.png";

import "./CelluleAnimalePDF.scss";
import Button from "../../Components/Button/Button";

function CelluleAnimalePDF() {
  return (
    <>
      <NavBar />
      <div className="CelluleAnimalePDFPage">
        <Button label="Retour" url="/troisieme/sciences" />
        <img src={CelluleAnimale} alt="Cellule Animale" />
      </div>
      <Footer />
    </>
  );
}

export default CelluleAnimalePDF;
