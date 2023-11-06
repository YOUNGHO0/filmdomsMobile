
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";
import styles from './Critic.module.css'
import {Chip} from "@mui/material";
import Link from "next/link";

export default async function Critic(){

    let critic = await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + '/api/v1/main/critic',{method: 'get'})
        .then(value => value.json())

    const data = critic.result
    return(
        <div className={styles["critic"]}>
            <div className={styles["critic-boardName"]}>Critic</div>
            <div className={styles["critic-wrapper"]}>
                {
                    data.map((value,index)=>{
                        const timestamp = value.createdAt;
                        var myDate = new Date(timestamp);
                        let year = myDate.getFullYear();
                        let month = myDate.getMonth()+1;
                        let date = myDate.getDate();
                        return(
                            <Link href={`/board/detail/${value.category}/${value.id}`}>
                            <div>
                                <img className={styles["critic-mainImage"]} src={value.mainImage}/>
                                <div className={styles["critic-info"]}>
                                    <div className={styles["critic-author"]}>{value.author.nickname}</div>
                                    <Chip style={{border:"2px solid #AAAAAA",color: "#AAAAAA",fontFamily:"Pretendard", fontWeight:"700" }} variant="outlined" label={value.tag.split("_")[1]}/>
                                </div>
                                <div className={styles["critic-title"]}>{value.title}</div>
                                <div className={styles["critic-date"]}>{year + '.' + month + '.'+ date}</div>
                            </div>
                            </Link>
                        )
                    })
                }
            </div>


        </div>

    )
}