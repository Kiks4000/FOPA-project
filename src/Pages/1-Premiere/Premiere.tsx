import React from "react";

import NavBar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer";
import Button from "../../Components/Button/Button";

import PremiereFrancais from "./Francais/PremiereFrancais";
import PremiereHistoire from "./Histoire/PremiereHistoire";
import PremiereLangues from "./Langues/PremiereLangues";
import PremiereMaths from "./Maths/PremiereMaths";
import PremiereSciences from "./Sciences/PremiereSciences";
import PremiereReligion from "./Religion/PremiereReligion";

import "./Premiere.scss";

function Premiere() {
  const url = window.location.href;
  const urlArray = url.split("/");
  const lastPart = urlArray[urlArray.length - 1];

  return (
    <>
      <NavBar />
      <section className="premiereSection">
        {lastPart === "francais" ? (
          <>
            <h1 className="premiereTitle">1ère Français</h1>
            <PremiereFrancais />
          </>
        ) : lastPart === "histoire" ? (
          <>
            <h1 className="premiereTitle">1ère Histoire</h1>
            <PremiereHistoire />
          </>
        ) : lastPart === "langues" ? (
          <>
            <h1 className="premiereTitle">1ère Langues</h1>
            <PremiereLangues />
          </>
        ) : lastPart === "maths" ? (
          <>
            <h1 className="premiereTitle">1ère Maths</h1>
            <PremiereMaths />
          </>
        ) : lastPart === "sciences" ? (
          <>
            <h1 className="premiereTitle">1ère Sciences</h1>
            <PremiereSciences />
          </>
        ) : lastPart === "religion" ? (
          <>
            <h1 className="premiereTitle">1ère Religion</h1>
            <PremiereReligion />
          </>
        ) : (
          <div>
            <div className="premiereButtons">
              <Button label="Français" url="/premiere/francais" />
              <Button label="Histoire" url="/premiere/histoire" />
              <Button label="Langues" url="/premiere/langues" />
              <Button label="Maths" url="/premiere/maths" />
              <Button label="Sciences" url="/premiere/sciences" />
              <Button label="Religion" url="/premiere/religion" />
            </div>
          </div>
        )}
      </section>
      <Footer />
    </>
  );
}

export default Premiere;
