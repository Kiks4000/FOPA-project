import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__linkContainer">
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
}

export default Footer;
