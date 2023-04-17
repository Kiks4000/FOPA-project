import React from "react";
import NavBar from "../../Components/NavBar";
import BannerHome from "./Components/BannerHome";
import Gallery from "./Components/Gallery";
import Founder from "./Components/Founders";
import Footer from "../../Components/Footer";
import "./HomePage.scss";

function HomePage() {
  return (
    <>
      <NavBar />
      <BannerHome />
      <Gallery />
      <Founder />
      <Footer />
    </>
  );
}

export default HomePage;
