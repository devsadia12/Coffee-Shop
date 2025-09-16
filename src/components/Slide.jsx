import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import instapost1 from "../assets/instapost1.png";
import instapost2 from "../assets/instapost2.png";
import instapost3 from "../assets/instapost3.png";
import instapost4 from "../assets/instapost4.png";




const Slide = () => {
    return (
        <>
      <Swiper
        slidesPerView={'3.5'}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src={instapost1} className='object-cover rounded-lg' alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={instapost2} className='object-cover rounded-lg' alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={instapost3} className='object-cover rounded-lg' alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={instapost4} className='object-cover rounded-lg' alt="" />
        </SwiperSlide>
      </Swiper>
    </>
    );
};

export default Slide;