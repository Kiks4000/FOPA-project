import React from "react";

import NavBar from "../../Components/NavBar/NavBar";
import Button from "../../Components/Button";
import Footer from "../../Components/Footer";

import DeuxiemeFrancais from "./Francais/DeuxiemeFrancais";
import DeuxiemeHistoire from "./Histoire/DeuxiemeHistoire";
import DeuxiemeLangues from "./Langues/DeuxiemeLangues";
import DeuxiemeMaths from "./Maths/DeuxiemeMaths";
import DeuxiemeSciences from "./Sciences/DeuxiemeSciences";
import DeuxiemeReligion from "./Religion/DeuxiemeReligion";

import "./Deuxieme.scss";

function Deuxieme() {
  const url = window.location.href;
  const urlArray = url.split("/");
  const lastPart = urlArray[urlArray.length - 1];

  return (
    <>
      <NavBar />
      <section className="deuxiemeSection">
        {lastPart === "francais" ? (
          <>
            <h1 className="deuxiemeTitle">2ème Français</h1>
            <DeuxiemeFrancais />
          </>
        ) : lastPart === "histoire" ? (
          <>
            <h1 className="deuxiemeTitle">2ème Histoire</h1>
            <DeuxiemeHistoire />
          </>
        ) : lastPart === "langues" ? (
          <>
            <h1 className="deuxiemeTitle">2ème Langues</h1>
            <DeuxiemeLangues />
          </>
        ) : lastPart === "maths" ? (
          <>
            <h1 className="deuxiemeTitle">2ème Maths</h1>
            <DeuxiemeMaths />
          </>
        ) : lastPart === "sciences" ? (
          <>
            <h1 className="deuxiemeTitle">2ème Sciences</h1>
            <DeuxiemeSciences />
          </>
        ) : lastPart === "religion" ? (
          <>
            <h1 className="deuxiemeTitle">2ème Religion</h1>
            <DeuxiemeReligion />
          </>
        ) : (
          <div>
            <div className="deuxiemeButtons">
              <Button label="Français" url="/deuxieme/francais" />
              <Button label="Histoire" url="/deuxieme/histoire" />
              <Button label="Langues" url="/deuxieme/langues" />
              <Button label="Maths" url="/deuxieme/maths" />
              <Button label="Sciences" url="/deuxieme/sciences" />
              <Button label="Religion" url="/deuxieme/religion" />
            </div>
          </div>
        )}
      </section>
      <Footer />
    </>
  );
}

export default Deuxieme;
