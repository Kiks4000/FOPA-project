import React from "react";
import ScrollableSection from "../../../Components/ScrollableSection/ScrollableSection";
import "./PremiereFrancais.scss";

function PremiereFrancais() {
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

  return (
    <>
      <div className="premFraSection">
        <div className="premFraSynthExo">
          <ScrollableSection label="Synthèse" list={syntheseList} />
          <ScrollableSection label="Exercices" list={exercicesList} />
        </div>
      </div>
    </>
  );
}

export default PremiereFrancais;
