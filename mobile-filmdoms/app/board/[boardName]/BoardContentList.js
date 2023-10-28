import {Chip} from "@mui/material";
import Image from "next/image";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";
import styles from './BoardContentList.module.css'
const  chipStyle =
    {
        fontFamily:'Pretendard',
        borderRadius:'16px',
        textAlign:'center' ,
        fontWeight:'700',
        border:'2px black solid',
        fontSize:'12px',

    }

function toDate(number){
    const timestamp = number;
    var myDate = new Date(timestamp);
    let year = myDate.getFullYear();
    let month = myDate.getMonth()+1;
    let date = myDate.getDate();
    return (year + '.' + month + '.'+ date)
}
function drawTagAndDate(value) {
    return <div className={styles["boardContent-tdWrapper"]} style={{display: "flex"}}>
        <Chip style={chipStyle} label={value.tag} variant={'outlined'}></Chip>
        <div className={styles["boardContent-date"]}> {toDate(value.createdAt)}</div>
    </div>;
}

function drawTitle(value) {
    return <div style={{display: "flex", marginBottom: '14px'}}>
        <div className={styles.title} style={{paddingLeft: '5 px'}}>{value.title}</div>
        <div className={styles.commentCount}>{value.commentCount}</div>
    </div>;
}

function drawAuthorAndViewVote(value) {
    return <div>
        <div style={{display: "flex"}}>
            <Image style={{borderRadius: '100px'}}
                   src={process.env.NEXT_PUBLIC_BACKEND_URL + '/image/' + value.author.profileImage.uuidFileName}
                   width={22} height={22}></Image>
            <div className={styles["boardContent-nickname"]}>{value.author.nickname}</div>
            <div style={{display: 'flex', marginLeft: 'auto', textAlign: 'right'}}>
                <div className={styles["boardContent-view"]}>조회수</div>
                <div className={styles["boardContent-viewCount"]}>{value.views}</div>
                <div className={styles["boardContent-vote"]}>추천</div>
                <div className={styles["boardContent-voteCount"]}>{value.likes}</div>
            </div>
        </div>
        <hr></hr>

    </div>;
}



export default  function BoardContentList(props){

    return(
        <div>
            {
                props.contentList.map((value)=>{
                    return (
                        <div>
                            {drawTagAndDate(value)}
                            {drawTitle(value)}
                            {drawAuthorAndViewVote(value)}
                        </div>
                    )
                })
            }
        </div>



    );


}