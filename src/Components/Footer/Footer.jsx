import React from "react";
import "./Footer.css";
import fb from "../../imgs/facebook.png";
import ins from "../../imgs/instagram.png";
import twi from "../../imgs/twiter.png";
import play from "../../imgs/google-play 1.png";
import apple from "../../imgs/apple (2) 1.png";

function Footer() {
  return (
    <div className="Footer">
      <div className="section">
        <div className="details">
          <div className="logo">
            <h1>Jadoo.</h1>
            <span>
              Book your trip in minute, get full Control for much longer.
            </span>
          </div>
          <div className="links">
            <div className="link">
              <h6>Company</h6>
              <div className="linkItem">
                <span>About</span>
                <span>Careers</span>
                <span>Mobile</span>
              </div>
            </div>
            <div className="link">
              <h6>Contact</h6>
              <div className="linkItem">
                <span>Help/FAQ</span>
                <span>Press</span>
                <span>Affilates</span>
              </div>
            </div>
            <div className="link">
              <h6>More</h6>
              <div className="linkItem">
                <span>Airlinefees</span>
                <span>Airline</span>
                <span>Low fare tips</span>
              </div>
            </div>
          </div>
          <div className="socials">
            <div className="icons">
              <div className="icon">
                <img src={fb} alt="" />
              </div>
              <div className="icon">
                <img src={ins} alt="" />
              </div>
              <div className="icon">
                <img src={twi} alt="" />
              </div>
            </div>
            <span>Discover our app</span>
            <div className="buttons">
              <div className="button">
                <img src={play} alt="" />
                <div>
                  <span>Get It On</span>
                  <span className="sp2">Google Play</span>
                </div>
              </div>
              <div className="button">
                <img src={apple} alt="" />
                <div>
                  <span>Avalible on the</span>
                  <span className="sp2">Apple</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copy">
          <span>All rights reserved@Asif570.io</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
