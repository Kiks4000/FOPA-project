import React from "react";

import NavBar from "../../Components/NavBar/NavBar";
import Button from "../../Components/Button";
import Footer from "../../Components/Footer/Footer";

import QuatriemeFrancais from "./Francais/QuatriemeFrancais";
import QuatriemeHistoire from "./Histoire/QuatriemeHistoire";
import QuatriemeLangues from "./Langues/QuatriemeLangues";
import QuatriemeMaths from "./Maths/QuatriemeMaths";
import QuatriemeSciences from "./Sciences/QuatriemeSciences";
import QuatriemeReligion from "./Religion/QuatriemeReligion";

import "./Quatrieme.scss";

function Quatrieme() {
  const url = window.location.href;
  const urlArray = url.split("/");
  const lastPart = urlArray[urlArray.length - 1];
  return (
    <>
      <NavBar />
      <section className="quatriemeSection">
        {lastPart === "francais" ? (
          <>
            <h1 className="quatriemeTitle">4ème Français</h1>
            <QuatriemeFrancais />
          </>
        ) : lastPart === "histoire" ? (
          <>
            <h1 className="quatriemeTitle">4ème Histoire</h1>
            <QuatriemeHistoire />
          </>
        ) : lastPart === "langues" ? (
          <>
            <h1 className="quatriemeTitle">4ème Langues</h1>
            <QuatriemeLangues />
          </>
        ) : lastPart === "maths" ? (
          <>
            <h1 className="quatriemeTitle">4ème Maths</h1>
            <QuatriemeMaths />
          </>
        ) : lastPart === "sciences" ? (
          <>
            <h1 className="quatriemeTitle">4ème Sciences</h1>
            <QuatriemeSciences />
          </>
        ) : lastPart === "religion" ? (
          <>
            <h1 className="quatriemeTitle">4ème Religion</h1>
            <QuatriemeReligion />
          </>
        ) : (
          <div>
            <div className="quatriemeButtons">
              <Button label="Français" url="/quatrieme/francais" />
              <Button label="Histoire" url="/quatrieme/histoire" />
              <Button label="Langues" url="/quatrieme/langues" />
              <Button label="Maths" url="/quatrieme/maths" />
              <Button label="Sciences" url="/quatrieme/sciences" />
              <Button label="Religion" url="/quatrieme/religion" />
            </div>
          </div>
        )}
      </section>
      <Footer />
    </>
  );
}

export default Quatrieme;
