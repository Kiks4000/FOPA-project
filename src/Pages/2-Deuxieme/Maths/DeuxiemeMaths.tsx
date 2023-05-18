import React from "react";
import "../Deuxieme.scss";

import ScrollableSection from "../../../Components/ScrollableSection/ScrollableSection";
import EmbedVideoSection from "../../../Components/EmbedVideoSection/EmbedVideoSection";

function DeuxiemeMaths() {
  const syntheseList = [
    "Synthèse 1",
    "Synthèse 2",
    "Synthèse 3",
    "Synthèse 4",
    "Synthèse 5",
    "Synthèse 6",
    "Synthèse 7",
    "Synthèse 8",
    "Synthèse 9",
    "Synthèse 10",
    "Synthèse 11",
    "Synthèse 12",
    "Synthèse 13",
    "Synthèse 14",
    "Synthèse 15",
    "Synthèse 16",
    "Synthèse 17",
    "Synthèse 18",
  ];

  const exercicesList = [
    "Exercice 1",
    "Exercice 2",
    "Exercice 3",
    "Exercice 4",
    "Exercice 5",
    "Exercice 6",
    "Exercice 7",
    "Exercice 8",
    "Exercice 9",
    "Exercice 10",
    "Exercice 11",
    "Exercice 12",
    "Exercice 13",
    "Exercice 14",
    "Exercice 15",
    "Exercice 16",
    "Exercice 17",
    "Exercice 18",
  ];

  const linkList = [
    "Ext. Link 1",
    "Ext. Link 2",
    "Ext. Link 3",
    "Ext. Link 4",
    "Ext. Link 5",
    "Ext. Link 6",
    "Ext. Link 7",
    "Ext. Link 8",
    "Ext. Link 9",
    "Ext. Link 10",
    "Ext. Link 11",
    "Ext. Link 12",
    "Ext. Link 13",
    "Ext. Link 14",
    "Ext. Link 15",
    "Ext. Link 16",
    "Ext. Link 17",
    "Ext. Link 18",
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
            <ScrollableSection label="Liens Externes" list={linkList} />
            <EmbedVideoSection videoLink="https://www.youtube.com/watch?v=7C2z4GqqS5E" />
          </div>
        </div>
      </div>
    </>
  );
}

export default DeuxiemeMaths;
