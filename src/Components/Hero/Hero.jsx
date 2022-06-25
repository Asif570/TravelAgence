import React from "react";
import "./Hero.css";
import bg from "../../imgs/Hero.jpg";
import Nav from "../Navbar/Nav";
function Hero() {
  return (
    <div className="Hero" style={{ backgroundImage: `url(${bg})` }}>
      <div className="section">
        <Nav />
      </div>
    </div>
  );
}

export default Hero;
