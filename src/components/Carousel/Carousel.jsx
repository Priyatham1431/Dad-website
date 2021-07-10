import React, { useState } from "react";
import "./Carousel.css";
import Cartoons from "../../images.js";
import { HiArrowCircleLeft, HiArrowCircleRight } from "react-icons/hi/index";

const Carousal = () => {
  const [current, setCurrent] = useState(0);
  const length = Cartoons.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(Cartoons) || Cartoons.length <= 0) {
    return null;
  }

  return (
    <>
      <div className="carousel">
        <HiArrowCircleLeft className="arrow" onClick={prevSlide} />
        {Cartoons.map((cartoon, index) => {
          const { image } = cartoon;
          return (
            <div
              className={index === current ? "slide active" : "slide"}
              key={index}
            >
              {index === current && (
                <div className="image-container">
                  <img src={image} className="image" alt="Cartoon" />
                </div>
              )}
            </div>
          );
        })}
        <HiArrowCircleRight className="arrow" onClick={nextSlide} />
      </div>
    </>
  );
};

export default Carousal;
