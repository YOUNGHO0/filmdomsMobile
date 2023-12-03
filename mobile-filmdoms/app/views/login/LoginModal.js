'use client'
import {Box, Modal} from "@mui/material";
import {useContext, useState} from "react";
import Image from "next/image";
import LoginModalContent from "@/app/views/login/LoginModalContent";
import {UserContext} from "@/app/hooks/useContext/UserContext";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";
import UserModal from "@/app/views/usermodal/UserModal";
export default function LoginModal(){

    const style = {
        backgroundColor: 'transparent',
        color:"white",
        outline:"none",
    };
        let [userProfileState,setUserProfile] = useContext(UserContext);
        const [open, setOpen] = useState(false);
        const handleOpen = () => setOpen(true);
        const handleClose = () => setOpen(false);

    return <div style={{marginRight:"20px"}}>
       <UserImage userProfileState={userProfileState}></UserImage>
        <Modal
            slotProps={{backdrop:{style:{backgroundColor:"black",opacity:"0.8"}}}}
            open={open}
            onClose={handleClose}
            style={{outline:"none",overflow:"scroll",border:"0px"}}
        >
            <Box sx={style} style={{marginTop:"15%"}}>
                <BackButton></BackButton>
                <LoginModalContent setOpen={setOpen}></LoginModalContent>
            </Box>

        </Modal>
    </div>

    function BackButton(){
        return <div onClick={handleClose} style={{marginBottom:"48px",marginLeft:"auto",width:"22px", marginRight:"20px"}}>
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.1851 3.3749C4.68523 2.87503 3.87477 2.87503 3.3749 3.3749C2.87503 3.87477 2.87503 4.68523 3.3749 5.1851L9.18981 11L3.3749 16.8149C2.87503 17.3148 2.87503 18.1252 3.3749 18.6251C3.87477 19.125 4.68523 19.125 5.1851 18.6251L11 12.8102L16.8149 18.6251C17.3148 19.125 18.1252 19.125 18.6251 18.6251C19.125 18.1252 19.125 17.3148 18.6251 16.8149L12.8102 11L18.6251 5.1851C19.125 4.68523 19.125 3.87477 18.6251 3.3749C18.1252 2.87503 17.3148 2.87503 16.8149 3.3749L11 9.18981L5.1851 3.3749Z" fill="#F7F7F7"/>
            </svg>
        </div>
    }

    function UserImage(props){
        let userProfileState = undefined;
        props.userProfileState === undefined ?
            userProfileState = undefined  : userProfileState = JSON.parse(props.userProfileState)
        return(
            userProfileState !== undefined ? <Image style={{borderRadius:"100%",border:"1px solid white"}} onClick={handleOpen} src={process.env.NEXT_PUBLIC_BACKEND_URL+'/image/' + userProfileState.result.profileImage.uuidFileName} alt={"profileImage"} width={26} height={26.02}></Image>:
            <Image onClick={handleOpen} src={'/user.png'} alt={"user"} width={26} height={26.02}></Image>
            )


    }
}

