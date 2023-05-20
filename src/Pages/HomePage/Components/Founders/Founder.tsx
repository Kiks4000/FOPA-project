import React from "react";
import Alicia from "../../../../images/pp-Alicia.jpg";
import Angelique from "../../../../images/pp-Angelique.jpg";
import Marie from "../../../../images/pp-Marie.png";
import Cath from "../../../../images/pp-Cath.jpg";
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
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div className="homeFounder__imageContainer__hoverable">
            <div className="homeFounder__imageContainer__hoverable--img">
              <img src={Alicia} alt="Alicia" />
            </div>
            <div className="homeFounder__imageContainer__hoverable--text">
              <h3>Alicia M.</h3>
              <span>-</span>
              <p>AESI sciences</p>
            </div>
          </div>
          <span className="fonction">Conceptrice</span>
          <span className="fonction">Co-Developpeuse</span>
          <span className="fonction">
            Gestionnaire des ressources scientifiques
          </span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div className="homeFounder__imageContainer__hoverable">
            <div className="homeFounder__imageContainer__hoverable--img">
              <img src={Angelique} alt="Angelique" />
            </div>
            <div className="homeFounder__imageContainer__hoverable--text">
              <h3>Angélique T.</h3>
              <span>-</span>
              <p>AESI français - religion</p>
            </div>
          </div>
          <span className="fonction">Conceptrice</span>
          <span className="fonction">Gestionnaire des ressources Français</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div className="homeFounder__imageContainer__hoverable">
            <div className="homeFounder__imageContainer__hoverable--img">
              <img src={Marie} alt="Marie" />
            </div>
            <div className="homeFounder__imageContainer__hoverable--text">
              <h3>Marie D.</h3>
              <span>-</span>
              <p>AESI français - religion</p>
            </div>
          </div>
          <span className="fonction">Conceptrice</span>
          <span className="fonction">Gestionnaire des ressources Français</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div className="homeFounder__imageContainer__hoverable">
            <div className="homeFounder__imageContainer__hoverable--img">
              <img src={Cath} alt="Cath" />
            </div>
            <div className="homeFounder__imageContainer__hoverable--text">
              <h3>Catherine C.</h3>
              <span>-</span>
              <p>AESI français - religion</p>
            </div>
          </div>
          <span className="fonction">Conceptrice</span>
          <span className="fonction">
            Gestionnaire des ressources Français Religion
          </span>
        </div>
      </div>
    </section>
  );
}

export default Founder;
