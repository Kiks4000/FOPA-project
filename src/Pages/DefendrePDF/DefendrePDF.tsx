import React from "react";

import NavBar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer";

import DefendrePDF from "../../images/DefendrePDF.png";

import "./DefendrePDF.scss";
import Button from "../../Components/Button/Button";

function DefendrePDFPage() {
  return (
    <>
      <NavBar />
      <div className="DefendrePDFPage">
        <Button label="Retour" url="/troisieme/francais" />
        <img src={DefendrePDF} alt="DefendrePDF" />
      </div>
      <Footer />
    </>
  );
}

export default DefendrePDFPage;
