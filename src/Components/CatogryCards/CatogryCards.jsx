import React from "react";
import "./CatogryCards.css";
import sat from "../../imgs/satellite-dish.png";
import plan from "../../imgs/plane.png";
import mic from "../../imgs/Mic.png";
import gear from "../../imgs/gear.png";
import CatogryCard from "../CatogryCard/CatogryCard";

function CatogryCards() {
  const data = [
    {
      tittle: "Calculated Weather ",
      img: sat,
      dis: "Built Wicket longer admire do barton vanity itself do in it.",
    },
    {
      tittle: "Best Flights ",
      img: plan,
      dis: "Engrossed listening. Park gate sell they west hard for the.",
    },
    {
      tittle: "Local Events",
      img: mic,
      dis: "Barton vanity itself do in it. Preferd to men it engrossed listening. ",
    },
    {
      tittle: "Customization",
      img: gear,
      dis: "We deliver outsourced aviation services for  military customers",
    },
  ];
  return (
    <div className="Cards">
      {data.map((item) => {
        return (
          <div className="cd">
            <CatogryCard tittle={item.tittle} img={item.img} dis={item.dis} />
          </div>
        );
      })}
    </div>
  );
}

export default CatogryCards;
