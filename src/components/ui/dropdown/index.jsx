import React from "react";
import PropTypes from "prop-types";

const Dropdown = ({ options, value, onChange, placeholder, className, name }) => (
  <select
    className={className}
    value={value}
    onChange={onChange}
    name={name}
    style={{ height: 45, borderRadius: 4, border: "2px solid yellow" }}
  >
    {placeholder && <option value="">{placeholder}</option>}
    {options.map((opt, idx) => (
      <option key={idx} value={opt.value || opt}>{opt.label || opt}</option>
    ))}
  </select>
);

Dropdown.propTypes = {
  options: PropTypes.array.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
};

export default Dropdown;
