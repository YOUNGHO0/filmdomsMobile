import {withCookiesTo} from "@/app/util/apiUtil";

export default async function (request,response){

     let result = await withCookiesTo("/api/v1/account/profile/article",request.method,{},request)
         .then(value => value.data)
         .catch(()=>{})

    return response.status(200).json(result)
}