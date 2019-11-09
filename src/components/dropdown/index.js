import React from "react";
import PropTypes from "prop-types";
import { HTMLSelect, Label } from "@blueprintjs/core";

function Dropdown({ labelName, options, handleChange, value }) {
  return (
    <Label>
      {labelName}
      <HTMLSelect
        large
        options={options}
        onChange={event => handleChange(event)}
        value={value}
      ></HTMLSelect>
    </Label>
  );
}

Dropdown.propTypes = {
  labelName: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string
    })
  )
};

export default Dropdown;
