export default function handler(request,response){

    console.log("프로필 요청)")

    return response.status(200).json("성공")
}