'use client'
import {useRouter} from "next/navigation";
import styles from './BoardDetailComponent.module.css'
import Image from "next/image";
import {useState} from "react";
import TagDateAndTitle from "@/app/board/detail/[boardName]/[id]/header/TagAndTitle";
import AuthorAndInfo from "@/app/board/detail/[boardName]/[id]/header/AuthorAndInfo";
import ContentAndLikes from "@/app/board/detail/[boardName]/[id]/content/ContentAndLikes";
import CommentComponent from "@/app/board/detail/[boardName]/[id]/comment/CommentComponent";

function toDate(number){
    const timestamp = number;
    var myDate = new Date(timestamp);
    let year = myDate.getFullYear();
    let month = myDate.getMonth()+1;
    let date = myDate.getDate();
    return (year + '.' + month + '.'+ date)
}


export default function BoardDetailComponent(props){

    let router = useRouter()
    let boardData = props.boardData.result;
    let commentData = props.commentData.result;

    let [userLike,changUserLike] = useState(boardData.liked)

    function BackButton() {
        return <div onClick={() => router.back()} style={{display: "flex"}}>
            <Image src={'/buttonBack.svg'} width={28} height={28}></Image>
            <div className={styles.detailBoardName} style={{textTransform: "capitalize"}}> {props.boardName}</div>
        </div>;
    }

    return(
        <div style={{marginTop: "32px"}}>
            <BackButton></BackButton>
            <div style={{margin:"26px 20px"}}>
                <TagDateAndTitle boardData = {boardData} toDate = {toDate}></TagDateAndTitle>
                <AuthorAndInfo boardData = {boardData} commentCount = {commentData.commentCount}></AuthorAndInfo>
                <ContentAndLikes boardData = {boardData} userLike = {userLike}></ContentAndLikes>
            </div>
            <div>
                <CommentComponent commentData = {commentData}></CommentComponent>
            </div>
        </div>
    )
}