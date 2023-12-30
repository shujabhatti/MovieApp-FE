import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Color from "../constants/Colors";

const LabelContainer = (props) => {
  return (
    <Fragment>
      <label
        htmlFor={props.name}
        {...props}
        style={{ ...labelStyle, ...props.style }}
      >
        {props.text} :&nbsp; {props.value}
      </label>
    </Fragment>
  );
};

const labelStyle = {
  backgroundColor: Color.input,
  color: Color.dark,
  borderRadius: "5px",
  display: "flex",
  marginTop: "14px",
  padding: "8px",
  fontSize: "14px",
};

LabelContainer.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  text: PropTypes.string.isRequired,
  style: PropTypes.object,
};

LabelContainer.defaultProps = {
  text: "defname",
};

export default LabelContainer;
