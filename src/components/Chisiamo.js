import React from "react";


const Chisiamo = () => (
  <div className="cont">
    <h1 className="Titolo">Chi Siamo</h1>

    <div className="Chisiamo">
      <div>
        <img className="profile" src="francesco.jpg" alt="Francesco" />
        <div className="Didascalia">
          <p><strong>Francesco Luciani</strong></p>
          <p>Co-Founder</p>
        </div>
      </div>

      <div>
        <img className="profile" src="Vittorio.jpg" alt="Francesco" />
        <div className="Didascalia">
          <p><strong>Vittorio Molaschi</strong></p>
          <p>Co-Founder</p>
        </div>
      </div>

      <div>
        <img className="profile" src="Gianmarco.jpg" alt="Francesco" />
        <div className="Didascalia">
          <p><strong>Gianmarco Bin</strong></p>
          <p>Co-Founder</p>
        </div>
      </div>

    </div>
  </div>
);

export default Chisiamo;