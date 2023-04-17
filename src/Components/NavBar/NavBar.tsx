import React from "react";
import "./NavBar.scss";
import { Link } from "react-router-dom";
import { useState } from "react";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showPremiere, setShowPremiere] = useState(false);
  const [showDeuxieme, setShowDeuxieme] = useState(false);
  const [showTroisieme, setShowTroisieme] = useState(false);
  const [showQuatrieme, setShowQuatrieme] = useState(false);

  const handlePremiereClick = (): void => {
    setShowPremiere(!showPremiere);
  };

  const handleDeuxiemeClick = (): void => {
    setShowDeuxieme(!showDeuxieme);
  };

  const handleTroisiemeClick = (): void => {
    setShowTroisieme(!showTroisieme);
  };

  const handleQuatriemeClick = (): void => {
    setShowQuatrieme(!showQuatrieme);
  };

  const handleShowMenu = (): void => {
    setShowMenu(!showMenu);

    if (showPremiere) {
      setShowPremiere(false);
    }
    if (showDeuxieme) {
      setShowDeuxieme(false);
    }
    if (showTroisieme) {
      setShowTroisieme(false);
    }
    if (showQuatrieme) {
      setShowQuatrieme(false);
    }
  };

  const handleCloseMenu = (): void => {
    setShowMenu(false);
    setShowPremiere(false);
    setShowDeuxieme(false);
    setShowTroisieme(false);
    setShowQuatrieme(false);
  };

  const isNavOpen: string = showMenu ? "nav-open" : "nav-close";
  const isMenuOpen: string = showMenu ? "menu-open" : "menu-close";
  const isUnderNavOpen: string =
    showPremiere || showDeuxieme || showTroisieme || showQuatrieme
      ? "under-nav-open"
      : "under-nav-close";
  return (
    <>
      <nav className="transparent-nav">
        <a className={isMenuOpen} onClick={handleShowMenu}>
          Menu
        </a>

        <nav className={isNavOpen}>
          <ul>
            <li>
              <Link to="/" onClick={handleShowMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={handleShowMenu}>
                Contact
              </Link>
            </li>
            <li>
              <a href="#" onClick={handlePremiereClick}>
                1ère Année
              </a>
            </li>
            <li>
              <a href="#" onClick={handleDeuxiemeClick}>
                2ème Année
              </a>
            </li>
            <li>
              <a href="#" onClick={handleTroisiemeClick}>
                3ème Année
              </a>
            </li>
            <li>
              <a href="#" onClick={handleQuatriemeClick}>
                4ème Année
              </a>
            </li>
          </ul>
        </nav>
      </nav>

      {showPremiere && (
        <nav className={isUnderNavOpen}>
          <ul>
            <li>
              <Link to="/premiere/francais" onClick={handleCloseMenu}>
                Francais
              </Link>
            </li>
            <li>
              <Link to="/premiere/histoire" onClick={handleCloseMenu}>
                Histoire
              </Link>
            </li>
            <li>
              <Link to="/premiere/maths" onClick={handleCloseMenu}>
                Maths
              </Link>
            </li>
            <li>
              <Link to="/premiere/langues" onClick={handleCloseMenu}>
                Langues
              </Link>
            </li>
            <li>
              <Link to="/premiere/sciences" onClick={handleCloseMenu}>
                Sciences
              </Link>
            </li>
          </ul>
        </nav>
      )}

      {showDeuxieme && (
        <nav className={isUnderNavOpen}>
          <ul>
            <li>
              <Link to="/deuxieme/francais" onClick={handleCloseMenu}>
                Francais
              </Link>
            </li>
            <li>
              <Link to="/deuxieme/histoire" onClick={handleCloseMenu}>
                Histoire
              </Link>
            </li>
            <li>
              <Link to="/deuxieme/maths" onClick={handleCloseMenu}>
                Maths
              </Link>
            </li>
            <li>
              <Link to="/deuxieme/langues" onClick={handleCloseMenu}>
                Langues
              </Link>
            </li>
            <li>
              <Link to="/deuxieme/sciences" onClick={handleCloseMenu}>
                Sciences
              </Link>
            </li>
          </ul>
        </nav>
      )}

      {showTroisieme && (
        <nav className={isUnderNavOpen}>
          <ul>
            <li>
              <Link to="/troisieme/francais" onClick={handleCloseMenu}>
                Francais
              </Link>
            </li>
            <li>
              <Link to="/troisieme/histoire" onClick={handleCloseMenu}>
                Histoire
              </Link>
            </li>
            <li>
              <Link to="/troisieme/maths" onClick={handleCloseMenu}>
                Maths
              </Link>
            </li>
            <li>
              <Link to="/troisieme/langues" onClick={handleCloseMenu}>
                Langues
              </Link>
            </li>
            <li>
              <Link to="/troisieme/sciences" onClick={handleCloseMenu}>
                Sciences
              </Link>
            </li>
          </ul>
        </nav>
      )}

      {showQuatrieme && (
        <nav className={isUnderNavOpen}>
          <ul>
            <li>
              <Link to="/quatrieme/francais" onClick={handleCloseMenu}>
                Francais
              </Link>
            </li>
            <li>
              <Link to="/quatrieme/histoire" onClick={handleCloseMenu}>
                Histoire
              </Link>
            </li>
            <li>
              <Link to="/quatrieme/maths" onClick={handleCloseMenu}>
                Maths
              </Link>
            </li>
            <li>
              <Link to="/quatrieme/langues" onClick={handleCloseMenu}>
                Langues
              </Link>
            </li>
            <li>
              <Link to="/quatrieme/sciences" onClick={handleCloseMenu}>
                Sciences
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
};

export default NavBar;
