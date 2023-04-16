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
  };

  const isNavOpen: string = showMenu ? "nav-open" : "nav-close";
  const isMenuOpen: string = showMenu ? "menu-open" : "menu-close";
  return (
    <>
      <nav className="transparent-nav">
        <a className={isMenuOpen} onClick={handleShowMenu}>
          Menu
        </a>
        <h1>e-collab</h1>
      </nav>
      {/* {showMenu && ( */}
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
              Première
            </a>
            {showPremiere && (
              <ul>
                <li>
                  <Link to="/premiere/francais" onClick={handleShowMenu}>
                    Francais
                  </Link>
                </li>
                <li>
                  <Link to="/premiere/histoire" onClick={handleShowMenu}>
                    Histoire
                  </Link>
                </li>
                <li>
                  <Link to="/premiere/maths" onClick={handleShowMenu}>
                    Maths
                  </Link>
                </li>
                <li>
                  <Link to="/premiere/langues" onClick={handleShowMenu}>
                    Langues
                  </Link>
                </li>
                <li>
                  <Link to="/premiere/sciences" onClick={handleShowMenu}>
                    Sciences
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <a href="#" onClick={handleDeuxiemeClick}>
              Deuxieme
            </a>
            {showDeuxieme && (
              <ul>
                <li>
                  <Link to="/deuxieme/francais" onClick={handleShowMenu}>
                    Francais
                  </Link>
                </li>
                <li>
                  <Link to="/deuxieme/histoire" onClick={handleShowMenu}>
                    Histoire
                  </Link>
                </li>
                <li>
                  <Link to="/deuxieme/maths" onClick={handleShowMenu}>
                    Maths
                  </Link>
                </li>
                <li>
                  <Link to="/deuxieme/langues" onClick={handleShowMenu}>
                    Langues
                  </Link>
                </li>
                <li>
                  <Link to="/deuxieme/sciences" onClick={handleShowMenu}>
                    Sciences
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <a href="#" onClick={handleTroisiemeClick}>
              Troisieme
            </a>
            {showTroisieme && (
              <ul>
                <li>
                  <Link to="/troisieme/francais" onClick={handleShowMenu}>
                    Francais
                  </Link>
                </li>
                <li>
                  <Link to="/troisieme/histoire" onClick={handleShowMenu}>
                    Histoire
                  </Link>
                </li>
                <li>
                  <Link to="/troisieme/maths" onClick={handleShowMenu}>
                    Maths
                  </Link>
                </li>
                <li>
                  <Link to="/troisieme/langues" onClick={handleShowMenu}>
                    Langues
                  </Link>
                </li>
                <li>
                  <Link to="/troisieme/sciences" onClick={handleShowMenu}>
                    Sciences
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <a href="#" onClick={handleQuatriemeClick}>
              Quatrieme
            </a>
            {showQuatrieme && (
              <ul>
                <li>
                  <Link to="/quatrieme/francais" onClick={handleShowMenu}>
                    Francais
                  </Link>
                </li>
                <li>
                  <Link to="/quatrieme/histoire" onClick={handleShowMenu}>
                    Histoire
                  </Link>
                </li>
                <li>
                  <Link to="/quatrieme/maths" onClick={handleShowMenu}>
                    Maths
                  </Link>
                </li>
                <li>
                  <Link to="/quatrieme/langues" onClick={handleShowMenu}>
                    Langues
                  </Link>
                </li>
                <li>
                  <Link to="/quatrieme/sciences" onClick={handleShowMenu}>
                    Sciences
                  </Link>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </nav>
      {/* )} */}
    </>
  );
};

export default NavBar;
