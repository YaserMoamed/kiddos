import React from "react";
import { Link } from "react-router-dom";

const News = () => (
  <div className="criceto">
    <div className="news">
      <p className="title"> Ultime news</p>
      <div className="grid">
        <div className="grid-item">
          <Link to="/article">
            <img src="/computer.png" alt="kano" />
          </Link>
        </div>
        <div className="grid-item">
          <img src="/bho.jpg" alt="bho" />
        </div>
        <div className="grid-item">
          <img src="/pc.jpg" alt="pc" />
        </div>
        <div className="grid-item">
          <img src="/phone.jpg" alt="phone" />
        </div>
      </div>
    </div>
  </div>
);

export default News;
