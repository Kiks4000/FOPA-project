import React from "react";

import NavBar from "../../Components/NavBar/NavBar";

import TroisiemeFrancais from "./Francais/TroisiemeFrancais";
import TroisiemeHistoire from "./Histoire/TroisiemeHistoire";
import TroisiemeLangues from "./Langues/TroisiemeLangues";
import TroisiemeMaths from "./Maths/TroisiemeMaths";
import TroisiemeSciences from "./Sciences/TroisiemeSciences";

import "./Troisieme.module.scss";

function Troisieme() {
  const url = window.location.href;
  const urlArray = url.split("/");
  const lastPart = urlArray[urlArray.length - 1];
  return (
    <>
      <NavBar />
      <section>
        {lastPart === "francais" ? (
          <TroisiemeFrancais />
        ) : lastPart === "histoire" ? (
          <TroisiemeHistoire />
        ) : lastPart === "langues" ? (
          <TroisiemeLangues />
        ) : lastPart === "maths" ? (
          <TroisiemeMaths />
        ) : lastPart === "sciences" ? (
          <TroisiemeSciences />
        ) : (
          <div>
            <h1>Troisieme</h1>
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

export default Troisieme;
