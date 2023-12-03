import {withCookiesTo} from "@/app/util/apiUtil";

export default async function handler(request,response) {

    console.log(request.body);
    await withCookiesTo("/api/v1/account/profile/password", request.method, {oldPassword: request.body.oldPassword,newPassword:request.body.newPassword}, request)
        .then(value => console.log(value))
        .catch(reason => response.status(400).json("다른 비밀번호를 입력해 주세요"))

    return response.status(200).json("성공")
}
