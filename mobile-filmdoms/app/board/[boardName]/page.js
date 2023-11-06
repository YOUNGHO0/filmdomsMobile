import BoardComponent from "@/app/board/[boardName]/BoardComponent";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";
import styles from './Page.module.css'
import TopPost from "@/app/board/[boardName]/TopPost";


async function getTags(boardTitle) {
    let result = await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + '/api/v1/' + boardTitle + '/tag', {method: 'get'})
        .then(value => value.json())

    let all = {tag: 'ALL', description: "전체"};
    let tags = [all, ...result.result];
    return tags;

}
export default async function movie(props){


    let boardTitle = props.params.boardName;
    let tags = await getTags(boardTitle);
    return(
        <div style={{backgroundColor : '#F7F7F5'}}>
            <div className={styles["boardPage-title"]}>
                {boardTitle}
            </div>
            <BoardComponent tags = {tags} boardName = {boardTitle}>
                <TopPost></TopPost>
            </BoardComponent>

        </div>
    )

}

