import React from "react";
import First from "./First";
import News from "./News";
import Tutorials from "./Tutorials";
import Recensioni from "./Recensioni";

// import Navbar from './Navbar'

const Home = () => (
  <div className="App">
    <First />
    <News />
    <Recensioni />
    <Tutorials />
  </div>
);

export default Home;
