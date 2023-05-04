import React from "react";

import NavBar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer";
import Input from "../../Components/Input/Input";
import Button from "../../Components/Button/Button";

import "./ConnexionPage.scss";
import { Link } from "react-router-dom";

function ConnexionPage() {
  const homeUrl: string = "/";
  return (
    <>
      <NavBar />
      <div className="connexionSection">
        <div className="connexionFormContainer">
          <h1 className="connexionFormTitle">Connexion</h1>
          <Input label="Email" placeholder="Email" type="email" />
          <Input
            label="Mot de passe"
            placeholder="Mot de passe"
            type="password"
          />
          <Button label="Se connecter" url={homeUrl} targetBlank={false} />
          <div className="connexionFormForget">
            <Link className="forgotPswdLink" to={homeUrl}>
              Mot de passe oublié ?
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ConnexionPage;
