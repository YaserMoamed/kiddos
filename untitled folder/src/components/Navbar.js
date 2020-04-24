import React from "react";

import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from "react-router-dom";
const Navbar = () => {
  return (
    // <Router>
    <div className="mucca">
      <nav>
        <div className="logo">
          <NavLink exact to="/" activeClassName="active">
            <img src="/pittogramma.png" alt="logo" />
          </NavLink>
        </div>
        <div className="lista">
          <ul>
            <li>
              <NavLink to="/corsi" activeClassName="active">
                CORSI
              </NavLink>
            </li>
            <li>
              <NavLink to="/camp" activeClassName="active">
                CAMP
              </NavLink>
            </li>
            <li>
              <NavLink to="/aziende" activeClassName="active">
                PER LE AZIENDE
              </NavLink>
            </li>
            <li>
              <NavLink to="/chi-siamo" activeClassName="active">
                CHI SIAMO
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
