import React from "react";

import DeuxiemeFrancais from "./Francais/DeuxiemeFrancais";
import DeuxiemeHistoire from "./Histoire/DeuxiemeHistoire";
import DeuxiemeLangues from "./Langues/DeuxiemeLangues";
import DeuxiemeMaths from "./Maths/DeuxiemeMaths";
import DeuxiemeSciences from "./Sciences/DeuxiemeSciences";

import "./Deuxieme.module.scss";

function Deuxieme() {
  // get the current url
  const url = window.location.href;
  // get the last part of the url
  const urlArray = url.split("/");
  const lastPart = urlArray[urlArray.length - 1];

  if (lastPart === "Francais") {
    return <DeuxiemeFrancais />;
  } else if (lastPart === "Histoire") {
    return <DeuxiemeHistoire />;
  } else if (lastPart === "Langues") {
    return <DeuxiemeLangues />;
  } else if (lastPart === "Maths") {
    return <DeuxiemeMaths />;
  } else if (lastPart === "Sciences") {
    return <DeuxiemeSciences />;
  }

  return <div>Deuxieme</div>;
}

export default Deuxieme;
