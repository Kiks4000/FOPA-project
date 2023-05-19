import React from "react";

import NavBar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer";

import EpouvanteurPDF1 from "../../images/EpouvanteurPDF-01.png";
import EpouvanteurPDF2 from "../../images/EpouvanteurPDF-02.png";
import EpouvanteurPDF3 from "../../images/EpouvanteurPDF-03.png";
import EpouvanteurPDF4 from "../../images/EpouvanteurPDF-04.png";
import EpouvanteurPDF5 from "../../images/EpouvanteurPDF-05.png";
import EpouvanteurPDF6 from "../../images/EpouvanteurPDF-06.png";
import EpouvanteurPDF7 from "../../images/EpouvanteurPDF-07.png";
import EpouvanteurPDF8 from "../../images/EpouvanteurPDF-08.png";
import EpouvanteurPDF9 from "../../images/EpouvanteurPDF-09.png";
import EpouvanteurPDF10 from "../../images/EpouvanteurPDF-10.png";
import EpouvanteurPDF11 from "../../images/EpouvanteurPDF-11.png";
import EpouvanteurPDF12 from "../../images/EpouvanteurPDF-12.png";
import EpouvanteurPDF13 from "../../images/EpouvanteurPDF-13.png";
import EpouvanteurPDF14 from "../../images/EpouvanteurPDF-14.png";
import EpouvanteurPDF15 from "../../images/EpouvanteurPDF-15.png";

import "./EpouvanteurPDF.scss";
import Button from "../../Components/Button/Button";

function EpouvanteurPDFPage() {
  return (
    <>
      <NavBar />
      <div className="EpouvanteurPDFPage">
        <Button label="Retour" url="/troisieme/francais" />
        <img src={EpouvanteurPDF1} alt="EpouvanteurPDF page1" />
        <img src={EpouvanteurPDF2} alt="EpouvanteurPDF page2" />
        <img src={EpouvanteurPDF3} alt="EpouvanteurPDF page3" />
        <img src={EpouvanteurPDF4} alt="EpouvanteurPDF page4" />
        <img src={EpouvanteurPDF5} alt="EpouvanteurPDF page5" />
        <img src={EpouvanteurPDF6} alt="EpouvanteurPDF page6" />
        <img src={EpouvanteurPDF7} alt="EpouvanteurPDF page7" />
        <img src={EpouvanteurPDF8} alt="EpouvanteurPDF page8" />
        <img src={EpouvanteurPDF9} alt="EpouvanteurPDF page9" />
        <img src={EpouvanteurPDF10} alt="EpouvanteurPDF page10" />
        <img src={EpouvanteurPDF11} alt="EpouvanteurPDF page11" />
        <img src={EpouvanteurPDF12} alt="EpouvanteurPDF page12" />
        <img src={EpouvanteurPDF13} alt="EpouvanteurPDF page13" />
        <img src={EpouvanteurPDF14} alt="EpouvanteurPDF page14" />
        <img src={EpouvanteurPDF15} alt="EpouvanteurPDF page15" />
        <Button label="Retour" url="/troisieme/francais" />
      </div>
      <Footer />
    </>
  );
}

export default EpouvanteurPDFPage;
