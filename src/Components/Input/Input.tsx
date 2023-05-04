import React from "react";
import "./Input.scss";

interface InputProps {
  label: string;
  placeholder: string;
  type: string;
}

const Input: React.FC<InputProps> = ({ label, placeholder, type }) => {
  return (
    <div className="inputContainer">
      <label className="inputLabel">{label}</label>
      <input className="inputShape" type={type} placeholder={placeholder} />
    </div>
  );
};

export default Input;
