import React from "react";
import "./Button.scss";
import { Link } from "react-router-dom";

interface ButtonProps {
  label: string;
  url: string;
}

const Button: React.FC<ButtonProps> = ({ label, url }) => {
  return (
    <Link className="buttonFC" to={url} target="_blank">
      {label}
    </Link>
  );
};

export default Button;
