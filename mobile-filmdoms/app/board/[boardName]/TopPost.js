import styles from './TopPost.module.css'
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";
import TopPostList from "@/app/board/[boardName]/TopPostList";

export default async function TopPost(){

    const topPostData = await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + '/api/v1/article/top-posts',{method: 'get'})
        .then(value => value.json())
    console.log(topPostData);

    return (
            <TopPostList data = {topPostData.result}></TopPostList>
    )
}