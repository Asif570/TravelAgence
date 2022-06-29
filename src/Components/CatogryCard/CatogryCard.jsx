import React from "react";
import "./CatogryCard.css";
function CatogryCard(props) {
  return (
    <div className="Card">
      <img src={props.img} alt="" />
      <div className="text">
        <h4>{props.tittle}</h4>
        <p>{props.dis}</p>
      </div>
    </div>
  );
}

export default CatogryCard;
