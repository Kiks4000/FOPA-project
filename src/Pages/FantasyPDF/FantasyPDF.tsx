import React from "react";

import NavBar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer";

import FantasyPDF1 from "../../images/FantasyPDF-1.png";
import FantasyPDF2 from "../../images/FantasyPDF-2.png";

import "./FantasyPDF.scss";
import Button from "../../Components/Button/Button";

function FantasyPDFPage() {
  return (
    <>
      <NavBar />
      <div className="FantasyPDFPage">
        <Button label="Retour" url="/troisieme/francais" />
        <img src={FantasyPDF1} alt="FantasyPDF page1" />
        <img src={FantasyPDF2} alt="FantasyPDF page2" />
      </div>
      <Footer />
    </>
  );
}

export default FantasyPDFPage;
