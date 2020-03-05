import React from "react";
import Corsi from './components/contents/Corsi'
import Camp from './components/contents/Camp'
import Blog from './components/contents/Blog'
import Login from './components/log/login'
import Home from './components/Home/Home'
import Navbar from './components/Home/Navbar'

import {
  BrowserRouter as Router , Route, Link, Switch} from "react-router-dom";const App = () => (
  <div className="app">
     <Navbar />
    <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/corsi" component={Corsi} />
    <Route path="/news" component={Blog} />
    <Route path="/camp" component={Camp} />
    <Route path="/login" component={Login}/>
        </Switch>
  </div>
);

export default App;