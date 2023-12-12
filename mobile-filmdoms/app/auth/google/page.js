'use client'
import {useEffect} from "react";
import axios from "axios";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";

export default function page(props){

    useEffect(()=>{
        const params = new URLSearchParams(props.searchParams);
        const queryString = params.toString();
        // axios.get( "/api/login/oauth2/code/google?"+queryString,{withCredentials:true})
        axios.get(process.env.NEXT_PUBLIC_BACKEND_URL+ "/login/oauth2/code/google?"+queryString,{
            headers: {

            },
            withCredentials:true})

    },[])
    console.log(props.searchParams)





    return <div>소셜 로그인 페이지 입니다</div>
}