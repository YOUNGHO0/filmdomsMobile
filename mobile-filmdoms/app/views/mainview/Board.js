import './Board.css'
import TabBoard from "@/app/views/mainview/TabContent";
export default async function Board(props){
    let recent = await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + '/api/v1/main/recent',{method: 'get'})
        .then(value => value.json())
    let movie = await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + '/api/v1/main/movie',{method: 'get'})
        .then(value => value.json())

    return (
        <div>
            <div className={"board-boardName"}>Board</div>
            <TabBoard recent = {recent} movie = {movie} ></TabBoard>
        </div>
    )
}