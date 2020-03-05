import React from "react";
// import Home from "./components/Home/Home";
import Camp from "./components/Camp";
import Aziende from "./components/Aziende";
import Footer from "./components/Footer";
import "./components/assets/styles.scss";
import { Switch, Route } from "react-router-dom";

// import { Switch, Route } from "react-router-dom";

const App = () => (
  <div className="app">
    <Switch>
      <Route exact path="/" />
      <Route path="/camp" component={Camp} />
      <Route path="/aziende" component={Aziende} />
    </Switch>
    <Footer />
  </div>
);

export default App;
