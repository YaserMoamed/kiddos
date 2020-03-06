import React from "react";
// import Home from "./components/Home/Home";
import Camp from "./components/Camp";
import Aziende from "./components/Aziende";
import Footer from "./components/Footer";
import Article from "./components/Article";
import Recensione from "./components/Recensione";
import "./components/assets/styles.scss";
import { Switch, Route } from "react-router-dom";

// import { Switch, Route } from "react-router-dom";

const App = () => (
  <div className="app">
    <Switch>
      <Route exact path="/" />
      <Route path="/camp" component={Camp} />
      <Route path="/aziende" component={Aziende} />
      <Route path="/article" component={Article} />
      <Route path="/recensione" component={Recensione} />
    </Switch>
    <Footer />
  </div>
);

export default App;
