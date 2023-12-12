import {Button, TextField} from "@mui/material";
import {useRef} from "react";
import axios from "axios";
import {useRouter} from "next/navigation";


export default function CommentReplyInput(props) {

    let inputText = useRef(null);
    const router = useRouter()
    return<div style={{width:"100%",borderRadius:"4px"}}>

        <div style={{padding:"20px 0px",fontWeight:"700"}}>댓글 작성</div>
        <TextField
            inputRef={inputText}
            autoFocus
            style={{width:"100%",boxSizing:"border-box"}}
            sx={{
                '& .MuiInputBase-root.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':{
                    border: "2px solid #FF5414",
                }
            }}
            InputLabelProps={{ style:{display:"none",color:"#FF5414"}}}
            inputProps={{ maxLength: 600}}
            id="commentInput"
            multiline
            rows={4}
            variant="outlined"
        />
        <div style={{width:"60px",padding:"10px",marginLeft:"auto"}}>
            <Button
                onClick={()=>{addComment(inputText.current.value,props.boardId,props.parentsCommentId,props.setCommentNumber)}}
                style={{width:"60px",background:"#FF5414", color:"white",fontWeight:"500",fontSize:"15px"}}>등록</Button>
        </div>

    </div>

    function addComment(inputText,boardId,parentsCommentId,setCommentNumber){
        axios.post("/api/v1/comment",
            {articleId:boardId,parentCommentId:parentsCommentId,content:inputText},{headers: { "Content-Type": `application/json`}})
            .then(()=>{setCommentNumber(""); router.refresh()})
    }


}