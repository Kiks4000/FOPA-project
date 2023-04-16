import React from "react";

import PremiereFrancais from "./Francais/PremiereFrancais";
import PremiereHistoire from "./Histoire/PremiereHistoire";
import PremiereLangues from "./Langues/PremiereLangues";
import PremiereMaths from "./Maths/PremiereMaths";
import PremiereSciences from "./Sciences/PremiereSciences";

import "./Premiere.module.scss";

function Premiere() {
  // get the current url
  const url = window.location.href;
  // get the last part of the url
  const urlArray = url.split("/");
  const lastPart = urlArray[urlArray.length - 1];

  if (lastPart === "Francais") {
    return <PremiereFrancais />;
  } else if (lastPart === "Histoire") {
    return <PremiereHistoire />;
  } else if (lastPart === "Langues") {
    return <PremiereLangues />;
  } else if (lastPart === "Maths") {
    return <PremiereMaths />;
  } else if (lastPart === "Sciences") {
    return <PremiereSciences />;
  }
  return <div>Premiere</div>;
}

export default Premiere;
