import React from "react";

import NavBar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer";
import Button from "../../Components/Button";

import "./ErrorPage.scss";

function ErrorPage() {
  return (
    <>
      <NavBar />
      <div className="errorPage">
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <Button label="Back in safe place" url="/" targetBlank={false} />
      </div>
      <Footer />
    </>
  );
}

export default ErrorPage;
