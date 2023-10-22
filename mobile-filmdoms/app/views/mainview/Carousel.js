'use client'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Carousel.css'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Carousel() {
    const progressContent = useRef(null);

    return (
        <Swiper
            spaceBetween={0}
            centeredSlides={true}
            autoplay={{
                delay: 5000,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            navigation={false}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
        >
            <SwiperSlide>
                <img className={"carousel"} src={"carousel.png"}/>
            </SwiperSlide>
            <SwiperSlide>
                <img className={"carousel"} src={"carousel.png"}/>
            </SwiperSlide>
            <SwiperSlide>
                <img className={"carousel"} src={"carousel.png"}/>
            </SwiperSlide>
            <SwiperSlide>
                <img className={"carousel"} src={"carousel.png"}/>
            </SwiperSlide>
        </Swiper>
    );
};
