import UserActivity from "@/app/mypage/activity/UserActivity";
import {
    fetchProfile,
    fetchWrittenArticles,
    fetchWrittenComments,
    getRequestWithCookiesTo,
    withRefreshToken
} from "@/app/util/pageUtil";


export default async function page(){

    let writtenArticles = await getRequestWithCookiesTo('/api/v1/account/profile/article',(value)=>value.data,
        ()=> withRefreshToken(fetchWrittenArticles,()=>{console.log("마이페이지 예외처리 완료")}))
    let writtenComments = await getRequestWithCookiesTo('/api/v1/account/profile/comment',(value)=>value.data,
        ()=> withRefreshToken(fetchWrittenComments,()=>{console.log("마이페이지 예외처리 완료")}))
    console.log(writtenArticles)
    return<div>
         <UserActivity writtenArticles={writtenArticles} writtenComments={writtenComments}></UserActivity>
    </div>
}