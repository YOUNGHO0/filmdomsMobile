import ChildComment from "@/app/board/detail/[boardName]/[id]/comment/child/ChildComment";
import CommentModify from "@/app/board/detail/[boardName]/[id]/comment/modify/CommentModify";
export default function ChildCommentList(props){
    const comments = props.comments;
    let childComments;
    let commentModifyNumber = props.commentModifyNumber
    if(Array.isArray(props.comments))
    {
        childComments =comments.map((value)=> {
             return commentModifyNumber === value.id ? <CommentModify value = {value} setModifyNumber={props.setModifyNumber}></CommentModify>:
                <ChildComment
                    setModifyNumber={props.setModifyNumber}
                    boardId={props.boardId}
                    parentsCommentId={props.parentsCommentId}
                    commentNumber={props.commentNumber}
                    setCommentNumber={props.setCommentNumber}
                    value = {value}
                ></ChildComment>

        })
    }
    return childComments;

}