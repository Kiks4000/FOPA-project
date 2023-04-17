import React from "react";
import bannerHistoire from "../../../../images/bannerHistoire.jpg";
import bannerFrancais from "../../../../images/bannerFrancais.jpg";
import bannerSciences from "../../../../images/bannerSciences.jpg";
import "./Gallery.scss";

function Gallery() {
  return (
    <section className="homeGallery">
      <h2>
        Échanger, partager, trouver toutes les ressources utiles à ta scolarité,
        ici c'est possible !
      </h2>
      <div className="homeGallery__container">
        <img className="image1" src={bannerHistoire} alt="" />
        <img className="image2" src={bannerFrancais} alt="" />
        <img className="image3" src={bannerSciences} alt="" />
      </div>
    </section>
  );
}

export default Gallery;
