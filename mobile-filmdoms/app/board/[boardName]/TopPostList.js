'use client'
import styles from './TopPostList.module.css'
import TopPost from "@/app/board/[boardName]/TopPost";
import {useState} from "react";
import Image from "next/image";

export default function TopPostList(props){

    const [isFold,changeFold] = useState(true);

    const PostComponent =(props)=>{
        return (
            <div className={isFold === true ? styles.folded : styles.unfolded }  style={{display: "flex"}}>
                <div className={styles.topPostIndex}>{props.index +1}</div >
                <div className={styles.topPostTitle} style={{paddingLeft:"12px"}}>{props.data.title}</div>
                <div className={styles.topPostWriter}>{props.data.author.nickname}</div>
            </div>
        )
    }

    function foldedLists(props) {
        return (
            <div>
                <PostComponent data = {props.data[0]} index ={0}></PostComponent>
            </div>

        )
    }
    function unFoldedLists(props) {
        return props.data.map((value, i) => {

            return (<PostComponent data = {value} index ={i}></PostComponent>)
        })
    }
    let PostLists = (props)=>{
        if(isFold)
            return foldedLists(props);
        else
            return unFoldedLists(props);

    }

    const UnFoldedTopPostComponent = (props)=>{
        return(
            <div>
                <div onClick={()=>changeFold(!isFold)} style={{display:"flex"}}>
                    <div className={styles.topPostHeader}>인기 게시글</div>
                    <Image style={{marginLeft:"auto" }}  src={"/buttonUp.png"} width={24} height={24}></Image>
                </div>
                <PostLists data ={props.data}></PostLists>
            </div>

        )

    }
    const FoldedTopPostComponent = (props)=>{
        return(
            <div onClick={()=>changeFold(!isFold)} style={{display:"flex"}}>
                <div className={styles.topPostHeader} style={{lineHeight:"16px",paddingRight:"10px"}}>인기</div>
                <div style={{overflow:"hidden",marginLeft:"auto", marginRight:"auto"}}>
                    <PostLists data ={props.data}></PostLists>
                </div>
                <Image style={{marginLeft:"auto",marginTop:'-5px'}} src={"/buttonDown.png"} width={24} height={24}></Image>
            </div>
        )
    }



    return(
        <div style={{margin:"0px 20px"}}>
            {isFold === true ? <FoldedTopPostComponent data = {props.data}></FoldedTopPostComponent>: <UnFoldedTopPostComponent data = {props.data}></UnFoldedTopPostComponent>}
        </div>




    );

}