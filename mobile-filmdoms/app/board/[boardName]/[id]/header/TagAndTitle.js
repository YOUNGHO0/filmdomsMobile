import {Chip} from "@mui/material";
import styles from "@/app/board/[boardName]/[id]/BoardDetailComponent.module.css";

const  chipStyle =
    {
        fontFamily:'Pretendard',
        borderRadius:'16px',
        textAlign:'center' ,
        fontWeight:'700',
        border:'2px black solid',
        fontSize:'12px',

    }
export default function TagDateAndTitle(props) {
    let boardData = props.boardData;
    let toDate =  props.toDate;
    return <div>
        <div style={{display: "flex", lineHeight:"32px"}}>
            <Chip style={chipStyle} label={boardData.category} variant={'outlined'}></Chip>
            <div className={styles.detailDate} style={{marginLeft:"16px"}}>{toDate(boardData.createdAt)}</div>
        </div>
        <div className={styles.title} style={{marginTop:"8px" , marginBottom:"16px"}}>{boardData.title}</div>
    </div>;
}