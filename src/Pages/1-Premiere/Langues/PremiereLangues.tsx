import React from "react";
import "../Premiere.scss";

import ScrollableSection, {
  ScrollableSectionProps,
} from "../../../Components/ScrollableSection/ScrollableSection";
import EmbedVideoSection from "../../../Components/EmbedVideoSection/EmbedVideoSection";

function PremiereLangues() {
  const syntheseList: ScrollableSectionProps["list"] = [
    {
      title: "Chapitre 1 - Exemple",
    },
    {
      title: "Chapitre 2 - Exemple",
    },
    {
      title: "Chapitre 3 - Exemple",
    },
    {
      title: "Chapitre 4 - Exemple",
    },
    {
      title: "Chapitre 5 - Exemple",
    },
    {
      title: "Chapitre 6 - Exemple",
    },
  ];

  const exercicesList: ScrollableSectionProps["list"] = [
    {
      title: "Chapitre 1 - Exemple",
    },
    {
      title: "Chapitre 2 - Exemple",
    },
    {
      title: "Chapitre 3 - Exemple",
    },
    {
      title: "Chapitre 4 - Exemple",
    },
    {
      title: "Chapitre 5 - Exemple",
    },
    {
      title: "Chapitre 6 - Exemple",
    },
  ];

  const linkList: ScrollableSectionProps["list"] = [
    {
      title: "Chapitre 1 - Exemple",
    },
    {
      title: "Chapitre 2 - Exemple",
    },
    {
      title: "Chapitre 3 - Exemple",
    },
    {
      title: "Chapitre 4 - Exemple",
    },
    {
      title: "Chapitre 5 - Exemple",
    },
    {
      title: "Chapitre 6 - Exemple",
    },
  ];

  return (
    <>
      <div className="premSection">
        <div className="premSynthExo">
          <div className="premSynthExo--Up">
            <ScrollableSection label="Synthèse" list={syntheseList} />
            <ScrollableSection label="Exercices" list={exercicesList} />
          </div>
          <div className="premSynthExo--Down">
            <ScrollableSection label="Divers" list={linkList} />
            <EmbedVideoSection videoLink="https://www.youtube.com/watch?v=1B8fBmLIsh8" />
          </div>
        </div>
      </div>
    </>
  );
}

export default PremiereLangues;
