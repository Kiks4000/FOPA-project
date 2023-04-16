import React from "react";

import NavBar from "../../Components/NavBar";

import DeuxiemeFrancais from "./Francais/DeuxiemeFrancais";
import DeuxiemeHistoire from "./Histoire/DeuxiemeHistoire";
import DeuxiemeLangues from "./Langues/DeuxiemeLangues";
import DeuxiemeMaths from "./Maths/DeuxiemeMaths";
import DeuxiemeSciences from "./Sciences/DeuxiemeSciences";

import "./Deuxieme.module.scss";

function Deuxieme() {
  const url = window.location.href;
  const urlArray = url.split("/");
  const lastPart = urlArray[urlArray.length - 1];

  return (
    <>
      <NavBar />
      <section>
        {lastPart === "francais" ? (
          <DeuxiemeFrancais />
        ) : lastPart === "histoire" ? (
          <DeuxiemeHistoire />
        ) : lastPart === "langues" ? (
          <DeuxiemeLangues />
        ) : lastPart === "maths" ? (
          <DeuxiemeMaths />
        ) : lastPart === "sciences" ? (
          <DeuxiemeSciences />
        ) : (
          <div>
            <h1>Deuxieme</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              voluptas, quod, quia, voluptates quae voluptatibus quibusdam
              accusantium quos voluptatum quas quidem. Quisquam, quae. Quisquam
              voluptas, quod, quia, voluptates quae voluptatibus quibusdam
              accusantium quos voluptatum quas quidem. Quisquam, quae. Quisquam
              voluptas, quod, quia, voluptates quae voluptatibus quibusdam
            </p>
          </div>
        )}
      </section>
    </>
  );
}

export default Deuxieme;
