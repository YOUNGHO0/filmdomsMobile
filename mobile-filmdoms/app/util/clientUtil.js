import Image from "next/image";
import {useRouter} from "next/navigation";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";
import axios from "axios";
import styles from "@/app/board/detail/[boardName]/[id]/comment/CommentComponent.module.css";
import {Button} from "@mui/material";

export function toDate(number){
    const timestamp = number;
    var myDate = new Date(timestamp);
    let year = myDate.getFullYear();
    let month = myDate.getMonth()+1;
    let date = myDate.getDate();
    return (year + '.' + month + '.'+ date)
}

export function BackButton(props) {

    const router = useRouter();

    return <div onClick={() => router.back()} style={{display: "flex"}}>
        <Image alt={"backButton"} src={'/buttonBack.svg'} width={28} height={28}></Image>
        <div style={{fontSize:"20px",fontFamily:"Pretendard",fontWeight:"700"}}> {props.title}</div>
    </div>;
}

export function ProfileImage(props){

    return   <Image  alt={"profileImage"} style={{marginRight:"6px", borderRadius:"100px"}} src={process.env.NEXT_PUBLIC_BACKEND_URL + '/image/' +props.uuidFileName} width={props.width} height={props.height}></Image>
}

export function deleteComment(commentId,router){
    axios.delete("/api/v1/comment/" + commentId).then(setTimeout(()=>{router.refresh()},300))
}


export function ModifyDeleteButton(props){
    let setModifyNumber = props.setModifyNumber
    let value = props.value
    if(IsUserWrittenComment(props.userProfileState,props.value)) {

        return<div style={{display:"flex"}}>
            <div onClick={()=>{setModifyNumber(value.id);}}><ModifyButton></ModifyButton></div>
            <div onClick={()=>{deleteComment(value.id,props.router)}}><DeleteButton></DeleteButton></div>
        </div>

    }

    return

}

function IsUserWrittenComment(userProfileState,value){

    if (userProfileState != undefined && JSON.parse(userProfileState).result.id === value.author.id )
        return true;
    else
        return false;
}

function ModifyButton(){
    return <Button
        sx={{
            minWidth:"33px",
            minHeight:"14px",
            width:"33px",
            height:"25px",
            padding:"5px 23px",
            border:"1px solid black",
            borderRadius:"0px",
            lineHeight:"14px",
            color: "black",
            textAlign: "center",
            fontFamily: "Pretendard",
            fontSize:"12px",
            fontStyle: "normal",
            fontWeight:"700",
            marginLeft:"8px",
            whiteSpace:"nowrap"
        }}
    >  수정
    </Button>

}

function DeleteButton(){

    return <Button
        sx={{
            minWidth:"33px",
            minHeight:"14px",
            width:"33px",
            height:"25px",
            padding:"5px 23px",
            border:"1px solid black",
            borderRadius:"0px",
            lineHeight:"14px",
            color: "black",
            textAlign: "center",
            fontFamily: "Pretendard",
            fontSize:"12px",
            fontStyle: "normal",
            fontWeight:"700",
            marginLeft:"8px",
            whiteSpace:"nowrap"
        }}
    >  삭제
    </Button>
    
}


export function LikeButton(props){
    let comment =props.comment
    console.log(props.userProfileState)
    if (props.userProfileState !== undefined){
        return <Button
            onClick={()=>{pressCommentLike(comment.id,props.router)}}
            sx={{
                minWidth:"33px",
                minHeight:"14px",
                width:"33px",
                height:"25px",
                padding:"5px 23px",
                border:"1px solid black",
                borderRadius:"0px"


            }}
        >
            <Image style={{marginRight: "4px"}} src={'/commentLike.png'} width={14} height={14}></Image>
            <div className={styles.likeText}>{comment.likes}</div>
        </Button>
    }

    return <Button
        sx={{
            minWidth:"33px",
            minHeight:"14px",
            width:"33px",
            height:"25px",
            padding:"5px 23px",
            border:"1px solid black",
            borderRadius:"0px"


        }}
    >
        <Image style={{marginRight: "4px"}} src={'/commentLike.png'} width={14} height={14}></Image>
        <div className={styles.likeText}>{comment.likes}</div>
    </Button>

}

function pressCommentLike(commentId,router){

    axios.post("/api/v1/comment/"+ commentId+ "/vote").then(()=>{router.refresh()});

    return
}

export function ReplyButton(props) {

    if(props.userProfileState != undefined){
        return<Button
            onClick={()=>{props.setCommentNumber(props.value.id)}}
            sx={{
                minWidth:"33px",
                minHeight:"14px",
                width:"33px",
                height:"25px",
                padding:"5px 23px",
                border:"1px solid black",
                borderRadius:"0px",
                lineHeight:"14px",
                color: "black",
                textAlign: "center",
                fontFamily: "Pretendard",
                fontSize:"12px",
                fontStyle: "normal",
                fontWeight:"700",
                marginLeft:"8px",
                whiteSpace:"nowrap"
            }}
        >답글
        </Button>

    }

    return

}

export function RedLine(){
    return <div style={{width:"24px", height:"4px",background:"#FF5414"}}></div>
}
