import React from "react";
import "../Troisieme.scss";

import ScrollableSection, {
  ScrollableSectionProps,
} from "../../../Components/ScrollableSection/ScrollableSection";

function TroisiemeFrancais() {
  const syntheseList: ScrollableSectionProps["list"] = [
    {
      title: "UAA 0 - Justifier, expliciter",
    },
    {
      title: "UAA 1 - Rechercher l'information",
    },
    {
      title: "UAA 2 - Réduire, résumer et synthétiser",
    },
    {
      title: (
        <p style={{ fontWeight: "bold", margin: 0 }}>
          UAA 3 - Défendre une opinion par écrit
        </p>
      ),
      link: "/defendrePDF",
      targetSelf: true,
    },
    {
      title: "UAA 4 - Défendre oralement une opinion et négocier",
    },
    {
      title: "UAA 5 - S'inscrire dans une œuvre culturelle",
    },
    {
      title: "UAA 6 - Relater et partager des expériences culturelles",
    },
  ];

  const exercicesList: ScrollableSectionProps["list"] = [
    {
      title: "UAA 0 - Justifier, expliciter",
    },
    {
      title: "UAA 1 - Rechercher l'information",
    },
    {
      title: "UAA 2 - Réduire, résumer et synthétiser",
    },
    {
      title: (
        <p style={{ fontWeight: "bold", margin: 0 }}>
          UAA 3 - Le passé composé
        </p>
      ),
      link: "https://www.francaisfacile.com/exercices/exercice-francais-2/exercice-francais-17535.php",
    },
    {
      title: "UAA 4 - Défendre oralement une opinion et négocier",
    },
    {
      title: "UAA 5 - S'inscrire dans une œuvre culturelle",
    },
    {
      title: (
        <p style={{ fontWeight: "bold", margin: 0 }}>
          UAA 6 - Introduction au genre Fantasy
        </p>
      ),
      link: "/fantasyPDF",
      targetSelf: true,
    },
    {
      title: (
        <p style={{ fontWeight: "bold", margin: 0 }}>
          UAA 6 - L’Apprenti Épouvanteur, journal de bord
        </p>
      ),
      link: "/epouvanteurPDF",
      targetSelf: true,
    },
  ];

  const linkList: ScrollableSectionProps["list"] = [
    {
      title: (
        <p style={{ fontWeight: "bold", margin: 0 }}>
          Apprendre le français facilement - Chaine TikTok
        </p>
      ),
      link: "https://www.tiktok.com/@maitressadeline?_t=8cLKhG3RdQR&_r=1",
    },
    {
      title: (
        <p style={{ fontWeight: "bold", margin: 0 }}>
          Vulgarisation du français - Chaine TikTok
        </p>
      ),
      link: " https://www.tiktok.com/@athenasol?_t=8cLKpByJMDL&_r=1",
    },
  ];

  const videoList: ScrollableSectionProps["list"] = [
    {
      title: (
        <p style={{ fontWeight: "bold", margin: 0 }}>
          UAA 5 - C - Art - Ambolage
        </p>
      ),
      link: "https://www.youtube.com/watch?v=6wvrKPPRO8w",
    },
    {
      title: (
        <p style={{ fontWeight: "bold", margin: 0 }}>
          UAA 5 - Recomposition : Le mashup
        </p>
      ),
      link: "https://www.youtube.com/watch?v=Sc_xOfRslDg",
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

export default TroisiemeFrancais;
