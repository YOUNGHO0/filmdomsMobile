import {Button} from "@mui/material";
import Image from "next/image";
import styles from '../BoardDetailComponent.module.css'

export default function  ContentAndLikes(props) {
    let boardData = props.boardData;
    let userLike = props.userLike;
    return <div>
        <div style={{marginTop: "32px", marginBottom: "64px"}}>
            {boardData.content}
        </div>
        <div style={{display: "flex", justifyContent: "center"}}>
           <LikeButton boardData = {boardData} userLike = {userLike}></LikeButton>
        </div>

        <hr style={{marginTop:"32px"}}></hr>
    </div>;
}



function LikeButton(props) {
    let boardData =props.boardData
    let userLike = props.userLike
    return <Button style={{
        borderRadius: "0px",
        border: "2px solid #FF5414",
        width: "64px",
        height: "32px",
        boxSizing: "border-box"
    }}>
        <Image style={{marginRight: "8px"}} src={userLike === true ?"/liked.png":"/like.png"} width={20} height={20}></Image>
        <div className={styles.likeText}>{boardData.likes}</div>
    </Button>;
}
