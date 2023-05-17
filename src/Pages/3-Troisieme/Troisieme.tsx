import React from "react";

import NavBar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer";
import Button from "../../Components/Button";

import TroisiemeFrancais from "./Francais/TroisiemeFrancais";
import TroisiemeHistoire from "./Histoire/TroisiemeHistoire";
import TroisiemeLangues from "./Langues/TroisiemeLangues";
import TroisiemeMaths from "./Maths/TroisiemeMaths";
import TroisiemeSciences from "./Sciences/TroisiemeSciences";
import TroisiemeReligion from "./Religion/TroisiemeReligion";

import "./Troisieme.scss";

function Troisieme() {
  const url = window.location.href;
  const urlArray = url.split("/");
  const lastPart = urlArray[urlArray.length - 1];
  return (
    <>
      <NavBar />
      <section className="troisiemeSection">
        {lastPart === "francais" ? (
          <>
            <h1 className="troisiemeTitle">3ème Français</h1>
            <TroisiemeFrancais />
          </>
        ) : lastPart === "histoire" ? (
          <>
            <h1 className="troisiemeTitle">3ème Histoire</h1>
            <TroisiemeHistoire />
          </>
        ) : lastPart === "langues" ? (
          <>
            <h1 className="troisiemeTitle">3ème Langues</h1>
            <TroisiemeLangues />
          </>
        ) : lastPart === "maths" ? (
          <>
            <h1 className="troisiemeTitle">3ème Maths</h1>
            <TroisiemeMaths />
          </>
        ) : lastPart === "sciences" ? (
          <>
            <h1 className="troisiemeTitle">3ème Sciences</h1>
            <TroisiemeSciences />
          </>
        ) : lastPart === "religion" ? (
          <>
            <h1 className="troisiemeTitle">3ème Religion</h1>
            <TroisiemeReligion />
          </>
        ) : (
          <div>
            <div className="troisiemeButtons">
              <Button label="Français" url="/troisieme/francais" />
              <Button label="Histoire" url="/troisieme/histoire" />
              <Button label="Langues" url="/troisieme/langues" />
              <Button label="Maths" url="/troisieme/maths" />
              <Button label="Sciences" url="/troisieme/sciences" />
              <Button label="Religion" url="/troisieme/religion" />
            </div>
          </div>
        )}
      </section>
      <Footer />
    </>
  );
}

export default Troisieme;
