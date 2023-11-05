import ChildComment from "@/app/board/[boardName]/[id]/comment/ChildComment";
export default function ChildCommentList(props){
    const comments = props.comments;
    let childComments;
    if(Array.isArray(props.comments))
    {
        childComments =comments.map((value)=>{
            return <ChildComment value = {value}></ChildComment>
        })
    }
    return childComments;

}