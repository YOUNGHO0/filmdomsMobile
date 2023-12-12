import {withCookiesTo} from "@/app/util/apiUtil";

export default async function(request,response){


    await withCookiesTo("/api/v1/comment", request.method, request.body, request).then(value => console.log(value))
    return response.status(200).json("댓글작성 성공")
}