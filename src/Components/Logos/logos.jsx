import React from "react";
import "./Logos.css";
import logo1 from "../../imgs/image 27.png";
import logo2 from "../../imgs/image 28.png";
import logo3 from "../../imgs/image 30.png";
import logo4 from "../../imgs/image 31.png";
import logo5 from "../../imgs/image 29.png";
function logos() {
  return (
    <div className="Logos">
      <div className="section">
        <div className="logo">
          <img src={logo1} alt="" />
        </div>
        <div className="logo">
          <img src={logo2} alt="" />
        </div>
        <div className="logo">
          <img src={logo3} alt="" />
        </div>
        <div className="logo">
          <img src={logo4} alt="" />
        </div>
        <div className="logo">
          <img src={logo5} alt="" />
        </div>
      </div>
    </div>
  );
}

export default logos;
