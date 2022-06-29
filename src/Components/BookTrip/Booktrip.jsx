import React from "react";
import "./BookTrip.css";
import icon1 from "../../imgs/icon1.png";
import icon2 from "../../imgs/icon2.png";
import icon3 from "../../imgs/icon3.png";
import rc from "../../imgs/rc.jpg";
import avata from "../../imgs/avata.png";
import { FaLeaf, FaChartBar, FaBuilding } from "react-icons/fa";
import { IoIosSend, IoIosHeartEmpty } from "react-icons/io";
function Booktrip() {
  return (
    <div className="Booktrip">
      <div className="section">
        <div>
          <div className="text">
            <span>Easy and Fast</span>
            <h2>Book Your Next Trip In 3 Easy Steps</h2>
            <div className="valus">
              <div className="value">
                <div className="icon">
                  <img src={icon1} alt="" />
                </div>
                <div className="info">
                  <h2>Choose Destination</h2>
                  <span>Lorem ipsum dolor sit amet, consectetur </span>
                </div>
              </div>
              <div className="value">
                <div className="icon">
                  <img src={icon2} alt="" />
                </div>
                <div className="info">
                  <h2>Choose Destination</h2>
                  <span>Lorem ipsum dolor sit amet, consectetur </span>
                </div>
              </div>
              <div className="value">
                <div className="icon">
                  <img src={icon3} alt="" />
                </div>
                <div className="info">
                  <h2>Choose Destination</h2>
                  <span>Lorem ipsum dolor sit amet, consectetur </span>
                </div>
              </div>
            </div>
          </div>
          <div className="cards">
            <div className="card">
              <img src={rc} alt="" />
              <div className="tittle">
                <h2>Trip To Greece</h2>
              </div>

              <div className="detail">
                <span>10-20</span>
                <span>by Robbin joseph</span>
                <div className="avat">
                  <img src={avata} alt="" />
                </div>
              </div>
              <div className="icons">
                <div className="icon">
                  <FaLeaf />
                </div>
                <div className="icon">
                  <FaChartBar />
                </div>
                <div className="icon">
                  <IoIosSend />
                </div>
              </div>
              <div className="infobottom">
                <div>
                  <FaBuilding />
                  <span>26 People</span>
                </div>
                <IoIosHeartEmpty />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Booktrip;
