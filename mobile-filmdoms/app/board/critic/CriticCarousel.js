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
                <Image alt={"비평이미지"} width={0} height={0} sizes={"100vw"} style={{width:"100%" , height:"auto"}} src={"/carousel.png"}/>
            </SwiperSlide>
            <SwiperSlide>
                <Image  alt={"비평이미지"} width={0} height={0} sizes={"100vw"} style={{width:"100%" , height:"auto"}} src={"/carousel.png"}/>
            </SwiperSlide>
            <SwiperSlide>
                <Image  alt={"비평이미지"} width={0} height={0} sizes={"100vw"} style={{width:"100%" , height:"auto"}} src={"/carousel.png"}/>
            </SwiperSlide>
            <SwiperSlide>
                <Image  alt={"비평이미지"} width={0} height={0} sizes={"100vw"} style={{width:"100%" , height:"auto"}} src={"/carousel.png"}/>
            </SwiperSlide>
        </Swiper>
    );
};
