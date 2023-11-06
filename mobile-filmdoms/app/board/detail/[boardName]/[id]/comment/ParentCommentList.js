import ParentComment from "@/app/board/detail/[boardName]/[id]/comment/ParentComment";

export default function ParentCommentList(props){

    let commentData = props.commentData;
    let comments = commentData.comments;


    const toComment = (value) =>{
        return (<ParentComment value = {value}></ParentComment>)
    }

    return <div>
        {comments.map((value)=>{

            return(
                <div>
                    {toComment(value)}
                </div>

            );

        })}
    </div>
}