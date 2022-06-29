import React from "react";
import "./DestiCards.css";
import ds1 from "../../imgs/Destination1.png";
import ds2 from "../../imgs/Destination2.png";
import ds3 from "../../imgs/Destination3.png";

function DestiCards() {
  const data = [
    {
      img: ds1,
      place: "Rome, Italty",
      price: "$5,42k",
      time: "10 Days Trip",
    },
    {
      img: ds2,
      place: "London, UK",
      price: "$5,12k",
      time: "12 Days Trip",
    },
    {
      img: ds3,
      place: "Full Europe",
      price: "$3,42k",
      time: "20 Days Trip",
    },
  ];
  return (
    <div className="DestiCards">
      {data.map((item) => {
        return (
          <div className="card">
            <img src={item.img} alt="" />
            <div className="info">
              <div className="up">
                <h4>{item.place}</h4>
                <span>{item.price}</span>
              </div>
              <div className="down">
                <span>25</span>
                <span>{item.time}</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default DestiCards;
