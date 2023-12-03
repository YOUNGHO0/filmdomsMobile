import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";
import axios from "axios";


function setCookieToHeader(response,cookie){

    let noDomainCookie = cookie.map((value,key)=>{
        return value.replace('.filmdoms.studio',"localhost")
    })
    process.env.NODE_ENV == 'development'?
        response.setHeader("set-cookie",[...noDomainCookie]):response.setHeader("set-cookie",[...cookie])

    return response
}

export default async function handler(request,response){

    let loginResult = await getLoginResult()
    let loginResultHeader = loginResult.headers.get("set-cookie")
    response = setCookieToHeader(response,loginResultHeader);

    let profileData = await getProfileResult()

    return response.status(200).json(profileData);

    //Todo: 중복되는 메서드를 하나의 추상적인 메서드로 리팩터링
    // 명시적인 파라미터로 받게 변경
    async function getLoginResult() {
        return await axios.post(process.env.NEXT_PUBLIC_BACKEND_URL + '/api/v1/account/login',
            request.body, {headers: {"Content-Type": `application/json`}})
            .catch(reason => handleRequestError(reason, response));
    }
    function getProfileResult() {
        return axios.get(process.env.NEXT_PUBLIC_BACKEND_URL + '/api/v1/account/profile', {
            headers: {
                Cookie: loginResultHeader
            }
        }).then(value => value.data);
    }

}

function handleRequestError(reason,response){
    return response.status(400).json("아이디 비밀번호가 일치하지 않습니다.");
}
function checkUserEmail(userEmail){

}

function checkUserPw(){

}

