import React from "react";
import "../Troisieme.scss";

import ScrollableSection, {
  ScrollableSectionProps,
} from "../../../Components/ScrollableSection/ScrollableSection";

function TroisiemeReligion() {
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
      title: (
        <p style={{ fontWeight: "bold", margin: 0 }}>
          Thème 9 - C'est quoi le ramadan ? (c.f Vidéos)
        </p>
      ),
      link: "/questionnairePDF",
      targetSelf: true,
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

  const videoList: ScrollableSectionProps["list"] = [
    {
      title: (
        <p style={{ fontWeight: "bold", margin: 0 }}>
          Thème 4 - La souffrance – Effet du harcèlement
        </p>
      ),
      link: "https://www.youtube.com/watch?v=Q8orcd0obrk",
    },
    {
      title: (
        <p style={{ fontWeight: "bold", margin: 0 }}>
          Thème 9 - C'est quoi le ramadan ? (c.f Exercices)
        </p>
      ),
      link: "https://www.youtube.com/watch?v=Q8orcd0obrk",
    },
  ];

  return (
    <>
      <div className="troisSection">
        <div className="troisSynthExo">
          <div className="troisSynthExo--Up">
            <ScrollableSection label="Synthèse" list={syntheseList} />
            <ScrollableSection label="Exercices" list={exercicesList} />
          </div>
          <div className="troisSynthExo--Down">
            <ScrollableSection label="Divers" list={linkList} />
            <ScrollableSection label="Vidéos" list={videoList} />
          </div>
        </div>
      </div>
    </>
  );
}

export default TroisiemeReligion;
