import React from "react";
import PropTypes from "prop-types";

const CheckBoxContainer = (props) => {
  return (
    <p>
      <label>
        <input
          type='checkbox'
          className='filled-in'
          {...props}
          style={{ ...props.style }}
        />
        <span>{props.text}</span>
      </label>
    </p>
  );
};

CheckBoxContainer.propTypes = {
  style: PropTypes.object,
  text: PropTypes.string.isRequired,
};

CheckBoxContainer.defaultProps = {
  text: "Default Text",
};

export default CheckBoxContainer;
