import React from "react";
import "../Troisieme.scss";

import ScrollableSection, {
  ScrollableSectionProps,
} from "../../../Components/ScrollableSection/ScrollableSection";

function TroisiemeSciences() {
  const syntheseList: ScrollableSectionProps["list"] = [
    {
      title: "UAA 1 - Les mouvements de la Terre",
    },
    {
      title: "UAA 2 - La lumière nous permet d'observer",
    },
    {
      title: (
        <p style={{ fontWeight: "bold", margin: 0 }}>
          UAA 3 - La cellule animale
        </p>
      ),
      link: "/celluleAnimalePDF",
      targetSelf: true,
    },
    {
      title: (
        <p style={{ fontWeight: "bold", margin: 0 }}>
          UAA 3 - La cellule végétale
        </p>
      ),
      link: "/celluleVegetalePDF",
      targetSelf: true,
    },
    {
      title: "UAA 4 - La transformation de la matière",
    },
    {
      title: "UAA 5 - L'électricité",
    },
  ];

  const exercicesList: ScrollableSectionProps["list"] = [
    {
      title: "UAA 1 - Les mouvements de la Terre",
    },
    {
      title: "UAA 2 - La lumière nous permet d'observer",
    },
    {
      title: (
        <p style={{ fontWeight: "bold", margin: 0 }}>UAA 3 - La cellule</p>
      ),
      link: "http://www.labiologie.net/exerci.cellule.htm",
    },
    {
      title: "UAA 4 - La transformation de la matière",
    },
    {
      title: (
        <p style={{ fontWeight: "bold", margin: 0 }}>UAA 5 - L'électricité</p>
      ),
      link: "https://learningapps.org/8171249",
    },
  ];

  const linkList: ScrollableSectionProps["list"] = [
    {
      title: "UAA 1 - Les mouvements de la Terre",
    },
    {
      title: "UAA 2 - La lumière nous permet d'observer",
    },
    {
      title: (
        <p style={{ fontWeight: "bold", margin: 0 }}>
          UAA 3 - La cellule - Kahoot
        </p>
      ),
      link: " https://create.kahoot.it/share/la-cellule/ccf31a59-e260-4950-8ee9-d48e94e5bb5f",
    },
    {
      title: "UAA 4 - La transformation de la matière",
    },
    {
      title: "UAA 5 - L'électricité",
    },
  ];

  const videoList: ScrollableSectionProps["list"] = [
    {
      title: (
        <p style={{ fontWeight: "bold", margin: 0 }}>UAA 3 - Le neurone</p>
      ),
      link: "https://www.youtube.com/watch?v=j9peT2ruh6I",
    },
    {
      title: (
        <p style={{ fontWeight: "bold", margin: 0 }}>
          UAA 3 - Le système nerveux
        </p>
      ),
      link: "https://www.youtube.com/watch?v=XksfmWSJTf8",
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

export default TroisiemeSciences;
