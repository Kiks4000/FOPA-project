import React from "react";

import NavBar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer";

import CelluleVegetale from "../../images/CelluleVegetalePDF.png";

import "./CelluleVegetalePDF.scss";
import Button from "../../Components/Button/Button";

function CelluleVegetalePDF() {
  return (
    <>
      <NavBar />
      <div className="CelluleVegetalePDFPage">
        <Button label="Retour" url="/troisieme/sciences" />
        <img src={CelluleVegetale} alt="Cellule Vegetale" />
      </div>
      <Footer />
    </>
  );
}

export default CelluleVegetalePDF;
