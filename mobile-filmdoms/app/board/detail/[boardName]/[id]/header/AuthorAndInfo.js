import Image from "next/image";
import styles from "@/app/board/detail/[boardName]/[id]/BoardDetailComponent.module.css";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";
import Link from "next/link";

export default function AuthorAndInfo(props) {
    let boardData = props.boardData;
    let commentCount = props.commentCount

    return <div>
        <div style={{display: "flex"}}>
            <Link href={"/user?id="+boardData.author.id} style={{display:"flex"}}>
            <Image  alt={"profileImage"} style={{marginRight:"6px", borderRadius:"100px"}} src={process.env.NEXT_PUBLIC_BACKEND_URL + '/image/' +boardData.author.profileImage.uuidFileName} width={22} height={22}></Image>
            <div className={styles.nickName }>{boardData.author.nickname}</div>
            </Link>
            <div style={{marginLeft:"auto",  display:"flex"}}>
                <div className={styles.detailInfo}>조회수</div>
                <div className={`${styles.detailInfo} ${styles.detailColor}`}>{boardData.views}</div>
                <div className={styles.detailInfo}>추천수</div>
                <div className={`${styles.detailInfo} ${styles.detailColor}`}>{boardData.likes}</div>
                <div className={styles.detailInfo}>댓글</div>
                <div className={`${styles.detailInfo} ${styles.detailColor}`}>{commentCount}</div>
            </div>

        </div>
        <hr style={{marginTop:"15px"}}></hr>
    </div>
}
