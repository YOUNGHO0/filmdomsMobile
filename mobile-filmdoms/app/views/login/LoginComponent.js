import styles from './LoginCoponent.module.css'
import Image from "next/image";
import {useContext, useState} from "react";
import axios from "axios";
import {toast, ToastContainer} from "react-toastify";
import {UserContext} from "@/app/hooks/useContext/UserContext";
import Link from "next/link";
import {useRouter} from "next/navigation";

const notify = () => toast.success('로그인 되었습니다', {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "light",
});

 async function handleNormalLogin(loginDto,changeErrorInfo,setOpen,setUserProfile){
     checkEmailType();
     let result =  await axios.post('/api/v1/login',
         {email: loginDto.email, password : loginDto.password },{headers: { "Content-Type": `application/json`}})
        .then( (value)=>{
            setUserProfile(JSON.stringify(value.data))
            setOpen(false)
            notify()
        })
        .catch(reason =>  changeErrorInfo(reason.response.data))
}


function checkEmailType(){

}
function handleChange(changeMethod,value){
    changeMethod(value);
}


export default function LoginComponent(props){

    const [userEmail,changeUserEmail] = useState("");
    const [userPw,changeUserPw] = useState("");
    const [errorInfo, changeErrorInfo] = useState("");
    const router = useRouter()
    const setOpen = props.setOpen
    let [userProfileState,setUserProfile] = useContext(UserContext);
    let loginDto = {email:userEmail,password:userPw};

    return <div style={{marginTop:"48px",width:"100%"}}>
            <input onChange={(e)=>{handleChange(changeUserEmail,e.target.value)}} className={styles.textbox} name={"email"} type={"text"} placeholder={"이메일"} style={{width:"100%",height:"48px",border:"1.5px solid white",color:"white",backgroundColor:"transparent",marginBottom:"16px"}}/>
            <input onChange={(e)=>{handleChange(changeUserPw,e.target.value)}} className={styles.textbox} name={"password"} type={"text"} placeholder={"비밀번호"} style={{width:"100%",height:"48px",border:"1.5px solid white",color:"white",backgroundColor:"transparent",marginBottom:"16px"}}/>
            <div style={{marginLeft:"3px",color:"red",fontSize:"16px",fontWeight:"700"}}>{errorInfo}</div>
            <div onClick={()=>toast('토스트 테스트')} className={styles.forgetPassword} style={{ textAlign:"right", color:"white"}}>비밀번호 찾기</div>

            <div style={{marginTop:"48px"}}>
                <button onClick={()=>{handleNormalLogin(loginDto,changeErrorInfo,setOpen,setUserProfile)}} type={"button"} style={{fontSize:"16px"}} className={styles.normalLoginStyle}>로그인</button>
                <button type={"button"} className={styles.googleLoginStyle}>
                    <div style={{display:"flex", justifyContent:"center", alignItems:"flex-start"}}>
                        <Image src={"/google.png"} width={19} height={19}></Image>
                        <div style={{marginLeft:"8px"}}>
                            <Link href={process.env.NEXT_PUBLIC_BACKEND_URL + "/oauth2/authorization/google"}>구글로 로그인</Link>
                            </div>
                    </div>
                </button>
                <div style={{display:"flex", justifyContent:"center",marginTop:"24px"}}>
                    <div style={{color:"white"}}> 아직 필름덤즈 회원이 아니신가요?</div>
                   <div onClick={()=>{setOpen(false); router.push("/auth/register")}} style={{marginLeft:"8px",color:"#FF5414"}}> 회원가입</div>
                </div>

            </div>

    </div>
}