import React from "react";

import NavBar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer";
import Button from "../../Components/Button/Button";
import Input from "../../Components/Input/Input";

import "./InscriptionPage.scss";
import Select from "../../Components/Select/Select";

function InscriptionPage() {
  const homeUrl: string = "/";

  const options = [
    { value: "1", label: "Enseignant" },
    { value: "2", label: "Élève" },
  ];

  const profOptions = [
    { value: "1", label: "Sciences" },
    { value: "2", label: "Maths" },
    { value: "3", label: "Histoire" },
    { value: "4", label: "Français" },
    { value: "5", label: "Langues" },
  ];

  const eleveOptions = [
    { value: "1", label: "1ère année" },
    { value: "2", label: "2ème année" },
    { value: "3", label: "3ème année" },
    { value: "4", label: "4ème année" },
  ];

  const [isProf, setIsProf] = React.useState(false);
  const [isEleve, setIsEleve] = React.useState(false);

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === "1") {
      setIsProf(true);
      setIsEleve(false);
    } else if (e.target.value === "2") {
      setIsProf(false);
      setIsEleve(true);
    }
  };

  return (
    <>
      <NavBar />
      <div className="inscriptionSection">
        <div className="inscriptionContainer">
          <h1 className="inscriptionTitle">Inscription</h1>
          <div className="incriptionFormContainer">
            <div className="inscriptionFormLeft">
              <Input label="Nom" placeholder="Nom" type="text" />
              <Input label="Prénom" placeholder="Prénom" type="text" />
              <Input label="Email" placeholder="Email" type="email" />
            </div>
            <div className="inscriptionFormRight">
              <Input
                label="Mot de passe"
                placeholder="Mot de passe"
                type="password"
              />
              <Select
                options={options}
                label="Vous êtes ?"
                placeholder="Enseignant ou Élève"
                onChangeHandle={handleSelectChange}
              />
              {isProf && (
                <Select
                  options={profOptions}
                  label="Matière"
                  placeholder="Matière"
                />
              )}
              {isEleve && (
                <Select
                  options={eleveOptions}
                  label="Année"
                  placeholder="Année"
                />
              )}
            </div>
          </div>
          <Button label="s'inscrire" url={homeUrl} targetBlank={false} />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default InscriptionPage;
