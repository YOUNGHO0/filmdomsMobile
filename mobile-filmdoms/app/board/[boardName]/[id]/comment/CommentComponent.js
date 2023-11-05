import ParentCommentList from "@/app/board/[boardName]/[id]/comment/ParentCommentList";
import styles from './CommentComponent.module.css'
export default function CommentComponent(props ){
    let commentData = props.commentData;
    console.log(props.commentData);
    return(<div style={{margin:"0px 20px"}}>
        <div className={styles.commentHeader}>댓글 {commentData.commentCount}개</div>
        <ParentCommentList commentData = {commentData}></ParentCommentList>
        </div>)
}