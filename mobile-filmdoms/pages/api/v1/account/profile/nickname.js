import {withCookiesTo} from "@/app/util/apiUtil";


export default async function handler(request,response){

     await withCookiesTo("/api/v1/account/profile/nickname",request.method,{newNickname: request.body.data},request)
         .catch(reason => response.status(400).json("이미 존재하는 닉네임입니다."))

    return response.status(200).json("성공")

}