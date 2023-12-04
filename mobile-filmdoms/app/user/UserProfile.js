'use client'
import {BackButton, ProfileImage} from "@/app/util/clientUtil";
import {Chip} from "@mui/material";
import ActivityTabs from "@/app/user/ActivityTabs";

export default function UserProfile(props){

    let data = props.profileResult.result;
    let uuidFileName = props.profileResult.result.profileImage.uuidFileName;


    return <div style={{marginTop:"32px",padding:"0px 20px"}}>

        <BackButton></BackButton>
        <div style={{width:"100%",justifyContent:"center",display:"flex",alignItems:"center"}}>
            <div>
                <div style={{marginLeft:"auto",width:"80px",marginRight:"auto"}}>
                    <ProfileImage uuidFileName = {uuidFileName} width={80} height={80}></ProfileImage>
                </div>
                <div style={{marginTop:"10px",textAlign:"center",fontWeight:"700",fontSize:"16px "}}>{data.nickname}</div>
            </div>
        </div>
        <div style={{padding:"10px 0px"}}>
            <div style={{width:"24px",height:"4px",background:"#FF5414"}}></div>
            <div style={{paddingTop:"15px",paddingBottom:"24px",fontWeight:"700"}}>관심영화</div>
            <div style={{display:"flex",overflow:"scroll"}}>
                <FavoriteMovies data = {data}></FavoriteMovies>
            </div>
        </div>

        <div style={{padding:"30px 0px"}}>
            <div style={{width:"24px",height:"4px",background:"#FF5414"}}></div>
            <div style={{paddingTop:"15px",paddingBottom:"24px",fontWeight:"700"}}>활동내역</div>
            <ActivityTabs writtenComments ={props.writtenComments} writtenArticles={props.writtenArticles}></ActivityTabs>
        </div>
    </div>

}

function FavoriteMovies(props){
    let data = props.data.favoriteMovies;
    return data.map((value)=> <UserFavoriteMovieChip value = {value}></UserFavoriteMovieChip>)
}
function UserFavoriteMovieChip(props){
    return <Chip style={{height:"26px",marginRight:"8px",boxSizing:"border-box",border:"2px solid #FF5414",color: "#FF5414",fontFamily:"Pretendard", fontWeight:"700" }} variant="outlined" label={props.value}/>
}