import React from "react";
import { useState } from "react";
import "./Slider.css";
import { SliderData } from "./SliderData";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";

function Slider() {
  const [current, setCurrent] = useState(0);
  const lenth = SliderData.length;
  const leftArrow = () => {
    setCurrent(current === lenth - 1 ? 0 : current + 1);
    console.log(current);
  };
  const rightArrow = () => {
    setCurrent(current === 0 ? lenth - 1 : current - 1);
    console.log(current);
  };

  return (
    <section className="Slider section">
      <div className="left">
        <span>Testimonials</span>
        <h2>What People Say About Us.</h2>
      </div>
      <div className="right">
        <div className="slide">
          {SliderData.map((Slide, index) => {
            return (
              <div
                key={index}
                className={index === current ? "active div" : "div"}
              >
                {index === current && (
                  <>
                    <img src={Slide.img} alt="Travel Image" />
                    <p className="dis">{Slide.dis}</p>
                    <h6 className="tittle">{Slide.tittle}</h6>
                    <p className="location ">{Slide.location}</p>
                  </>
                )}
              </div>
            );
          })}
        </div>
        <div className="icon">
          <BsFillArrowLeftCircleFill
            className="left-arrow"
            onClick={leftArrow}
          />
          <BsFillArrowRightCircleFill
            className="right-arrow"
            onClick={rightArrow}
          />
        </div>
      </div>
    </section>
  );
}

export default Slider;
