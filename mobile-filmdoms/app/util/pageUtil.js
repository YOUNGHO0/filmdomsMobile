
import {cookies} from "next/headers";
import axios from "axios";

export async function getRequestWithCookiesTo(url,thenCallback,catchCallback){
    const cookie = cookies();

    let result = undefined
        result = await axios.get(process.env.NEXT_PUBLIC_BACKEND_URL + url, {
            headers: {
                Cookie: cookie
            }
        })
            .then(thenCallback)
            .catch(catchCallback)

    return result;
}

export async function postRequestWithCookiesTo(url,data,thenCallback,catchCallback){
    const cookie = cookies();
    let result = undefined

    result = await axios.post(process.env.NEXT_PUBLIC_BACKEND_URL + url,data ,{
        headers: {
            Cookie: cookie
        }
    })
        .then(thenCallback)
        .catch(catchCallback)

    return result;
}


export async function getRefreshToken(){

    let result = await postRequestWithCookiesTo("/api/v1/account/refresh-token",undefined,(value)=>value,(reason)=>{console.log(reason)})
    let cookie = result.headers.get("set-cookie")



    return undefined
}

export async function withRefreshToken(thenCallback, catchCallback){

    let result = await postRequestWithCookiesTo("/api/v1/account/refresh-token",undefined,thenCallback,catchCallback)
    return result

}

export async function fetchProfile(result){
    let cookie = result.headers.get("set-cookie")
    let userProfile = await axios.get(process.env.NEXT_PUBLIC_BACKEND_URL+ '/api/v1/account/profile',{headers:
            {
                cookie:cookie
            }}).then(value => value.data)
    return userProfile

}

export async function fetchWrittenArticles(result){
    let cookie = result.headers.get("set-cookie")
    let writtenArticles = await axios.get(process.env.NEXT_PUBLIC_BACKEND_URL+ '/api/v1/account/profile/article',{headers:
            {
                cookie:cookie
            }}).then(value => value.data)
    return writtenArticles

}

export async function fetchWrittenComments(result){
    let cookie = result.headers.get("set-cookie")
    let writtenComments = await axios.get(process.env.NEXT_PUBLIC_BACKEND_URL+ '/api/v1/account/profile/comment',{headers:
            {
                cookie:cookie
            }}).then(value => value.data)
    return writtenComments

}

