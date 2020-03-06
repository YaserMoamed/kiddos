import React from "react";

const Aziende = () => (
  <>
    <div className="Aziende">
      <div className="heading">
        <h1 className="burger">PER LE AZIENDE</h1>
      </div>
      <div className="offerta">
        <div className="grid">
          <div className="grid-item">
            <div className="box">
              <p className="titolo-box">
                LABORATORIO <br /> MEZZA GIORNATA
              </p>
            </div>
            <p className="text">
              {" "}
              Attività tecnologica a scelta della durata di 3 ore con personale
              qualificato.
            </p>
          </div>
          <div className="grid-item">
            <div className="box">
              <p className="titolo-box">
                LABORATORIO <br /> INTERO
              </p>
            </div>
            <p className="text">
              {" "}
              Attività tecnologica a scelta della durata di 6 ore con personale
              qualificato.
            </p>
          </div>
          <div className="grid-item">
            <div className="box">
              <p className="titolo-box">CAMP</p>
            </div>
            <p className="text">
              {" "}
              Attività tecnologica della durata di 5 o 6 giorni, , con personale
              qualificato .
            </p>
          </div>
        </div>
      </div>
      <p className="titolo">Vuoi altre informazioni?</p>
      <p className="contattaci">Contattaci!</p>
      <form action="contatti">
        <input type="text" id="name" name="name" placeholder="Name" />
        <input type="email" id="email" name="email" placeholder="Email" />
        <textarea rows="10" cols="25" placeholder="Message"></textarea>
      </form>
    </div>
  </>
);

export default Aziende;
