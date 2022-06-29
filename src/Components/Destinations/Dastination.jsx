import React from "react";
import "./Dastination.css";
import sp from "../../imgs/Decore.png";
import DestiCards from "../DestiCards/DestiCards";
function Dastination() {
  return (
    <div className="Destination">
      <div className="section">
        <span>Top Selling</span>
        <h2>Top Destinations</h2>
        <div className="DestCards">
          <DestiCards />
        </div>
        <div className="spring">
          <img src={sp} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Dastination;
