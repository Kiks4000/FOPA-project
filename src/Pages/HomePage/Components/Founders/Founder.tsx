import React from "react";
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
        <div className="homeFounder__imageContainer__hoverable">
          <div className="homeFounder__imageContainer__hoverable--img img--alicia"></div>
          <div className="homeFounder__imageContainer__hoverable--text">
            <h3>Alicia M.</h3>
            <span>-</span>
            <p>AESI sciences</p>
          </div>
        </div>
        <div className="homeFounder__imageContainer__hoverable">
          <div className="homeFounder__imageContainer__hoverable--img img--angelique"></div>
          <div className="homeFounder__imageContainer__hoverable--text">
            <h3>Angélique T.</h3>
            <span>-</span>
            <p>AESI français - religion</p>
          </div>
        </div>
        <div className="homeFounder__imageContainer__hoverable">
          <div className="homeFounder__imageContainer__hoverable--img img--marie"></div>
          <div className="homeFounder__imageContainer__hoverable--text">
            <h3>Marie D.</h3>
            <span>-</span>
            <p>AESI français - religion</p>
          </div>
        </div>
        <div className="homeFounder__imageContainer__hoverable">
          <div className="homeFounder__imageContainer__hoverable--img img--cath"></div>
          <div className="homeFounder__imageContainer__hoverable--text">
            <h3>Catherine C.</h3>
            <span>-</span>
            <p>AESI français - religion</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Founder;
