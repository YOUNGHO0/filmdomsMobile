import styles from "@/app/views/mainview/Critic.module.css";
import Link from "next/link";
import {Chip} from "@mui/material";

export default function CriticContentList(props){

    let data = props.data;

    return(
        <div className={styles["critic"]}>
            <div className={styles["critic-wrapper"]}>
                {
                    data.map((value,index)=>{
                        const timestamp = value.createdAt;
                        let myDate = new Date(timestamp);
                        let year = myDate.getFullYear();
                        let month = myDate.getMonth()+1;
                        let date = myDate.getDate();
                        return(
                            <Link key={value.id} href={`/board/detail/${value.category}/${value.id}`}>
                                <div>
                                    <img className={styles["critic-mainImage"]} src={value.mainImage}/>
                                    <div className={styles["critic-info"]}>
                                        <div className={styles["critic-author"]}>{value.author.nickname}</div>
                                        <Chip style={{border:"2px solid #FF5414",backgroundColor:"#FF5414",color: "white",fontFamily:"Pretendard", fontWeight:"700" }} variant="outlined" label={value.tag.split("_")[1]}/>
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