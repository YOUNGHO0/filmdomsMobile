import {useRef} from "react";
import {useRouter} from "next/navigation";
import {Button, TextField} from "@mui/material";
import axios from "axios";
import styles from "@/app/board/detail/[boardName]/[id]/comment/CommentComponent.module.css";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";
import Image from "next/image";
import {deleteComment} from "@/app/util/clientUtil";
import CommentReplyInput from "@/app/board/detail/[boardName]/[id]/comment/reply/CommentReplyInput";
import ChildCommentList from "@/app/board/detail/[boardName]/[id]/comment/child/ChildCommentList";
import {toast} from "react-toastify";

export default function CommentModify(props){
        let value = props.value
        let inputText = useRef(null);
        const router = useRouter()
        let setModifyNumber = props.setModifyNumber

        return <div style={{padding:"24px 0px"}}>
            <div style={{lineHeight:"20px",display:"flex"}}>
                <Image style={{borderRadius:"100px",padding:"8px"}} src={process.env.NEXT_PUBLIC_BACKEND_URL + '/image/' +value.author.profileImage.uuidFileName} width={40} height={40}></Image>
                <div style={{width:"100%"}}>
                    <div style={{marginBottom:"10px"}} className={styles.commentUser}>{value.author.nickname}</div>
                    <TextField
                        inputRef={inputText}
                        autoFocus
                        style={{ width:"100%", boxSizing: "border-box" }}
                        sx={{
                            '& .MuiInputBase-root.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                border: "2px solid #FF5414",
                            }
                        }}
                        InputLabelProps={{ style: { display: "none", color: "#FF5414" } }}
                        inputProps={{ maxLength: 600 }}
                        id="commentInput"
                        multiline
                        rows={4}
                        variant="outlined"
                        defaultValue={value.content}
                    />
                </div>
            </div>
            <div style={{width:"60px",padding:"10px",marginLeft:"auto",display:"flex",justifyContent:"right"}}>
            <Button
                onClick={()=>{setModifyNumber("")}}
                style={{marginRight:"5px",width:"60px",background:"blueviolet", color:"white",fontWeight:"500",fontSize:"15px"}}>취소</Button>
            <Button onClick={()=>{modifyComment(value.id,inputText,router)}}
                    style={{width:"60px",background:"#FF5414", color:"white",fontWeight:"500",fontSize:"15px"}}>수정</Button>
            </div>

            <ChildCommentList commentModifyNumber={props.commentModifyNumber}
                              setModifyNumber={props.setModifyNumber}
                              boardId={props.boardId}
                              parentsCommentId={value.id}
                              commentNumber={props.commentNumber}
                              setCommentNumber={props.setCommentNumber}
                              comments = {props.value.childComments}
            ></ChildCommentList>

        </div>


        function modifyComment(commentId,inputText,router){
            axios.put("/api/v1/comment/" + commentId,{content:inputText.current.value}).then(setTimeout(()=>{router.refresh();setModifyNumber("")},300))

        }



}