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

    if (showDeuxieme === true) {
      setShowDeuxieme(false);
      setShowPremiere(!showPremiere);
    }

    if (showTroisieme === true) {
      setShowTroisieme(false);
      setShowPremiere(!showPremiere);
    }

    if (showQuatrieme === true) {
      setShowQuatrieme(false);
      setShowPremiere(!showPremiere);
    }
  };

  const handleDeuxiemeClick = (): void => {
    setShowDeuxieme(!showDeuxieme);

    if (showPremiere === true) {
      setShowPremiere(false);
      setShowDeuxieme(!showDeuxieme);
    }

    if (showTroisieme === true) {
      setShowTroisieme(false);
      setShowDeuxieme(!showDeuxieme);
    }

    if (showQuatrieme === true) {
      setShowQuatrieme(false);
      setShowDeuxieme(!showDeuxieme);
    }
  };

  const handleTroisiemeClick = (): void => {
    setShowTroisieme(!showTroisieme);

    if (showPremiere === true) {
      setShowPremiere(false);
      setShowTroisieme(!showTroisieme);
    }

    if (showDeuxieme === true) {
      setShowDeuxieme(false);
      setShowTroisieme(!showTroisieme);
    }

    if (showQuatrieme === true) {
      setShowQuatrieme(false);
      setShowTroisieme(!showTroisieme);
    }
  };

  const handleQuatriemeClick = (): void => {
    setShowQuatrieme(!showQuatrieme);

    if (showPremiere === true) {
      setShowPremiere(false);
      setShowQuatrieme(!showQuatrieme);
    }

    if (showDeuxieme === true) {
      setShowDeuxieme(false);
      setShowQuatrieme(!showQuatrieme);
    }

    if (showTroisieme === true) {
      setShowTroisieme(false);
      setShowQuatrieme(!showQuatrieme);
    }
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
        <p className={isMenuOpen} onClick={handleShowMenu}>
          Menu
        </p>

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
              <p onClick={handlePremiereClick}>1ère Année</p>
            </li>
            <li>
              <p onClick={handleDeuxiemeClick}>2ème Année</p>
            </li>
            <li>
              <p onClick={handleTroisiemeClick}>3ème Année</p>
            </li>
            <li>
              <p onClick={handleQuatriemeClick}>4ème Année</p>
            </li>
          </ul>
        </nav>
      </nav>

      {showPremiere && (
        <nav className={isUnderNavOpen}>
          <ul>
            <li>
              <Link to="/premiere/francais" onClick={handleCloseMenu}>
                1ère Francais
              </Link>
            </li>
            <li>
              <Link to="/premiere/histoire" onClick={handleCloseMenu}>
                1ère Histoire
              </Link>
            </li>
            <li>
              <Link to="/premiere/maths" onClick={handleCloseMenu}>
                1ère Maths
              </Link>
            </li>
            <li>
              <Link to="/premiere/langues" onClick={handleCloseMenu}>
                1ère Langues
              </Link>
            </li>
            <li>
              <Link to="/premiere/sciences" onClick={handleCloseMenu}>
                1ère Sciences
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
                2ème Francais
              </Link>
            </li>
            <li>
              <Link to="/deuxieme/histoire" onClick={handleCloseMenu}>
                2ème Histoire
              </Link>
            </li>
            <li>
              <Link to="/deuxieme/maths" onClick={handleCloseMenu}>
                2ème Maths
              </Link>
            </li>
            <li>
              <Link to="/deuxieme/langues" onClick={handleCloseMenu}>
                2ème Langues
              </Link>
            </li>
            <li>
              <Link to="/deuxieme/sciences" onClick={handleCloseMenu}>
                2ème Sciences
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
                3ème Francais
              </Link>
            </li>
            <li>
              <Link to="/troisieme/histoire" onClick={handleCloseMenu}>
                3ème Histoire
              </Link>
            </li>
            <li>
              <Link to="/troisieme/maths" onClick={handleCloseMenu}>
                3ème Maths
              </Link>
            </li>
            <li>
              <Link to="/troisieme/langues" onClick={handleCloseMenu}>
                3ème Langues
              </Link>
            </li>
            <li>
              <Link to="/troisieme/sciences" onClick={handleCloseMenu}>
                3ème Sciences
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
                4ème Francais
              </Link>
            </li>
            <li>
              <Link to="/quatrieme/histoire" onClick={handleCloseMenu}>
                4ème Histoire
              </Link>
            </li>
            <li>
              <Link to="/quatrieme/maths" onClick={handleCloseMenu}>
                4ème Maths
              </Link>
            </li>
            <li>
              <Link to="/quatrieme/langues" onClick={handleCloseMenu}>
                4ème Langues
              </Link>
            </li>
            <li>
              <Link to="/quatrieme/sciences" onClick={handleCloseMenu}>
                4ème Sciences
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
};

export default NavBar;
