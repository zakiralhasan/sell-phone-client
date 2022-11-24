import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import banner1 from '../../../images/banner/banner-01.webp'
import banner2 from '../../../images/banner/banner-02.jpg'
import banner3 from '../../../images/banner/banner-03.jpg'
import banner4 from '../../../images/banner/banner-04.png'
import banner5 from '../../../images/banner/banner-05.jpg'
import { Autoplay, Navigation } from "swiper";

const Slider = () => {
    return (
        <div className='mx-2 my-5'>
            <div className='border-4 border-[#2CBBD5] rounded-lg '>
                <Swiper
                    navigation={true}
                    loop={true}
                    autoplay={true}
                    modules={[Navigation, Autoplay]}
                    className=" w-full"
                >
                    <SwiperSlide><img className="w-full max-h-96" src={banner1} alt="" /></SwiperSlide>
                    <SwiperSlide><img className="w-full max-h-96" src={banner2} alt="" /></SwiperSlide>
                    <SwiperSlide><img className="w-full max-h-96" src={banner3} alt="" /></SwiperSlide>
                    <SwiperSlide><img className="w-full max-h-96" src={banner4} alt="" /></SwiperSlide>
                    <SwiperSlide><img className="w-full max-h-96" src={banner5} alt="" /></SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Slider;