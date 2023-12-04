import {withCookiesTo} from "@/app/util/apiUtil";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";

export default async function handler(request,response){



    let requestCookies = request.cookies;
    if(requestCookies.refreshToken != undefined && requestCookies.accessToken == undefined){

        await withCookiesTo("/api/v1/account/refresh-token",request.method,undefined,request)
            .then((result)=>{setAccessTokenToHeader(result,response)})
            .catch(()=>{})
    }

    return response.status(200).json("success");

}

function setAccessTokenToHeader(result,response){
    let cookie = result.headers.get("set-cookie")
    let noDomainCookie = cookie.map((value,key)=>{
        return value.replace('.filmdoms.studio',"localhost")
    })
    process.env.NODE_ENV == 'development'?
        response.setHeader("set-cookie",[...noDomainCookie]):response.setHeader("set-cookie",[...cookie])
}