import React from "react";
import "../Deuxieme.scss";

import ScrollableSection, {
  ScrollableSectionProps,
} from "../../../Components/ScrollableSection/ScrollableSection";
import EmbedVideoSection from "../../../Components/EmbedVideoSection/EmbedVideoSection";

function DeuxiemeReligion() {
  const syntheseList: ScrollableSectionProps["list"] = [
    {
      title: "Thème 1 - Construire le bonheur",
    },
    {
      title: "Thème 2 - Affronter le mal",
    },
    {
      title: "Thème 3 - Habiter le corps",
    },
    {
      title: "Thème 4 - Convertir la violence",
    },
    {
      title: "Thème 5 - Vivre et mourir",
    },
    {
      title: "Thème 6 - Vivre en relation",
    },
    {
      title: "Thème 7 - Pratiquer la justice et charité",
    },
    {
      title: "Thème 8 - Traverser la souffrance",
    },
    {
      title: "Thème 9 - Développer le rapport au monde",
    },
    {
      title: "Thème 10 - Fonder la spiritualité de l'humain",
    },
  ];

  const exercicesList: ScrollableSectionProps["list"] = [
    {
      title: "Thème 1 - Construire le bonheur",
    },
    {
      title: "Thème 2 - Affronter le mal",
    },
    {
      title: "Thème 3 - Habiter le corps",
    },
    {
      title: "Thème 4 - Convertir la violence",
    },
    {
      title: "Thème 5 - Vivre et mourir",
    },
    {
      title: "Thème 6 - Vivre en relation",
    },
    {
      title: "Thème 7 - Pratiquer la justice et charité",
    },
    {
      title: "Thème 8 - Traverser la souffrance",
    },
    {
      title: "Thème 9 - Développer le rapport au monde",
    },
    {
      title: "Thème 10 - Fonder la spiritualité de l'humain",
    },
  ];
  const linkList: ScrollableSectionProps["list"] = [
    {
      title: "Thème 1 - Construire le bonheur",
    },
    {
      title: "Thème 2 - Affronter le mal",
    },
    {
      title: "Thème 3 - Habiter le corps",
    },
    {
      title: "Thème 4 - Convertir la violence",
    },
    {
      title: "Thème 5 - Vivre et mourir",
    },
    {
      title: "Thème 6 - Vivre en relation",
    },
    {
      title: "Thème 7 - Pratiquer la justice et charité",
    },
    {
      title: "Thème 8 - Traverser la souffrance",
    },
    {
      title: "Thème 9 - Développer le rapport au monde",
    },
    {
      title: "Thème 10 - Fonder la spiritualité de l'humain",
    },
  ];

  return (
    <>
      <div className="deuxSection">
        <div className="deuxSynthExo">
          <div className="deuxSynthExo--Up">
            <ScrollableSection label="Synthèse" list={syntheseList} />
            <ScrollableSection label="Exercices" list={exercicesList} />
          </div>
          <div className="deuxSynthExo--Down">
            <ScrollableSection label="Divers" list={linkList} />
            <EmbedVideoSection videoLink="https://www.youtube.com/watch?v=1B8fBmLIsh8" />
          </div>
        </div>
      </div>
    </>
  );
}

export default DeuxiemeReligion;
