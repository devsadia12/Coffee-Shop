import React from 'react';
import instapost1 from "../assets/instapost1.png";
import instapost2 from "../assets/instapost2.png";
import instapost3 from "../assets/instapost3.png";
import instapost4 from "../assets/instapost4.png";

const Insta = () => {
    return (
        <div className='grid grid-cols-4 gap-4 mb-12 mx-10'>
            <div>
                <img src={instapost1} className='object-cover rounded-lg' alt="" />
            </div>
            <div>
                <img src={instapost2} className='object-cover rounded-lg' alt="" />
            </div>
            <div>
                <img src={instapost3} className='object-cover rounded-lg' alt="" />
            </div>
            <div>
                <img src={instapost4} className='object-cover rounded-lg' alt="" />
            </div>
        </div>
    );
};

export default Insta;