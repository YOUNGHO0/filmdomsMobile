'use client'
import ParentCommentList from "@/app/board/detail/[boardName]/[id]/comment/Parent/ParentCommentList";
import styles from './CommentComponent.module.css'
import {useContext, useState} from "react";
import {UserContext} from "@/app/hooks/useContext/UserContext";
import CommentInput from "@/app/board/detail/[boardName]/[id]/comment/reply/CommentInput";

export default function CommentComponent(props ){
    let commentData = props.commentData;
    let [commentNumber,setCommentNumber] = useState("")
    let [commentModifyNumber,setModifyNumber] = useState("")
    let [userProfileState,setUserProfile] = useContext(UserContext);
    return(<div style={{margin:"0px 20px"}}>
        <div className={styles.commentHeader}>댓글 {commentData.commentCount}개</div>
        <ParentCommentList
            boardId={props.boardId}
            commentNumber={commentNumber}
            setCommentNumber={setCommentNumber}
            commentData = {commentData}
            commentModifyNumber={commentModifyNumber}
            setModifyNumber = {setModifyNumber}
        ></ParentCommentList>
        {userProfileState !== undefined ? <CommentInput boardId={props.boardId}></CommentInput> :""}
    </div>)
}

