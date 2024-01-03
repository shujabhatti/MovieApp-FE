import React, { useEffect, Fragment } from "react";
import Dashboard from "./components/Dashboard";
import Customers from "./components/modules/customers/Customers";
import CustomerCreds from "./components/modules/customercreds/CustomersCreds";
import Movies from "./components/modules/movie/Movies";
import Screens from "./components/modules/screen/Screens";
import ScreenTiers from "./components/modules/screentier/ScreenTiers";
import Seats from "./components/modules/seat/Seats";
import SeatTypes from "./components/modules/seattype/SeatTypes";
import Showings from "./components/modules/showing/Showings";
import Staffs from "./components/modules/staff/Staffs";
import StaffCreds from "./components/modules/staffcred/StaffCreds";
import Tickets from "./components/modules/ticket/Tickets";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  useEffect(() => {
    M.AutoInit();
    // eslint-disable-next-line
  }, []);
  return (
    <Provider store={store}>
      <Fragment>
        <Router>
          <Routes>
            <Route exact path={"/"} element={<Dashboard />} />
            <Route exact path={"/customers"} element={<Customers />} />
            <Route exact path={"/customer-creds"} element={<CustomerCreds />} />
            <Route exact path={"/movies"} element={<Movies />} />
            <Route exact path={"/screens"} element={<Screens />} />
            <Route exact path={"/screen-tiers"} element={<ScreenTiers />} />
            <Route exact path={"/seats"} element={<Seats />} />
            <Route exact path={"/seat-types"} element={<SeatTypes />} />
            <Route exact path={"/showings"} element={<Showings />} />
            <Route exact path={"/staff"} element={<Staffs />} />
            <Route exact path={"/staff-creds"} element={<StaffCreds />} />
            <Route exact path={"/tickets"} element={<Tickets />} />
          </Routes>
        </Router>
      </Fragment>
    </Provider>
  )
}

export default App;
