import React from "react";
import bannerNum from "../../../../images/bannerNum.png";

import "./Banner.scss";

function Banner() {
  const handleImgLink = () => {
    window.open("https://pix.org/fr-be/", "_blank");
  };

  return (
    <div className="bannerNumContainer">
      <img src={bannerNum} alt="bannerNum" onClick={handleImgLink} />
    </div>
  );
}

export default Banner;
