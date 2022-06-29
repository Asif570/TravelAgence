import React from "react";
import "./Hero.css";
import bg from "../../imgs/Hero.jpg";
import Nav from "../Navbar/Nav";
import { IoMdPlayCircle } from "react-icons/io";
import person from "../../imgs/HeroPerson.png";

function Hero() {
  return (
    <div className="Hero" style={{ backgroundImage: `url(${bg})` }}>
      <div className="section">
        <Nav />
        <div className="Herocontent">
          <div className="text">
            <h4>Best Destinations around the world</h4>
            <h2>
              Travel, enjoy and live a new <span>and full life</span>
            </h2>
            <p className="spantext">
              Built Wicket longer admire do barton vanity itself do in it.
              Preferred to sportsmen it engrossed listening. Park gate sell they
              west hard for the.
            </p>
            <div className="buttons">
              <button type="submit">Find Out More</button>
              <span>
                <IoMdPlayCircle />
                <h4>Play Demo</h4>
              </span>
            </div>
          </div>
          <div className="img">
            <img src={person} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
