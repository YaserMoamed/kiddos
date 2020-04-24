import React from "react";

const First = () => {
  const scrollBottom = () => {
    const news = document.querySelector(".news");
    news.scrollIntoView();
  };

  return (
    <div className="first">
      <div className="algo">
        <img className="logo" src="logo.png" alt="logo" />
        <p>Il mondo tech alla portata di tutti</p>
      </div>
      <div className="arrow-down">
        <img
          className="arrow"
          src="/svg/down.svg"
          alt="down"
          onClick={scrollBottom}
        />
      </div>
    </div>
  );
};

export default First;
