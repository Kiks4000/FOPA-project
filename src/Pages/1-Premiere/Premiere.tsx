import React from "react";

import NavBar from "../../Components/NavBar";

import PremiereFrancais from "./Francais/PremiereFrancais";
import PremiereHistoire from "./Histoire/PremiereHistoire";
import PremiereLangues from "./Langues/PremiereLangues";
import PremiereMaths from "./Maths/PremiereMaths";
import PremiereSciences from "./Sciences/PremiereSciences";

import "./Premiere.module.scss";

function Premiere() {
  const url = window.location.href;
  const urlArray = url.split("/");
  const lastPart = urlArray[urlArray.length - 1];

  return (
    <>
      <NavBar />
      <section>
        {lastPart === "francais" ? (
          <PremiereFrancais />
        ) : lastPart === "histoire" ? (
          <PremiereHistoire />
        ) : lastPart === "langues" ? (
          <PremiereLangues />
        ) : lastPart === "maths" ? (
          <PremiereMaths />
        ) : lastPart === "sciences" ? (
          <PremiereSciences />
        ) : (
          <div>
            <h1>Première</h1>
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

export default Premiere;
