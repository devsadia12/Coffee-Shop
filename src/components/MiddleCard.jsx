import React from 'react';
import coffeebanner from "../assets/coffeebanner.jpg";

const MiddleCard = () => {
    return (
        <div>
  <div
    className="relative min-h-screen bg-cover bg-center flex items-center"
    style={{ backgroundImage: `url(${coffeebanner})`}}>
        <div className="absolute inset-0 bg-gradient-to-r from-white/100 to-60%"></div>
    <div className="relative z-10 w-1/2 pl-10 text-left text-black">
      <h2 className="text-md tracking-widest text-red-500">
        ABOUT CAFFEIN LAB
      </h2>
        <h1 className="mb-6 text-6xl leading-snug font-display">
          Taking In Mind Every Step Of The <span className='text-red-600'>Coffee Journey</span>
        </h1>
        <p className="mb-12 text-sm font-semibold uppercase tracking-widest max-w-lg">
          Caffein Lab is a speciality coffee company based in 
          Saudi Arabia that is passionate about providing
          exceptional and ethical coffee experiences.
        </p>
        <button className="px-6 font-display py-3 rounded-lg bg-amber-600 hover:bg-amber-700 transition">Learn More</button>
      </div>
    </div>
  </div>
    );
};

export default MiddleCard;