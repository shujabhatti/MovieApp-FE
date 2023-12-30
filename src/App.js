import React, { useEffect, Fragment } from 'react';
import Dashboard from './components/Dashboard';
import Customers from "./components/modules/customers/Customers";
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
          </Routes>
        </Router>
      </Fragment>
    </Provider>
  )
}

export default App;
