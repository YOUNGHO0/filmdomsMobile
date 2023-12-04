import axios from "axios";
import UserProfile from "@/app/user/UserProfile";

export default async function User(props){

    let userId = props.searchParams.id;
    let profileResult = await axios.get(process.env.NEXT_PUBLIC_BACKEND_URL + "/api/v1/account/profile/"+ userId)
        .then(value => value.data)
    let writtenArticle = await axios.get(process.env.NEXT_PUBLIC_BACKEND_URL + "/api/v1/account/profile/"+ userId +"/article")
        .then(value => value.data)
    let writtenComment = await axios.get(process.env.NEXT_PUBLIC_BACKEND_URL + "/api/v1/account/profile/"+ userId +"/comment")
        .then(value => value.data)

    return <div>
        <UserProfile writtenArticles = {writtenArticle.result.articles} writtenComments={writtenComment.result.comments} profileResult={profileResult}></UserProfile>
    </div>
}