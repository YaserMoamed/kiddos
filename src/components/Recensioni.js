import React from "react";
import { Carousel } from 'react-bootstrap';

const Recensioni = () => (
  <div className="container">
    <div className="Recensione">

      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="Kano.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="Kano2.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="Kano3.jpg"
            alt="First slide"
          />
        </Carousel.Item>
      </Carousel>


      <div className="testo">
        <h2>Kano: Harry Potter Wand</h2>
        <p>We've tried out the KANO Harry Potter Wand kit, a new kids coding gadget and app which has been released in time for Christmas 2018. I love Harry Potter myself so this product really appeals. At Tech Age Kids we always try and put a purpose behind coding to make it more engaging and this product does just that.
I tried the kit out with an 11-year-old Harry Potter fan who loves technology.The kit comes in a sizeable box with an outer slipcover with all the practical information and a very nice storage box that the wand can be kept in.
The wand is covered with gauze material which makes it feel like a premium product. The nice box makes the kit an impressive gift though it does mean it takes some space to store.
</p>
      </div>


    </div>

  </div>
);

export default Recensioni;