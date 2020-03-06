import React from "react";
import '../assets/Home.scss'
const Home = () => (
  <div className="Home">
  <div className="jumbotron bg-white">
  <h1 className="display-4 text-center">Kiddos</h1>
</div>
{/* scrool down */}
<section id="pagescroll" class="scroll">
  <a href="#section2"><span></span>Scroll</a>
</section>
 <div className="container" id="section2">
  <div className="row">
    <div className="column">
    <img src="https://i.imgur.com/jESF2.jpg" alt="Mountains" style={{width:"300px" , height: "300px" }} />
      </div>
      <div className="column">
      <img src="https://i.imgur.com/jESF2.jpg" alt="Mountains" style={{width:"300px" , height: "300px" }} />
      </div>
        <div className="column">
        <img src="https://i.imgur.com/jESF2.jpg" alt="Mountains" style={{width:"300px" , height: "300px" }} />
        </div>
  </div>
     </div>
     </div>
);

export default Home;
