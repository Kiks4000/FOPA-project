import React from "react";
import Button from "../../../../Components/Button";

import "./LinksContainer.scss";

function LinksContainer() {
  const digCompUrl: string =
    "https://www.comprendredigcomp.com/assets/files/ComprendreDigComp_21fiches.pdf";
  const digCompEduUrl: string =
    "https://joint-research-centre.ec.europa.eu/system/files/2021-02/1._digcompedu_leaflet_fr.pdf";
  return (
    <div className="linksContainer">
      <div className="linksContainer--title">
        <h2>Liens utiles</h2>
      </div>
      <div className="linksContainer--links">
        <Button label="(1) - DigComp" url={digCompUrl} />
        <Button label="(2) - DigCompEDU" url={digCompEduUrl} />
      </div>
    </div>
  );
}

export default LinksContainer;
