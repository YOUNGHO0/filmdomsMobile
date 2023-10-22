import './TabContentList.css'
export default function TabContentList(props){

    let data = props.data.result
    return (
        <div className={"content-list-wrapper"}>
            {
                data.map((value, index) => {
                return(
                    <div key= {value.id} className={"tab-content"}>
                        <div key= {value.id} className={"tag " + value.tag}> {value.tag}</div>
                        <div key= {value.id} className={"tab-title"}> {value.title}</div>
                        <div key= {value.id} className={"comment-count"}> [{value.commentCount}]</div>
                    </div>
                )})
            }
        </div>
    )

}