'use client'
import {BackButton} from "@/app/util/clientUtil";
import {Chip} from "@mui/material";
import ActivityTabs from "@/app/user/ActivityTabs";
import {useContext} from "react";
import {UserContext} from "@/app/hooks/useContext/UserContext";

export default function UserActivity(props){

    let [userProfileState,setUserProfile] = useContext(UserContext);
    let writtenArticles = props.writtenArticles
    let writtenComments = props.writtenComments

    return <div style={{marginTop:"32px",padding:"0px 20px"}}>

        <BackButton></BackButton>
        <div style={{padding:"30px 0px",width:"100%"}}>
            <div style={{width:"24px",height:"4px",background:"#FF5414"}}></div>
            <div style={{paddingTop:"15px",paddingBottom:"24px",fontWeight:"700"}}>활동내역</div>
            {writtenArticles !== undefined && writtenComments !== undefined ?   <ActivityTabs writtenComments ={writtenComments.result.comments} writtenArticles={writtenArticles.result.articles}></ActivityTabs>
                : <div>로그인해 주세요</div>}
        </div>
    </div>

}
