'use client'
import {useEffect, useState} from "react";
import BoardContent from "@/app/board/[boardName]/BoardContent";
import styles from './boardComponent.module.css'
export default function BoardComponent(props){

    let tags = props.tags
    let boardName = props.boardName
    let [number,changeNumber] = useState(0)
    const handleClick = (value)=>{
        changeNumber(value)
    }
    let tagsData = undefined
    console.log(tags)

    return(
        <div>
        <div className={styles["boardPage-tags-wrapper"]}>
            {
                drawTags()
            }
        </div>
            {props.children}
            <BoardContent tag = {tags[number]} boardName = {boardName}></BoardContent>
        </div>


    )

    function drawTags() {
        return tags.map((value, index) => {
            return (<div key={index} onClick={() => handleClick(index)}
                         className={number === index ? styles.clicked : styles.notClicked}>{value.tag}</div>)
        });
    }
}