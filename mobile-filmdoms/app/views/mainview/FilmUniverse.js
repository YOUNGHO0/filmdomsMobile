import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";
import styles from './FilmUniverse.module.css'


export default async function FilmUniverse()
{
    let filmUniverse = await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + '/api/v1/main/film_universe',{method: 'get'})
        .then(value => value.json())

    const data = filmUniverse.result

    return(
        <div className={styles["filmUniverse"]}>
            <div className={styles["filmUniverse-boardName"]}> FilmUniverse</div>
            <div className={styles["filmUniverse-wrapper"]}>

                {
                    data.map((value,key)=>{
                        return(
                            <div className={styles["filmUniverse-lists"]}>
                                     <img className={styles["filmUniverse-mainImage"]} src={value.mainImage}/>
                                    <div className={styles["filmUniverse-title"]}>{value.title}</div>
                                    <div className={styles["filmUniverse-date"]}>{value.startAt} ~ {value.endAt}</div>
                            </div>
                        )
                    })
                }

            </div>
        </div>

    )
}