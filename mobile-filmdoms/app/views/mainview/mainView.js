import Carousel from "@/app/views/mainview/Carousel";
import Board from "@/app/views/mainview/Board";
import FilmUniverse from "@/app/views/mainview/FilmUniverse";
import Critic from "@/app/views/mainview/Critic";
export default function MainView(){

    return (<div>
        <Carousel></Carousel>
        <Board></Board>
        <FilmUniverse></FilmUniverse>
        <Critic></Critic>
    </div>)
}
