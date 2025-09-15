import React from 'react';
import headerimg from "../assets/headerimg.png";

const Hero = () => {
    return (
        <div>
  <div
    className="hero min-h-screen"
    style={{ backgroundImage: `url(${headerimg})` }}
  >
    <div className="text-neutral-content pl-10 flex items-center">
      <div className="w-1/2 text-left">
        <p className="mb-1 text-sm uppercase tracking-widest">
          ELEVATE YOUR COFFEE EXPERIENCE
        </p>
        <h1 className="mb-5 text-6xl font-display font-bold">
          Discover the Finest Coffee Beans and Brewing Essentials
        </h1>
        <button className="btn btn-secondary">Shop Now</button>
      </div>
    </div>
  </div>
</div>
    );
};

export default Hero;