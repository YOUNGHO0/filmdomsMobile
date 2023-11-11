import styles from "./ThisWeekCritic.module.css";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";
import CriticContentListWrapper from "@/app/board/critic/CriticContentListWrapper";
import CriticBoardContent from "@/app/board/critic/CriticBoardContent";

export default async function CriticContent(props){

    let result = await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + '/api/v1/critic/tag', {method: 'get'})
        .then(value => value.json())

    let all = {tag: '_ALL', description: "전체"};
    let tags = [all, ...result.result];
    return(
        <div>
            <div className={styles.criticText}>CRITIC</div>
            <div className={styles.filmNotice}>필름덤즈의 최신 비평들을 확인해 보세요!</div>
            <CriticContentListWrapper tags = {tags}></CriticContentListWrapper>
        </div>
    )


}