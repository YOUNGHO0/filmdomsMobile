'use client'
import {useState} from "react";
import BoardContent from "@/app/board/[boardName]/BoardContent";
import styles from './boardComponent.module.css'
export default function BoardComponent(props){

    let tags = props.tags
    let boardName = props.boardName
    let [number,changeNumber] = useState(0)
    const handleClick = (value)=>{
        changeNumber(value)
    }

    return(
        <div>
        <div className={styles["boardPage-tags-wrapper"]}>
            <Tags></Tags>
        </div>
            {props.children}
            <BoardContent tag = {tags[number]} boardName = {boardName}></BoardContent>
        </div>


    )

    function Tags() {
        return tags.map((value, index) => {
            return (<div key={index} onClick={() => handleClick(index)}
                         className={number === index ? styles.clicked : styles.notClicked}>{value.tag}</div>)
        });
    }
}