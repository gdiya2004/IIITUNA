import React, { useState, useEffect } from "react";
import "./Carousel.css";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

export const Carousel = ({ data }) => {
  const [slide, setSlide] = useState(0);

  // Move to next slide
  const nextSlide = () => {
    setSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1));
  };

  // Move to previous slide
  const prevSlide = () => {
    setSlide((prev) => (prev === 0 ? data.length - 1 : prev - 1));
  };

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel">
      <BsArrowLeftCircleFill className="arrow arrow-left" onClick={prevSlide} />
      
      <div className="slides">
        {data.map((item, idx) => (
          <img
            key={idx}
            src={item.src}
            alt={item.alt}
            className="slide"
            style={{
              transform: `translateX(${-slide * 100}%)`,
            }}
          />
        ))}
      </div>
      
      <BsArrowRightCircleFill className="arrow arrow-right" onClick={nextSlide} />
      
      <div className="indicators">
        {data.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setSlide(idx)}
            className={slide === idx ? "indicator active" : "indicator"}
          ></button>
        ))}
      </div>
    </div>
  );
};
