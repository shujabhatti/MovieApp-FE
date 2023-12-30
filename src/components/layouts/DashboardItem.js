import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const DashboardItem = (props) => {
  return (
    <Fragment>
      <div className='col l3 m4 s12'>
        <Link to={props.link}>
          <div className='card-panel hoverable center' style={ItemStyle}>
            <h6>
              {props.text}{" "}
                <span>
                  <i className='material-icons tiny'>open_in_new</i>
                </span>
            </h6>
          </div>
        </Link>
      </div>
    </Fragment>
  );
};

const ItemStyle = {
  borderRadius: "5px",
};

DashboardItem.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

DashboardItem.defaultProps = {
  text: "Default Text",
  link: "/",
};

export default DashboardItem;
