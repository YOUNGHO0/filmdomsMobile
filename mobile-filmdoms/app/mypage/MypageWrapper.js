'use client'
import {useContext} from "react";
import {UserContext} from "@/app/hooks/useContext/UserContext";
import {useRouter} from "next/navigation";
import Image from "next/image";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";
import UserMyPage from "@/app/mypage/UserMyPage";

export default function MypageWrapper(props){

    let [userProfileState,setUserProfile] = useContext(UserContext)
    return (
        userProfileState === undefined ? <div>로그인 해주세요</div>: <UserMyPage></UserMyPage>
    )


}