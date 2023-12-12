import Image from "next/image";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";
import styles from "@/app/board/detail/[boardName]/[id]/comment/CommentComponent.module.css";
import {useContext} from "react";
import {UserContext} from "@/app/hooks/useContext/UserContext";
import ChildCommentList from "@/app/board/detail/[boardName]/[id]/comment/child/ChildCommentList";
import CommentReplyInput from "@/app/board/detail/[boardName]/[id]/comment/reply/CommentReplyInput";
import {useRouter} from "next/navigation";
import axios from "axios";
import {deleteComment, LikeButton, ModifyDeleteButton, ReplyButton} from "@/app/util/clientUtil";






export default function ParentComment(props){
    let value = props.value;
    let router = useRouter()
    let [userProfileState,setUserProfile] = useContext(UserContext);
    let commentNumber = props.commentNumber
    let setCommentNumber = props.setCommentNumber
    let setModifyNumber = props.setModifyNumber
    return <div style={{padding:"24px 0px"}}>
        <div style={{lineHeight:"20px",display:"flex"}}>
            <Image style={{borderRadius:"100px",padding:"8px"}} src={process.env.NEXT_PUBLIC_BACKEND_URL + '/image/' +value.author.profileImage.uuidFileName} width={40} height={40}></Image>
            <div style={{width:"100%"}}>
                <div className={styles.commentUser}>{value.author.nickname}</div>
                <div>{value.content}</div>
                <div style={{marginTop:"12px", display:"flex"}}>
                    <LikeButton router={router} userProfileState={userProfileState} value={value} comment = {value}></LikeButton>
                    <ReplyButton setCommentNumber={setCommentNumber} userProfileState={userProfileState} value={value} ></ReplyButton>
                   <ModifyDeleteButton router={router} setModifyNumber={setModifyNumber} userProfileState={userProfileState} value={value}></ModifyDeleteButton>
                </div>
                <div>{commentNumber === value.id ? <CommentReplyInput setCommentNumber={setCommentNumber} boardId={props.boardId} parentsCommentId={value.id} ></CommentReplyInput>: ""}</div>
                <div>
                    <ChildCommentList commentModifyNumber={props.commentModifyNumber} setModifyNumber={props.setModifyNumber} boardId={props.boardId} parentsCommentId={value.id} commentNumber={commentNumber} setCommentNumber={setCommentNumber} comments = {value.childComments}></ChildCommentList>
                </div>
            </div>
        </div>
    </div>
}