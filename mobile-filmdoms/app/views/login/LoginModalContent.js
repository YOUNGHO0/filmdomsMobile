import FilmdomsSvg from "@/app/views/login/FilmdomsSvg";
import LoginComponent from "@/app/views/login/LoginComponent";
import {useContext} from "react";
import {UserContext} from "@/app/hooks/useContext/UserContext";
import UserModal from "@/app/views/usermodal/UserModal";


export default function LoginModalContent(props){

    let [userProfileState,setUserProfile] = useContext(UserContext);
    function LoginModal(){
        return (<>
            <FilmdomsSvg></FilmdomsSvg>
            <LoginComponent setOpen={props.setOpen}></LoginComponent>
        </>)
    }


    return(
        <div style={{margin:"0px 20px"}}>
            {userProfileState === undefined? <LoginModal></LoginModal> : <UserModal setOpen={props.setOpen}></UserModal>}
        </div>

    )
}