import React from "react";

import "../assets/Navbar.scss";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from "react-router-dom";
const Navbar = () => {
  return (
    // <Router>
    <div className="container">
      <nav>
        <NavLink exact to="/" activeClassName="active">
          <img src="/pittogramma.png" alt="logo" />
        </NavLink>
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
      </nav>
    </div>

    /* <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/corsi" component={Corsi} />
        </Switch> */
    /* </Router> */
  );
};
export default Navbar;
