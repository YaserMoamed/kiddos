import React from "react";

const ToTop = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="up">
      <img src="/svg/up.svg" alt="up" onClick={scrollToTop} />
    </div>
  );
};

export default ToTop;
