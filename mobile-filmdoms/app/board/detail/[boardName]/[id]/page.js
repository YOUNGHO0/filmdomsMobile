import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";
import BoardDetailComponent from "@/app/board/detail/[boardName]/[id]/BoardDetailComponent";

export default async function page(props){

    let boardData = await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + `/api/v1/article/${props.params.boardName}/${props.params.id}`,{method: 'get'})
        .then(value => value.json())
    let commentData = await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + `/api/v1/article/${props.params.boardName}/${props.params.id}/comment`,{method: 'get'})
        .then(value => value.json())

    return (<div>
            <BoardDetailComponent boardName ={props.params.boardName} boardData = {boardData} commentData = {commentData}></BoardDetailComponent>
    </div>)
}