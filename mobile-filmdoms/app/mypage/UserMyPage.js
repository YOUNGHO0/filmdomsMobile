'use client'
import {useContext, useRef, useState} from "react";
import {UserContext} from "@/app/hooks/useContext/UserContext";
import {useRouter} from "next/navigation";
import Image from "next/image";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";
import styles from './UserMyPage.module.css'
import {Box, Button, Modal} from "@mui/material";
import {toast} from "react-toastify";
import axios, {Axios} from "axios";
import {toDate} from "@/app/util/clientUtil";


export default function UserMyPage(){
    let [userProfileState,setUserProfile] = useContext(UserContext);
    let userProfileJson = undefined;
    userProfileState === undefined ? userProfileJson = undefined : userProfileJson = JSON.parse(userProfileState)
    let router = useRouter()

    return <div style={{padding:"0px 20px"}}>
        <div style={{marginTop:"32px"}}>
            <BackButton title = {"회원 정보"}></BackButton>
        </div>
        <div style={{marginTop:"22px",display:"flex",justifyContent:"center",alignItems:"center"}}>
            <div style={{position:"relative"}}>
                <Image style={{borderRadius:"100%",border:"1px solid white"}}
                       alt={"profileImage"}
                       src={process.env.NEXT_PUBLIC_BACKEND_URL+'/image/' + userProfileJson.result.profileImage.uuidFileName}
                       width={80} height={80}></Image>
                <div style={{display:"flex",justifyContent:"center",alignItems:"center",boxSizing:"border-box",top:"58px",left:"55px",position:"absolute",width:"25px",height:"25px", borderRadius:"100%",background:"#FF5414"}} >
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 11.8125C10.2426 11.8125 11.25 10.8051 11.25 9.5625C11.25 8.31986 10.2426 7.3125 9 7.3125C7.75736 7.3125 6.75 8.31986 6.75 9.5625C6.75 10.8051 7.75736 11.8125 9 11.8125Z" fill="white"/>
                        <path d="M16.0312 5.0625H13.1133C13.0078 5.0625 12.877 4.9943 12.7751 4.88672L11.816 3.38203C11.4258 2.8125 11.25 2.8125 10.6172 2.8125H7.38281C6.75 2.8125 6.53906 2.8125 6.18504 3.38238L5.22492 4.88672C5.14687 4.9718 5.03719 5.0625 4.92188 5.0625V4.5C4.92188 4.42541 4.89224 4.35387 4.8395 4.30113C4.78675 4.24838 4.71522 4.21875 4.64062 4.21875H3.23438C3.15978 4.21875 3.08825 4.24838 3.0355 4.30113C2.98276 4.35387 2.95312 4.42541 2.95312 4.5V5.0625H1.96875C1.74497 5.0625 1.53036 5.15139 1.37213 5.30963C1.21389 5.46786 1.125 5.68247 1.125 5.90625V14.3438C1.125 14.5675 1.21389 14.7821 1.37213 14.9404C1.53036 15.0986 1.74497 15.1875 1.96875 15.1875H16.0312C16.255 15.1875 16.4696 15.0986 16.6279 14.9404C16.7861 14.7821 16.875 14.5675 16.875 14.3438V5.90625C16.875 5.68247 16.7861 5.46786 16.6279 5.30963C16.4696 5.15139 16.255 5.0625 16.0312 5.0625ZM9.15856 12.934C8.4783 12.9659 7.80428 12.7914 7.22508 12.4332C6.64587 12.075 6.18858 11.55 5.91327 10.9271C5.63797 10.3042 5.55754 9.6126 5.68255 8.94316C5.80756 8.27372 6.13217 7.65776 6.61372 7.17622C7.09526 6.69467 7.71122 6.37006 8.38066 6.24505C9.0501 6.12004 9.74169 6.20047 10.3646 6.47577C10.9875 6.75108 11.5125 7.20837 11.8707 7.78758C12.2289 8.36678 12.4034 9.0408 12.3715 9.72106C12.3312 10.5602 11.9798 11.3542 11.3857 11.9482C10.7917 12.5423 9.99767 12.8937 9.15856 12.934Z" fill="white"/>
                    </svg>
                </div>
            </div>
        </div>


        <UserInfoText title ={"이메일"} value = {userProfileJson.result.email}></UserInfoText>
        <UserInfoTextWithButton url = {"/api/v1/account/profile/nickname"} title = {"닉네임"} value = {userProfileJson.result.nickname}></UserInfoTextWithButton>
        <ButtonModal modal = {PasswordChangeModal} title = {"비밀번호"} value = {"********"}></ButtonModal>
        <UserInfoText title ={"가입일"} value = {toDate(userProfileJson.result.registeredAt)}></UserInfoText>



    </div>

    function UserInfoText(props){

        return <div>
            <div className={styles.email} style={{marginBottom:"24px"}}>{props.title}</div>
            <div className={styles.emailInput} style={{marginBottom:"24px"}}>{props.value}</div>
            <hr style={{background:"#DDD",opacity:"50%",marginBottom:"24px"}}></hr>
        </div>
    }
    function UserInfoTextWithButton(props){

        let [buttonState,setButtonState] = useState("변경");
        const textFocus = useRef(null);

        function changeUserProfile(setButtonState){
            const finishEvent =()=>{
                toast("변경되었습니다")
                setButtonState("변경");}

            axios.put(props.url,{data:textFocus.current.value})
                .then(finishEvent)
                .catch((reason) =>toast(reason.response.data))

        }

        async function handleButtonClick(event){

                buttonState === "변경" ? setButtonState("확인") : changeUserProfile(setButtonState);
                textFocus.current.disabled = !textFocus.current.disabled;
                textFocus.current.focus();

        }

        return <div>
            <div className={styles.email} style={{marginBottom:"24px"}}>{props.title}</div>
            <div style={{display:"flex"}}>
                <input ref={textFocus} placeholder={props.value} type={"text"} disabled={true}  className={styles.emailInput} style={{marginBottom:"18px"}}></input>
                <Button onClick={handleButtonClick} style={{marginLeft:"auto",border:"1px solid #FF9A7C",borderRadius:"0%",width:"60px",height:"28px",boxSizing:"border-box",color:"#FF9A7C",fontWeight:"700"}}>{buttonState}</Button>
            </div>
            <hr style={{background:"#DDD",opacity:"50%",marginBottom:"24px"}}></hr>
        </div>

    }

    function ButtonModal(props){

        let [buttonState,setButtonState] = useState("변경");
        const textFocus = useRef(null);
        const [open, setOpen] = useState(false);
        const PasswordModal = props.modal

        const handleOpen = () => setOpen(true);
        const handleClose = () => setOpen(false);

        const style = {
            backgroundColor: 'transparent',
            outline:"none",
            fontFamily: "Pretendard",
            fontStyle: "normal",
            lineHeight: "normal"
        };
        function CloseButton(){
            return <div onClick={handleClose} style={{marginBottom:"48px",marginLeft:"auto",width:"22px", marginRight:"20px"}}>
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.1851 3.3749C4.68523 2.87503 3.87477 2.87503 3.3749 3.3749C2.87503 3.87477 2.87503 4.68523 3.3749 5.1851L9.18981 11L3.3749 16.8149C2.87503 17.3148 2.87503 18.1252 3.3749 18.6251C3.87477 19.125 4.68523 19.125 5.1851 18.6251L11 12.8102L16.8149 18.6251C17.3148 19.125 18.1252 19.125 18.6251 18.6251C19.125 18.1252 19.125 17.3148 18.6251 16.8149L12.8102 11L18.6251 5.1851C19.125 4.68523 19.125 3.87477 18.6251 3.3749C18.1252 2.87503 17.3148 2.87503 16.8149 3.3749L11 9.18981L5.1851 3.3749Z" fill="#F7F7F7"/>
                </svg>
            </div>
        }
        async function handleButtonClick(){
            handleOpen()
        }


        return <div>
            <div className={styles.email} style={{marginBottom:"24px"}}>{props.title}</div>
            <div style={{display:"flex"}}>
                <input ref={textFocus} placeholder={props.value} type={"text"} disabled={true}  className={styles.emailInput} style={{marginBottom:"18px"}}></input>
                <Button onClick={handleButtonClick} style={{marginLeft:"auto",border:"1px solid #FF9A7C",borderRadius:"0%",width:"60px",height:"28px",boxSizing:"border-box",color:"#FF9A7C",fontWeight:"700"}}>{buttonState}</Button>
            </div>
            <hr style={{background:"#DDD",opacity:"50%",marginBottom:"24px"}}></hr>

            <Modal
                slotProps={{backdrop:{style:{backgroundColor:"black",opacity:"0.8"}}}}
                open={open}
                onClose={()=>setOpen(false)}
                style={{outline:"none",overflow:"scroll",border:"0px"}}
            >
                <Box sx={style} style={{marginTop:"15%"}}>
                    <div>
                        <CloseButton></CloseButton>
                        <div style={{display:"flex",justifyContent:"center"}}>
                            <PasswordModal></PasswordModal>
                        </div>
                    </div>
                </Box>

            </Modal>
        </div>

    }

    function BackButton(props) {
        return <div onClick={() => router.back()} style={{display: "flex"}}>
            <Image alt={"backButton"} src={'/buttonBack.svg'} width={28} height={28}></Image>
            <div style={{fontSize:"20px",fontFamily:"Pretendard",fontWeight:"700"}}> {props.title}</div>
        </div>;
    }
    
    function PasswordChangeModal(){

        const curPassword = useRef(null);
        const newPassword = useRef(null);
        const newPassword2 = useRef(null);

        function changePassword(){

            let oldPw = curPassword.current.value
            let newPw = newPassword.current.value
            let newPw2 = newPassword2.current.value
            axios.put("/api/v1/account/profile/password",{oldPassword:oldPw,newPassword:newPw})
                .then(value => (toast("변경완료")))
                .catch(()=>toast("비밀번호 형식을 확인해 주세요"))
            
            
            
        }

        return<div style={{width:"335px", height:"400px",background:"#F7F7F5",marginTop:"30px",padding:"0px 20px"}}>
            <div style={{color:"black",fontSize:"16px",fontWeight:"700",marginTop:"30px",marginBottom:"30px"}}> 비밀번호 변경 </div>
            <div>
                <div style={{fontSize:"12px",marginBottom:"15px",fontWeight:"700"}}>현재 비밀번호</div>
                <input ref={curPassword} style={{fontSize:"9px",borderBottom:"1px solid #AAAAAA",width:"100%",boxSizing:"border-box"}} className={styles.emailInput}/>
            </div>
            <div>
                <div style={{fontSize:"12px",marginTop:"30px",marginBottom:"15px",fontWeight:"700"}}>변경할 비밀번호</div>
                <input ref={newPassword} style={{fontSize:"9px",borderBottom:"1px solid #AAAAAA",width:"100%",boxSizing:"border-box"}} className={styles.emailInput}/>
            </div>
            <div>
                <div style={{fontSize:"12px",marginTop:"30px",marginBottom:"15px",fontWeight:"700"}}>변경할 비밀번호 확인</div>
                <input ref={newPassword2} style={{fontSize:"9px",borderBottom:"1px solid #AAAAAA",width:"100%",boxSizing:"border-box"}} className={styles.emailInput}/>
            </div>
            <div style={{width:"60px",marginLeft:"auto"}}>
                <Button style={{
                    border:"1px solid #FF9A7C",
                    borderRadius:"0%",
                    width:"60px",
                    height:"28px",
                    boxSizing:"border-box",
                    marginTop:"30px",
                    color:"#FF9A7C",
                    fontWeight:"700"}} onClick={changePassword}>변경</Button>
            </div>


        </div>
    }


}