import {useContext} from "react";
import {UserContext} from "@/app/hooks/useContext/UserContext";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";
import Image from "next/image";
import styles from './UserModal.module.css'
import Link from "next/link";
import axios from "axios";
import {toast} from "react-toastify";
export default function UserModal(props){

    let [userProfileState,setUserProfile] = useContext(UserContext);
    let userProfileJson =  JSON.parse(userProfileState);
    return <div style={{justifyContent:"center",display:"flex"}}>
        <div style={{border:"1px solid black",backgroundColor:"white",color:"black",width:"335px",height:"260px"}}>
            <div>
                <div style={{marginTop:"16px",display:"flex"}}>
                    <Image style={{borderRadius:"100%",marginLeft:"24px"}}
                           onClick={()=>{}}
                           alt={"userProfileImage"}
                           src={process.env.NEXT_PUBLIC_BACKEND_URL+'/image/' + userProfileJson.result.profileImage.uuidFileName}
                           width={56} height={58}></Image>
                    <div style={{marginLeft:"24px"}}>
                        <div style={{display:"flex",marginBottom:"6px"}}>
                            <div className={styles.username}>{userProfileJson.result.nickname}</div>
                            <div className={styles.registerDate} style={{marginLeft:"16px"}}>{toDate(userProfileJson.result.registeredAt)}</div>
                        </div>
                        <div>{userProfileJson.result.email}</div>
                    </div>
                </div>
            </div>
            <hr style={{marginTop:"16px",marginBottom:"24px",background:"#D9D9D9",opacity:"60%"}}></hr>
            <div style={{marginLeft:"24px"}}>
                <div onClick={()=>{props.setOpen(false)}} className={styles.menu} style={{marginBottom:"16px"}}><Link href={'/mypage'}>마이 페이지</Link></div>
                <div onClick={()=>{props.setOpen(false)}} className={styles.menu} style={{marginBottom:"16px"}}><Link href={'/mypage/activity'}> 활동 내역</Link></div>
                <div onClick={()=>{props.setOpen(false)}} className={styles.menu} style={{marginBottom:"16px"}}>스레드</div>
                <div onClick={()=>{props.setOpen(false); logOut(); setUserProfile(undefined)}} className={styles.menu} style={{marginBottom:"24px"}}>로그아웃</div>
            </div>

        </div>
    </div>

}

function logOut(){
    axios.post("/api/v1/account/logout").then(toast("로그아웃 성공"))
}

function toDate(number){
    const timestamp = number;
    var myDate = new Date(timestamp);
    let year = myDate.getFullYear();
    let month = myDate.getMonth()+1;
    let date = myDate.getDate();
    return (year + '.' + month + '.'+ date)
}