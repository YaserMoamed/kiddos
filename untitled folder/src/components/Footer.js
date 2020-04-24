import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="all">
        <div className="footer">
          <NavLink exact to="/">
            <img src="/svg/bianco.svg" alt="logo" />
          </NavLink>
        </div>
        <div className="social">
          <a href="https://www.facebook.com/fabcamp.tech" target="blank">
            <i className="fab fa-facebook fa-2x"></i>
          </a>
          <a href="https://www.instagram.com/fabcamp.tech/" target="blank">
            <i className="fab fa-instagram fa-2x "></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
