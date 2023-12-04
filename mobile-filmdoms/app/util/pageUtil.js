
import {cookies} from "next/headers";
import axios from "axios";

export async function getRequestWithCookiesTo(url,thenCallback,catchCallback){
    const cookie = cookies();

    let result = undefined
    if(cookie.size != 0){
        result = await axios.get(process.env.NEXT_PUBLIC_BACKEND_URL + url, {
            headers: {
                Cookie: cookie
            }
        })
        .then(thenCallback)
        .catch(catchCallback)


    }

    return result;
}

export async function postRequestWithCookiesTo(url,data,thenCallback,catchCallback){
    const cookie = cookies();
    let result = undefined
    if(cookie.size != 0){
        result = await axios.post(process.env.NEXT_PUBLIC_BACKEND_URL + url,data ,{
            headers: {
                Cookie: cookie
            }
        })
            .then(thenCallback)
            .catch(catchCallback)


    }

    return result;
}


export async function getRefreshToken(){

    let result = await postRequestWithCookiesTo("/api/v1/account/refresh-token",undefined,(value)=>value,(reason)=>{console.log(reason)})
    let cookie = result.headers.get("set-cookie")



    return undefined
}

export async function getProfileUsingRefreshToken(){

    let result = await postRequestWithCookiesTo("/api/v1/account/refresh-token",undefined,fetchProfile,(reason)=>{console.log("리프레시토큰예외처리완료")})

    async function fetchProfile(result){
        let cookie = result.headers.get("set-cookie")
        let userProfile = await axios.get(process.env.NEXT_PUBLIC_BACKEND_URL+ '/api/v1/account/profile',{headers:
                {
                    cookie:cookie
                }}).then(value => value.data)
        return userProfile

    }
    return result



}

