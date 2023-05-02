import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import "bootstrap/dist/css/bootstrap.min.css";
import "./NavBar.scss";

function NavBar() {
  return (
    <Navbar className="navBar" collapseOnSelect expand="lg" bg="light">
      <Navbar.Brand href="/" className="navBar--name">
        E-Collab
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav>
          <Nav.Link className="navBar-link" href="/competences-numerique">
            Competences Numériques
          </Nav.Link>
          <Nav.Link className="navBar-link" href="/contact">
            Contact
          </Nav.Link>
          <NavDropdown
            title="Classes"
            className="navBar-link"
            id="collasible-nav-dropdown"
          >
            <NavDropdown
              title="1ère"
              className="navBar-link"
              id="collasible-nav-dropdown"
              drop="end"
            >
              <NavDropdown.Item
                className="navBar-link"
                href="/premiere/francais"
              >
                1ère Français
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item className="navBar-link" href="/premiere/maths">
                1ère Maths
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                className="navBar-link"
                href="/premiere/histoire"
              >
                1ère Histoire
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                className="navBar-link"
                href="/premiere/sciences"
              >
                1ère Sciences
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                className="navBar-link"
                href="/premiere/langues"
              >
                1ère Langues
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown.Divider />
            <NavDropdown
              title="2ème"
              className="navBar-link"
              id="collasible-nav-dropdown"
              drop="end"
            >
              <NavDropdown.Item
                className="navBar-link"
                href="/deuxieme/francais"
              >
                2ème Français
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item className="navBar-link" href="/deuxieme/maths">
                2ème Maths
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                className="navBar-link"
                href="/deuxieme/histoire"
              >
                2ème Histoire
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                className="navBar-link"
                href="/deuxieme/sciences"
              >
                2ème Sciences
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                className="navBar-link"
                href="/deuxieme/langues"
              >
                2ème Langues
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title="3ème"
              className="navBar-link"
              id="collasible-nav-dropdown"
              drop="end"
            >
              <NavDropdown.Item
                className="navBar-link"
                href="/troisieme/francais"
              >
                3ème Français
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item className="navBar-link" href="/troisieme/maths">
                3ème Maths
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                className="navBar-link"
                href="/troisieme/histoire"
              >
                3ème Histoire
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                className="navBar-link"
                href="/troisieme/sciences"
              >
                3ème Sciences
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                className="navBar-link"
                href="/troisieme/langues"
              >
                3ème Langues
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown.Divider />
            <NavDropdown
              title="4ème"
              className="navBar-link"
              id="collasible-nav-dropdown"
              drop="end"
            >
              <NavDropdown.Item
                className="navBar-link"
                href="/quatrieme/français"
              >
                4ème Français
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item className="navBar-link" href="/quatrieme/maths">
                4ème Maths
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                className="navBar-link"
                href="/quatrieme/histoire"
              >
                4ème Histoire
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                className="navBar-link"
                href="/quatrieme/sciences"
              >
                4ème Sciences
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                className="navBar-link"
                href="/quatrieme/langues"
              >
                4ème Langues
              </NavDropdown.Item>
            </NavDropdown>
          </NavDropdown>
        </Nav>
        <Nav className="ms-auto">
          <Nav.Link className="navBar-link" href="/inscription">
            Inscription
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
