import styles from './ThisWeekCritic.module.css'
import React from "react";
import CriticCarousel from "@/app/board/critic/CriticCarousel";

export default function ThisWeekCritic (){

    return(
        <div style={{marginTop:"55px"}}>
        <div className={styles.header}>THIS WEEK'S CRITIC</div>
        <CriticCarousel></CriticCarousel>
        </div>
        )

}