import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";
import BoardDetailComponent from "@/app/board/detail/[boardName]/[id]/BoardDetailComponent";
import {getRequestWithCookiesTo} from "@/app/util/pageUtil";

export default async function page(props){


    let boardData = await getRequestWithCookiesTo(`/api/v1/article/${props.params.boardName}/${props.params.id}`,(value)=>value.data,(res)=>{console.log(res)});
    let commentData = await getRequestWithCookiesTo(`/api/v1/article/${props.params.boardName}/${props.params.id}/comment`,(value)=>value.data,(res)=>{console.log(res)});

    return (<div>
            <BoardDetailComponent boardName ={props.params.boardName} boardData = {boardData} commentData = {commentData}></BoardDetailComponent>
    </div>)
}