import React from 'react';
import miniLogo from "../assets/miniLogo.png";

const Text = ({header = "OUR VERTICALS"}) => {
    return (
        <div className='text-center'>
                        <h3 className='text-red-600 mt-10 tracking-widest'>{header}</h3>
                        <h1 className='text-black tracking-wider font-display font-extrabold text-6xl '>TAKING IN MIND EVERY STEP OF  <br />
                            THE <span className='text-red-500'>COFFEE JOURNEY</span> 
                        </h1>
                        <div className='mt-8 flex justify-center items-center'>
                            <img src={miniLogo} alt="minilogo" />
                        </div>
                    </div>
    );
};

export default Text;