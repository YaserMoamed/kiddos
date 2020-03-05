import React from "react";
// import Navbar from "./Navbar"
import ToTop from "./ToTop";

const Camp = () => (
  <>
    {/* <Navbar/> */}
    <div className="camp">
      <div className="heading">
        <h1 className="titolo">
          Summer camp <br /> alla scoperta delle tecnologie del futuro{" "}
        </h1>
      </div>

      <div className="what">
        <p>Una settimana alla scoperta del futuro</p>
        <p>Per i ragazzi dai 7 ai 13 anni</p>
        <p>Nelle migliori strutture italiane</p>
      </div>

      <div className="argomenti">
        <h1 className="titolo">
          Ogni giorno del Camp è dedicato a una tecnologia
        </h1>
        <div className="container">
          <div className="grid">
            <div className="grid-item">
              <img src="/svg/3d-printer.svg" alt="3d-printer" />
              <p className="icon-name"> Stampa 3D </p>
            </div>
            <div className="grid-item">
              <img src="/svg/cpu.svg" alt="cpu" />
              <p className="icon-name">Elettronica programmabile</p>
            </div>
            <div className="grid-item">
              <img src="/svg/robotic-hand.svg" alt="robotics" />
              <p className="icon-name">Robotica</p>
            </div>
            <div className="grid-item">
              <img src="/svg/alexa.svg" alt="alexa" />
              <p className="icon-name">Voice technology</p>
            </div>
            <div className="grid-item">
              <img src="/svg/monitor.svg" alt="coding" />
              <p className="icon-name">Coding</p>
            </div>
            <div className="grid-item">
              <img src="/svg/drone.svg" alt="drone" />
              <p className="icon-name">Droni</p>
            </div>
          </div>
        </div>
      </div>
      <div className="day">
        <h1 className="titolo">Una giornata tipo al camp</h1>
        <img src="/svg/day.svg" alt="day" />
      </div>
      <div className="contact">
        <p className="titolo">Vuoi altre informazioni?</p>
        <p className="contattaci">Contattaci!</p>
        <form action="contatti">
          <input type="text" id="name" name="name" placeholder="Name" />
          <input type="email" id="email" name="email" placeholder="Email" />
          <textarea rows="10" cols="25" placeholder="Message"></textarea>
        </form>
        <ToTop />
      </div>
    </div>
  </>
);

export default Camp;
