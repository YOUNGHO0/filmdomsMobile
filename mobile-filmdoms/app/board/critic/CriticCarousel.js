'use client'
import React from 'react';
// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './CriticCarousel.css'
// import required modules
import {Navigation} from 'swiper/modules';
import Image from "next/image";

export default function CriticCarousel() {

    return (
        <Swiper
            spaceBetween={0}
            centeredSlides={true}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper2"
        >
            <SwiperSlide>
                <Image sizes={"100vw"} width={0} height={0} src={"/carousel.png"}/>
            </SwiperSlide>
            <SwiperSlide>
                <Image width={375} height={404} src={"/carousel.png"}/>
            </SwiperSlide>
            <SwiperSlide>
                <Image width={375} height={404} src={"/carousel.png"}/>
            </SwiperSlide>
            <SwiperSlide>
                <Image width={375} height={404} src={"/carousel.png"}/>
            </SwiperSlide>
        </Swiper>
    );
};
