import React from "react";
import Corsi from './components/Corsi'
import Recensioni from './components/Recensioni'
import Home from './components/Home'
import Chisiamo from './components/Chisiamo'
import "./components/Assets/styles.scss"

import {
  BrowserRouter as Router, Route, Link, Switch
} from "react-router-dom"; const App = () => (
  <div className="app">
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/corsi" component={Corsi} />
      <Route path="/chisiamo" component={Chisiamo} />
      <Route path="/recensioni" component={Recensioni} />
    </Switch>
  </div>
);

export default App;