import React from "react";
import NavBar from "../../Components/NavBar";
import "./HomePage.scss";

function HomePage() {
  const bannerHome = require("../../images/BannerHome.jpg");
  return (
    <>
      <div className="bannerHome"></div>
      <NavBar />
      <h1>HOME PAGE</h1>
    </>
  );
}

export default HomePage;
