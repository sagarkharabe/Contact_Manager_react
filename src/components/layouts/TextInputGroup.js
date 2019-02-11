import React from "react";
import PropTypes from "prop-types";

export default function TextInputGroup(props) {
  const { label, name, value, placeholder, type, onchange } = props;
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        className="form-control form-control-lg"
        placeholder={placeholder}
        value={value}
        onChange={onchange}
        required
      />
    </div>
  );
}

TextInputGroup.propType = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};
