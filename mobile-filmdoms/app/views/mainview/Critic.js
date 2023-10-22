
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";
import './Critic.css'
import {Chip} from "@mui/material";

export default async function Critic(){

    let critic = await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + '/api/v1/main/critic',{method: 'get'})
        .then(value => value.json())

    const data = critic.result
    return(
        <div className={"critic"}>
            <div className={"critic-boardName"}>Critic</div>
            <div className={"critic-wrapper"}>
                {
                    data.map((value,index)=>{
                        const timestamp = value.createdAt;
                        var myDate = new Date(timestamp);
                        let year = myDate.getFullYear();
                        let month = myDate.getMonth()+1;
                        let date = myDate.getDate();
                        return(
                            <div>
                                <img className={"critic-mainImage"} src={value.mainImage}/>
                                <div className={"critic-info"}>
                                    <div className={"critic-author"}>{value.author.nickname}</div>
                                    <Chip style={{border:"2px solid #AAAAAA"}} variant="outlined" label={value.tag.split("_")[1]}/>
                                </div>
                                <div className={"critic-title"}>{value.title}</div>
                                <div className={"critic-date"}>{year + '.' + month + '.'+ date}</div>
                            </div>
                        )
                    })
                }
            </div>


        </div>

    )
}