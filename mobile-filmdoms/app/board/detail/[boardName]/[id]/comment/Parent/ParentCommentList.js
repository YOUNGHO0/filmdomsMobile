import ParentComment from "@/app/board/detail/[boardName]/[id]/comment/Parent/ParentComment";
import CommentModify from "@/app/board/detail/[boardName]/[id]/comment/modify/CommentModify";

export default function ParentCommentList(props) {

    let comments = props.commentData.comments;
    let commentNumber = props.commentNumber
    let setCommentNumber = props.setCommentNumber
    let setModifyNumber =props.setModifyNumber
    let commentModifyNumber = props.commentModifyNumber;
    return <div>
        {comments.map((value) => {

            return (
                <div>
                    {   commentModifyNumber === value.id
                        ? <CommentModify
                            setModifyNumber={setModifyNumber}
                            value = {value}
                            commentModifyNumber = {commentModifyNumber}
                            commentNumber={commentNumber}
                            setCommentNumber={setCommentNumber}

                        ></CommentModify>
                        : <ParentComment
                            boardId={props.boardId}
                            commentModifyNumber = {commentModifyNumber}
                            setModifyNumber = {setModifyNumber}
                            commentNumber={commentNumber}
                            setCommentNumber={setCommentNumber}
                            value={value}
                        ></ParentComment>}
                    </div>

            );

        })}
    </div>
}