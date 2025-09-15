import React from 'react';
import b2banner from "../assets/b2banner.png";

const LastCard = () => {
    return (
        <div>
          <div
            className=" mx-4 rounded-xl relative h-130 overflow-hidden">
<div className="absolute inset-0 bg-cover bg-center"
style={{ backgroundImage: `url(${b2banner})`,
boxShadow: "inset 0 0 80px rgba(0,0,0,0.6)"
}}>
</div>
<div className="absolute inset-0 bg-black/70"></div>
<div className="relative z-10 flex text-neutral-content justify-center h-full px-10 items-center">
<div className="text-center text-white">
                <h1 className="mb-5 text-5xl font-display font-bold">
                  PROFESSIONAL EQUIPMENT <br />AND B2B SOLUTIONS
                </h1>
                <button className="btn btn-wide">SEND AN INQUIRY</button>
              </div>
</div>

            </div>
          </div>
    );
};

export default LastCard;