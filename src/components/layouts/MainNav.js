import React, { Fragment, useEffect } from "react";
import SideBarItem from "./SideBarItem";
import Color from "../constants/Colors";
import ImageContainer from "./ImageContainer";
import PropTypes from "prop-types";

const selectedItem = (selItem) => {
  var elem = document.getElementById(selItem);
  if (elem) {
    elem.style.backgroundColor = Color.primaryHex;
    elem.childNodes[0].style.color = Color.fore;
    elem.childNodes[0].childNodes[0].style.color = Color.fore;
  }
};

const MainNav = (props) => {
  useEffect(() => {
    selectedItem(props.selItem);
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <nav style={{ backgroundColor: Color.primaryHex }}>
        <div className='nav-wrapper'>
          <div className='container'>
            <h6
              href='#!'
              className='brand-logo center'
              style={{ width: "100%" }}
            >
              <span
                className='hide-on-med-and-down'
                style={{ paddingLeft: "20%" }}
              >
                Movie Management System
              </span>
              <span className='show-on-medium hide-on-small-only hide-on-large-only'>
                Movie App
              </span>
              <span className='show-on-small hide-on-med-and-up'>CRM</span>
            </h6>
            <a href='#!' className='sidenav-trigger' data-target='side-nav'>
              <i className='material-icons'>menu</i>
            </a>
          </div>
        </div>
      </nav>
      <ul className='sidenav sidenav-fixed' id='side-nav'>
        <li>
          <ImageContainer
            className='responsive-img'
            src={require("../../images/movielogo.png")}
            alt='Logo'
          />
        </li>
        <SideBarItem
          id={"cus-id"}
          text={"Customers"}
          icon={"person"}
          link={"/customers"}
        />
        <SideBarItem
          id={"cus-cred-id"}
          text={"Customer Creds"}
          icon={"web"}
          link={"/customer-creds"}
        />
        <SideBarItem
          id={"mov-id"}
          text={"Movies"}
          icon={"movie"}
          link={"/movies"}
        />
        <SideBarItem
          id={"scr-id"}
          text={"Screens"}
          icon={"movie_filter"}
          link={"/screens"}
        />
        <SideBarItem
          id={"scr-tier-id"}
          text={"Screen Tiers"}
          icon={"fullscreen"}
          link={"/screen-tiers"}
        />
        <SideBarItem
          id={"seat-id"}
          text={"Seats"}
          icon={"airline_seat_recline_extra"}
          link={"/seats"}
        />
        <SideBarItem
          id={"seat-type-id"}
          text={"Seat Types"}
          icon={"map"}
          link={"/seat-types"}
        />
        <SideBarItem
          id={"show-id"}
          text={"Showings"}
          icon={"personal_video"}
          link={"/showings"}
        />
        <SideBarItem
          id={"staff-id"}
          text={"Staffs"}
          icon={"group"}
          link={"/staff"}
        />
        <SideBarItem
          id={"staff-cred-id"}
          text={"Staff Creds"}
          icon={"verified_user"}
          link={"/staff-creds"}
        />
        <SideBarItem
          id={"ticket-id"}
          text={"Tickets"}
          icon={"note"}
          link={"/tickets"}
        />
        <div className='divider'></div>
      </ul>
    </Fragment>
  );
};

MainNav.defaultProps = {
  selItem: "home-id",
};

MainNav.propTypes = {
  selItem: PropTypes.string,
};

export default MainNav;
