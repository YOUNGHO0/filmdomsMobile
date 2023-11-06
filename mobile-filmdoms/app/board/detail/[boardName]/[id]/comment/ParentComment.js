import Image from "next/image";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";
import styles from "@/app/board/detail/[boardName]/[id]/comment/CommentComponent.module.css";
import ChildCommentList from "@/app/board/detail/[boardName]/[id]/comment/ChildCommentList";

function LikeButton(props) {
    let comment =props.comment
    return <div style={{border:"1px solid black",
        padding:"5px 11px",
        width:"25px", height:"14px"
    }}>
        <div style={{ width:"33px", height:"14px", display:"flex", lineHeight:"14px"}}>
            <Image style={{marginRight: "4px"}} src={'/commentLike.png'} width={14} height={14}></Image>
            <div className={styles.likeText}>{comment.likes}</div>
        </div>

    </div>;
}
function ReplyButton(props) {
    let comment =props.comment
    console.log(comment);
    return <div style={{marginLeft:"8px", border:"1px solid black",
        padding:"5px 11px",
        width:"25px", height:"14px"
    }}>
        <div style={{ width:"33px", height:"14px", display:"flex", lineHeight:"14px"}}>
            <div className={styles.likeText}>답글</div>
        </div>

    </div>;
}



export default function ParentComment(props){
    let value = props.value;
    return <div style={{padding:"24px 0px"}}>
        <div style={{lineHeight:"20px",display:"flex"}}>
            <Image style={{borderRadius:"100px",padding:"8px"}} src={process.env.NEXT_PUBLIC_BACKEND_URL + '/image/' +value.author.profileImage.uuidFileName} width={40} height={40}></Image>
            <div>
                <div className={styles.commentUser}>{value.author.nickname}</div>
                <div>{value.content}</div>
                <div style={{marginTop:"12px", display:"flex"}}>
                    <LikeButton comment = {value}></LikeButton>
                    <ReplyButton></ReplyButton>
                </div>
                <div>
                    <ChildCommentList comments = {value.childComments}></ChildCommentList>
                </div>
            </div>
        </div>
    </div>
}