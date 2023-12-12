import {Button} from "@mui/material";
import Image from "next/image";
import styles from '../BoardDetailComponent.module.css'
import axios from "axios";
import {useContext} from "react";
import {UserContext} from "@/app/hooks/useContext/UserContext";
import {useRouter} from "next/navigation";

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

    let [userProfileState,setUserProfile] = useContext(UserContext);

    if(userProfileState != undefined)
        return <LoggedUserLikeButton  userLike={userLike} boardData={boardData}></LoggedUserLikeButton>


    return <UnLoggedUserLikeButton boardData = {boardData}></UnLoggedUserLikeButton>
}

function UnLoggedUserLikeButton(props){
    let boardData =props.boardData
    return <Button
        style={{
            borderRadius: "0px",
            border: "2px solid #FF5414",
            width: "64px",
            height: "32px",
            boxSizing: "border-box"
        }}>
        <Image alt={"Likes"} style={{marginRight: "8px"}} src={"/like.png"} width={20} height={20}></Image>
        <div className={styles.likeText}>{boardData.likes}</div>
    </Button>;
}

function LoggedUserLikeButton(props){
    let boardData = props.boardData
    let userLike = props.userLike
    let router = useRouter()
    return <Button
        onClick={()=>{pressLikeButton(boardData.id,router)}}
        style={{
            borderRadius: "0px",
            border: "2px solid #FF5414",
            width: "64px",
            height: "32px",
            boxSizing: "border-box"
        }}>
        <Image alt={"Likes"} style={{marginRight: "8px"}} src={userLike === true ?"/liked.png":"/like.png"} width={20} height={20}></Image>
        <div className={styles.likeText}>{boardData.likes}</div>
    </Button>;


}


function pressLikeButton(articleId,router){
    axios.post("/api/v1/article/"+articleId+ "/vote").then(()=>{setTimeout(()=>{router.refresh(); console.log("성공")}),300})

}


