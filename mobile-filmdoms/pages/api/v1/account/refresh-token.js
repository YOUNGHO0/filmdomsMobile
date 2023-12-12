import {setCookieHeader, withCookiesTo} from "@/app/util/apiUtil";

export default async function handler(request,response){



    let requestCookies = request.cookies;
    if(requestCookies.refreshToken != undefined && requestCookies.accessToken == undefined){

        console.log("리프레시 진행")
        await withCookiesTo("/api/v1/account/refresh-token",request.method,undefined,request)
            .then((result)=>{setCookieHeader(result,response)})
            .catch(reason => console.log(reason))
    }

    return response.status(200).json("success");

}

