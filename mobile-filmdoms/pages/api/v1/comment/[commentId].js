import {withCookiesTo} from "@/app/util/apiUtil";

export default async function (request,response){

    await withCookiesTo(request.url,request.method,request.body,request).then(value => console.log(value))
    return response.status(200).json("success")
}