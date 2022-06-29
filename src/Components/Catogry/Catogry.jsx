import React from "react";
import CatogryCards from "../CatogryCards/CatogryCards";
import "./Catogry.css";
import bg from "../../imgs/Services.png";

function Catogry() {
  return (
    <div className="Catogry">
      <div className="section" style={{ backgroundImage: `url(${bg})` }}>
        <span>CATEGORY</span>
        <h2>We Offer Best Services</h2>
        <div className="CatogryCards">
          <CatogryCards />
        </div>
      </div>
    </div>
  );
}

export default Catogry;
