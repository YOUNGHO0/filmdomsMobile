import styles from './TabContentList.module.css'
import Link from "next/link";
export default function TabContentList(props){

    let data = props.data.result
    console.log(props);
    return (
        <div className={styles["content-list-wrapper"]}>
            {
                data.map((value, index) => {
                return(
                    <div key= {value.id} className={styles["tab-content"]}>
                        <div key= {value.id} className={`${styles.tag} ${value.tag === 'EVENT'? styles.tagEVENT:""}`}> {value.tag}</div>
                        <div key= {value.id} className={styles["tab-title"]}> <Link href={`/board/detail/${value.category}/${value.id}`}>{value.title} </Link> </div>
                        <div key= {value.id} className={styles["comment-count"]}> [{value.commentCount}]</div>
                    </div>
                )})
            }
        </div>
    )

}