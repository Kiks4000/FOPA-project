import React from "react";
import "./BannerHome.scss";

function BannerHome() {
  return (
    <div className="bannerHome">
      <div className="bannerHome__text">
        <h1 className="bannerHome__text--title">e-collab</h1>
        <h2 className="bannerHome__text--description">
          École numérique collaborative
        </h2>
        <p className="bannerHome__text--text">
          DOCUMENTS // SYNTHÈSES // OUTILS NUMÉRIQUES
        </p>
      </div>
    </div>
  );
}

export default BannerHome;
