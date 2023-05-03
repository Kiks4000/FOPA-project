import React from "react";

import Banner from "./Components/Banner/Banner";
import LinksContainer from "./Components/LinksContainer/LinksContainer";
import Schema from "./Components/Schema/Schema";
import NavBar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer";

import "./CompetencesNumPage.scss";

function CompetencesNumPage() {
  return (
    <>
      <NavBar />
      <Schema />
      <LinksContainer />
      <Banner />
      <Footer />
    </>
  );
}

export default CompetencesNumPage;
