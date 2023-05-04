import React from "react";
import "./Select.scss";

interface SelectProps {
  options: { value: string; label: string }[];
  label: string;
  placeholder: string;
  onChangeHandle?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Select: React.FC<SelectProps> = ({
  options,
  label,
  placeholder,
  onChangeHandle,
}) => {
  return (
    <div className="selectContainer">
      <label className="selectLabel">{label}</label>
      <select className="selectShape" onChange={onChangeHandle}>
        <option value="" disabled selected hidden>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
