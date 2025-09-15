import React from 'react';
import rightArrow from "../../public/rightArrow.png";

const CoffeeCard = ({image, height = "300px", title = "Coffee Roaster"}) => {
    return (
        <div
  className="relative w-full overflow-hidden rounded-2xl 
  flex flex-col justify-end items-start"
  style={{height: height}}>
    <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})`}}
      ></div>
      <div className="absolute inset- bg-black/30"></div>

  <div className="relative z-10 p-4 text-white flex items-center 
  justify-between w-full">
      <div>
        <h1 className="text-3xl font-bold font-display">{title}</h1>
      <p>Elevate your coffee experience</p>
      </div>
      <img src={rightArrow} 
      alt="arrow"
      className='w-10 h-10 cursor-pointer hover:scale-110 transition' />
    </div>
  </div>
    );
};

export default CoffeeCard;