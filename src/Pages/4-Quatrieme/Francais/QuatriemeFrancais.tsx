import React from "react";
import "../Quatrieme.scss";

import ScrollableSection, {
  ScrollableSectionProps,
} from "../../../Components/ScrollableSection/ScrollableSection";
import EmbedVideoSection from "../../../Components/EmbedVideoSection/EmbedVideoSection";

function QuatriemeFrancais() {
  const syntheseList: ScrollableSectionProps["list"] = [
    {
      title: "UAA 1 - Exemple",
    },
    {
      title: "UAA 2 - Exemple",
    },
    {
      title: "UAA 3 - Exemple",
    },
    {
      title: "UAA 4 - Exemple",
    },
    {
      title: "UAA 5 - Exemple",
    },
    {
      title: "UAA 6 - Exemple",
    },
  ];

  const exercicesList: ScrollableSectionProps["list"] = [
    {
      title: "UAA 1 - Exemple",
    },
    {
      title: "UAA 2 - Exemple",
    },
    {
      title: "UAA 3 - Exemple",
    },
    {
      title: "UAA 4 - Exemple",
    },
    {
      title: "UAA 5 - Exemple",
    },
    {
      title: "UAA 6 - Exemple",
    },
  ];

  const linkList: ScrollableSectionProps["list"] = [
    {
      title: "UAA 1 - Exemple",
    },
    {
      title: "UAA 2 - Exemple",
    },
    {
      title: "UAA 3 - Exemple",
    },
    {
      title: "UAA 4 - Exemple",
    },
    {
      title: "UAA 5 - Exemple",
    },
    {
      title: "UAA 6 - Exemple",
    },
  ];

  return (
    <>
      <div className="quatreSection">
        <div className="quatreSynthExo">
          <div className="quatreSynthExo--Up">
            <ScrollableSection label="Synthèse" list={syntheseList} />
            <ScrollableSection label="Exercices" list={exercicesList} />
          </div>
          <div className="quatreSynthExo--Down">
            <ScrollableSection label="Divers" list={linkList} />
            <EmbedVideoSection videoLink="https://www.youtube.com/watch?v=1B8fBmLIsh8" />
          </div>
        </div>
      </div>
    </>
  );
}

export default QuatriemeFrancais;
