import CriticHeader from "@/app/board/critic/CriticHeader";
import ThisWeekCritic from "@/app/board/critic/ThisWeekCritic";
import CriticContent from "@/app/board/critic/CriticContent";

export default function critic(){

    return(
        <div>
            <CriticHeader></CriticHeader>
            <ThisWeekCritic></ThisWeekCritic>
            <CriticContent></CriticContent>
        </div>
    )
}