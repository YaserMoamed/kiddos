import React from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Camp from "./components/Camp";
import Aziende from "./components/Aziende";
import Footer from "./components/Footer";
import Article from "./components/Article";
import Recensione from "./components/Recensione";
import Corsi from "./components/Corsi";
import Chisiamo from "./components/Chisiamo";
import "./components/assets/styles.scss";
import { Switch, Route } from "react-router-dom";

const App = () => (
  <div className="app">
    <Navbar />

    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/camp" component={Camp} />
      <Route path="/corsi" component={Corsi} />
      <Route path="/chi-siamo" component={Chisiamo} />
      <Route path="/aziende" component={Aziende} />
      <Route path="/article" component={Article} />
      <Route path="/recensione" component={Recensione} />
    </Switch>
    <Footer />
  </div>
);

export default App;
