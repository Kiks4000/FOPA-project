import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HomePage from "./Pages/HomePage";
import ContactPage from "./Pages/ContactPage";
import CompetencesNumPage from "./Pages/CompetencesNumPage/CompetencesNumPage";
import InscriptionPage from "./Pages/InscriptionPage";
import ConnexionPage from "./Pages/ConnexionPage";
import ErrorPage from "./Pages/ErrorPage";

import Premiere from "./Pages/1-Premiere";
import Deuxieme from "./Pages/2-Deuxieme";
import Troisieme from "./Pages/3-Troisieme";
import Quatrieme from "./Pages/4-Quatrieme";

import CelluleAnimalePDF from "./Pages/CelluleAnimalePDF/CelluleAnimalePDF";
import CelluleVegetalePDF from "./Pages/CelluleVegetalePDF/CelluleVegetalePDF";
import DefendrePDFPage from "./Pages/DefendrePDF/DefendrePDF";
import FantasyPDFPage from "./Pages/FantasyPDF/FantasyPDF";
import EpouvanteurPDFPage from "./Pages/EpouvanteurPDF/EpouvanteurPDF";
import QuestionnairePDFPage from "./Pages/QuestionnairePDF/QuestionnairePDF";

import "../src/styles/main.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/competencesNumeriques"
            element={<CompetencesNumPage />}
          />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/inscription" element={<InscriptionPage />} />
          <Route path="/connexion" element={<ConnexionPage />} />

          <Route path="/premiere" element={<Premiere />} />
          <Route path="/premiere/francais" element={<Premiere />} />
          <Route path="/premiere/histoire" element={<Premiere />} />
          <Route path="/premiere/langues" element={<Premiere />} />
          <Route path="/premiere/maths" element={<Premiere />} />
          <Route path="/premiere/sciences" element={<Premiere />} />
          <Route path="/premiere/religion" element={<Premiere />} />

          <Route path="/deuxieme" element={<Deuxieme />} />
          <Route path="/deuxieme/francais" element={<Deuxieme />} />
          <Route path="/deuxieme/histoire" element={<Deuxieme />} />
          <Route path="/deuxieme/langues" element={<Deuxieme />} />
          <Route path="/deuxieme/maths" element={<Deuxieme />} />
          <Route path="/deuxieme/sciences" element={<Deuxieme />} />
          <Route path="/deuxieme/religion" element={<Deuxieme />} />

          <Route path="/troisieme" element={<Troisieme />} />
          <Route path="/troisieme/francais" element={<Troisieme />} />
          <Route path="/troisieme/histoire" element={<Troisieme />} />
          <Route path="/troisieme/langues" element={<Troisieme />} />
          <Route path="/troisieme/maths" element={<Troisieme />} />
          <Route path="/troisieme/sciences" element={<Troisieme />} />
          <Route path="/troisieme/religion" element={<Troisieme />} />

          <Route path="/quatrieme" element={<Quatrieme />} />
          <Route path="/quatrieme/francais" element={<Quatrieme />} />
          <Route path="/quatrieme/histoire" element={<Quatrieme />} />
          <Route path="/quatrieme/langues" element={<Quatrieme />} />
          <Route path="/quatrieme/maths" element={<Quatrieme />} />
          <Route path="/quatrieme/sciences" element={<Quatrieme />} />
          <Route path="/quatrieme/religion" element={<Quatrieme />} />

          <Route path="/celluleAnimalePDF" element={<CelluleAnimalePDF />} />
          <Route path="/celluleVegetalePDF" element={<CelluleVegetalePDF />} />
          <Route path="/defendrePDF" element={<DefendrePDFPage />} />
          <Route path="/fantasyPDF" element={<FantasyPDFPage />} />
          <Route path="/epouvanteurPDF" element={<EpouvanteurPDFPage />} />
          <Route path="/questionnairePDF" element={<QuestionnairePDFPage />} />

          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
