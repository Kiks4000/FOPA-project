import React from "react";
import "./Button.scss";
import { Link } from "react-router-dom";

interface ButtonProps {
  label: string;
  url: string;
  targetBlank?: boolean;
}

const Button: React.FC<ButtonProps> = ({ label, url, targetBlank }) => {
  return (
    <Link className="buttonFC" to={url} target={targetBlank ? "_blank" : ""}>
      {label}
    </Link>
  );
};

export default Button;
