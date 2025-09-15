import React from 'react';

const Cards = ({image, height= "400px", width, title= "BARISTA PRODUCTS"}) => {
    return (
        <div
          className="relative overflow-hidden rounded-xl 
          flex flex-col justify-end items-start"
          style={{height: height, width: width}}>
            <div
                className="absolute inset-0 bg-cover"
                style={{ backgroundImage: `url(${image})`}}
              ></div>
        <div className="relative p-4 text-black">
              <div>
                <h1 className="text-3xl font-bold font-display">{title}</h1>
              <p className="font-bold">Elevate your coffee experience</p>
              </div>
            </div>
          </div>
            );
        };

export default Cards;