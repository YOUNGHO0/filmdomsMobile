import {useInfiniteQuery, useQuery} from "@tanstack/react-query";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";
import {Chip, styled} from "@mui/material";
import Image from "next/image";
import InfiniteScroll from "react-infinite-scroll-component";
import {useState} from "react";
import BoardContentList from "@/app/board/[boardName]/BoardContentList";

export default function BoardContent(props){

    let boardName = props.boardName
    let tag = props.tag.tag


    const fetchData = (pageParam,boardName,tag)=>{
        return fetch(process.env.NEXT_PUBLIC_BACKEND_URL + `/api/v1/article/${boardName}?tag=${tag}&page=${pageParam}`,{method: 'get'})
            .then(value => value.json())
    }

    let {data,isLoading, isError,hasNextPage,fetchNextPage} = useInfiniteQuery( {initialPageParam: 0,queryKey:[boardName + ' '+ tag] , queryFn: ({pageParam})=>fetchData(pageParam,boardName,tag)

    ,getNextPageParam:(lastPage, pages)=>{

            console.log(lastPage);
            console.log(pages);
            if (lastPage.result.number < lastPage.result.totalPages-1)
            {
                return lastPage.result.number+1;
            }
            else
                return undefined;


    }
    })



    if (isLoading)
    {
        return (<div>loading...</div>)
    }


    if (isError){
        return(<div>에러발생{isError}</div>)
    }



    return (
        <div style={{marginLeft: '20px', marginRight: '20px', paddingTop: '16px '}}>
            <InfiniteScroll dataLength={data.pages.length} hasMore={hasNextPage} next={fetchNextPage} >
                {
                    data.pages.map((value)=>{
                        return(<BoardContentList contentList = {value.result.content}></BoardContentList>)
                    })
                }
            </InfiniteScroll>




        </div>
    )

}