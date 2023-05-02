import React from "react";

import NavBar from "../../Components/NavBar/NavBar";

import QuatriemeFrancais from "./Francais/QuatriemeFrancais";
import QuatriemeHistoire from "./Histoire/QuatriemeHistoire";
import QuatriemeLangues from "./Langues/QuatriemeLangues";
import QuatriemeMaths from "./Maths/QuatriemeMaths";
import QuatriemeSciences from "./Sciences/QuatriemeSciences";

import "./Quatrieme.module.scss";

function Quatrieme() {
  const url = window.location.href;
  const urlArray = url.split("/");
  const lastPart = urlArray[urlArray.length - 1];
  return (
    <>
      <NavBar />
      <section>
        {lastPart === "francais" ? (
          <QuatriemeFrancais />
        ) : lastPart === "histoire" ? (
          <QuatriemeHistoire />
        ) : lastPart === "langues" ? (
          <QuatriemeLangues />
        ) : lastPart === "maths" ? (
          <QuatriemeMaths />
        ) : lastPart === "sciences" ? (
          <QuatriemeSciences />
        ) : (
          <div>
            <h1>Quatrieme</h1>
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

export default Quatrieme;
