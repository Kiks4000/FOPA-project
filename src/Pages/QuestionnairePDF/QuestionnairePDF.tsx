import React from "react";

import NavBar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer";

import QuestionnairePDF1 from "../../images/QuestionnairePDF-1.png";
import QuestionnairePDF2 from "../../images/QuestionnairePDF-2.png";

import "./QuestionnairePDF.scss";
import Button from "../../Components/Button/Button";

function QuestionnairePDFPage() {
  return (
    <>
      <NavBar />
      <div className="QuestionnairePDFPage">
        <Button label="Retour" url="/troisieme/francais" />
        <img src={QuestionnairePDF1} alt="QuestionnairePDF page1" />
        <img src={QuestionnairePDF2} alt="QuestionnairePDF page2" />
      </div>
      <Footer />
    </>
  );
}

export default QuestionnairePDFPage;
