'use client'
import styles from "./ThisWeekCritic.module.css";
import {useState} from "react";
import CriticBoardContent from "@/app/board/critic/CriticBoardContent";


export default function CriticContentListWrapper(props){

    let tags = props.tags
    const [number,changeNumber] = useState(0);
    const handleClick = (value)=>{
        changeNumber(value)
    }
    function drawTags(tags,number) {
        return tags.map((value, index) => {
            return (<div key={index} onClick={() => handleClick(index)}
                         className={number === index ? styles.clicked : styles.notClicked}>{value.tag.split("_")[1]}</div>)
        });
    }


    return(
        <div>
            <div className={styles.tags}>
                {drawTags(tags,number)}
            </div>
            <div>
                <CriticBoardContent tags = {tags[number]}></CriticBoardContent>
            </div>
        </div>


    )


}


