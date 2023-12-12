import {setCookieHeader, withCookiesTo} from "@/app/util/apiUtil";
import axios from "axios";



export default async function (request,response){

    await withCookiesTo("/api/v1/account/logout",request.method,undefined,request)
        .then((result)=>{setCookieHeader(result,response)})
        .catch(()=>{})

    return response.status(200).json("로그아웃 성공")
}





