import React from "react";
import PropTypes from "prop-types";
import Color from "../constants/Colors";

const InputContainer = (props) => {
  return (
    <div className='input-field' style={{marginBottom: '0px'}}>
      <input
        type={props.type}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        maxLength={props.maxLength}
        {...props}
        style={{ ...inputStyle, ...props.style }}
      />
      <label
        htmlFor={props.name}
        style={labelStyle}
        className={props.value ? "active" : ""}
      >
        {props.text}
      </label>
    </div>
  );
};

const inputStyle = {
  backgroundColor: Color.fore,
  height: "25px",
  paddingLeft: "8px",
  paddingRight: "8px",
  paddingBottom: "8px",
  width: '95%'
};

const labelStyle = {
  paddingLeft: "10px",
  fontSize: "14px",
};

InputContainer.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  style: PropTypes.object,
  labelClass: PropTypes.string,
};

InputContainer.defaultProps = {
  type: "text",
  name: "",
  value: "",
  text: "default text",
};

export default InputContainer;
