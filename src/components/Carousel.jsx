import React from 'react';
import slide1 from "../assets/slide1.png";
import slide2 from "../assets/slide2.png";
import slide3 from "../assets/slide3.png";
import slide4 from "../assets/slide4.png";
import slide5 from "../assets/slide5.png";

const Carousel = () => {
    return (
        <div className="carousel h-96 rounded-xl gap-4">
  <div id="slide1" className="carousel-item">
    <img src={slide1} alt="carousel1" />
  </div>

  <div id="slide2" className="carousel-item">
    <img src={slide2} alt="carousel2" />
  </div>

  <div id="slide3" className="carousel-item">
    <img src={slide3} className="rounded-xl" alt="carousel3" />
  </div>

  <div id="slide4" className="carousel-item">
    <img src={slide4} className="rounded-xl" alt="carousel4" />
  </div>

  <div id="slide5" className="carousel-item ">
    <img src={slide5} className="rounded-xl" alt="carousel5" />
  </div>
</div>
    );
};

export default Carousel;