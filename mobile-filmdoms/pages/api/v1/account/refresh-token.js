import {withCookiesTo} from "@/app/util/apiUtil";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";

export default async function handler(request,response){

    let requestCookies = request.cookies;
    if(requestCookies.refreshToken != undefined && requestCookies.accessToken == undefined){

        let result = await withCookiesTo("/api/v1/account/refresh-token",request.method,undefined,request)
        console.log("토큰 재발급")
        let cookie = result.headers.get("set-cookie")
        let noDomainCookie = cookie.map((value,key)=>{
            return value.replace('.filmdoms.studio',"localhost")
        })
        process.env.NODE_ENV == 'development'?
            response.setHeader("set-cookie",[...noDomainCookie]):response.setHeader("set-cookie",[...cookie])
    }


    return response.status(200).json("success");

}