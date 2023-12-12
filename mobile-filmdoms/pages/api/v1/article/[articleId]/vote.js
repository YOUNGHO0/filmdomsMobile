import {withCookiesTo} from "@/app/util/apiUtil";

export default async function (req,res){

    await withCookiesTo(req.url,req.method,req.body,req).then(value => console.log(value))
    return res.status(200).json("성공")
}