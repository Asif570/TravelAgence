import React from "react";
import "./NewsLetter.css";
import bg from "../../imgs/NewsLetterBg.png";
import send from "../../imgs/Group 77.png";
import Group5 from "../../imgs/Group 5.png";

function NewsLetter() {
  return (
    <div className="NewsLetter">
      <div className="section">
        <div className="news" style={{ backgroundImage: `url(${bg})` }}>
          <div className="text">
            <span>
              Subscribe to get information, latest news and other interesting
              offers about Cobham
            </span>
          </div>
          <div className="input">
            <input type="email" name="" id="" placeholder="Your Email Here" />
            <button type="submit">Subscribe</button>
          </div>
          <div className="send">
            <img src={send} alt="" />
          </div>
        </div>
        <div className="Group5">
          <img src={Group5} alt="" />
        </div>
      </div>
    </div>
  );
}

export default NewsLetter;
