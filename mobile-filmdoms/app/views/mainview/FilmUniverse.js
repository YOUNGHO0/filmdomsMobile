import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";
import './FilmUniverse.css'


export default async function FilmUniverse()
{
    let filmUniverse = await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + '/api/v1/main/film_universe',{method: 'get'})
        .then(value => value.json())

    const data = filmUniverse.result

    return(
        <div className={"filmUniverse"}>
            <div className={"filmUniverse-boardName"}> FilmUniverse</div>
            <div className={"filmUniverse-wrapper"}>

                {
                    data.map((value,key)=>{
                        return(
                            <div className={"filmUniverse-lists"}>
                                     <img className={"filmUniverse-mainImage"} src={value.mainImage}/>
                                    <div className={"filmUniverse-title"}>{value.title}</div>
                                    <div className={"filmUniverse-date"}>{value.startAt} ~ {value.endAt}</div>
                            </div>
                        )
                    })
                }

            </div>
        </div>

    )
}