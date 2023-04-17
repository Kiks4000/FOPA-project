import React from "react";
import Alicia from "../../../../images/pp-Alicia.jpg";
import Angelique from "../../../../images/pp-Angelique.jpg";
import Catherine from "../../../../images/pp-Cath.jpg";
import Marie from "../../../../images/pp-Marie.png";
import "./Founder.scss";

function Founder() {
  return (
    <section className="homeFounder">
      <div className="homeFounder__textContainer">
        <h4>QUI SOMMES-NOUS?</h4>
        <h2>Les personnes derrière E-Collab</h2>
        <p>
          Nous sommes quatre enseignantes AESI français/religion et sciences.
          Nous avons décidé de créer ce site à destination des élèves du 1er
          degré secondaire, dans un but de partage des ressources pédagogiques
          pour les aider dans leur apprentissage ainsi que de développer un
          réseau collaboratif.
        </p>
      </div>
      <div className="homeFounder__imageContainer">
        <img src={Alicia} alt="Alicia" />
        <img src={Angelique} alt="Angelique" />
        <img src={Catherine} alt="Catherine" />
        <img src={Marie} alt="Marie" />
      </div>
    </section>
  );
}

export default Founder;
