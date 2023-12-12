import axios from "axios";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";



export async function withCookiesTo(url,method,data,request) {

    switch (method){
        case 'GET':
            return await axiosGetWithCookies(url,data,request)
        case 'POST':
            return await axiosPostWithCookies(url,data,request)
        case 'PUT':
            return await axiosPutWithCookies(url,data,request)
        case 'DELETE':
            return await axiosDeleteWithCookies(url,data,request)
    }

}

async function axiosGetWithCookies(url,data,request){

    let result = await axios.get(process.env.NEXT_PUBLIC_BACKEND_URL + url
        , {
            headers: {
                Cookie: request.headers.cookie
            }
        })

    return result

}

async function axiosPostWithCookies(url,data,request){

    let result = await axios.post(process.env.NEXT_PUBLIC_BACKEND_URL + url,
        data,
        {
            headers: {
                Cookie: request.headers.cookie
            }
        })
    return result

}

async function axiosPutWithCookies(url,data,request){

    let result = await axios.put(process.env.NEXT_PUBLIC_BACKEND_URL + url,
        data,
        {
            data:data,
            headers: {
                Cookie: request.headers.cookie
            }
        })


    return result

}

async function axiosDeleteWithCookies(url,data,request){
    let result = await axios.delete(process.env.NEXT_PUBLIC_BACKEND_URL + url
        , {
            data:data,
            headers: {
                Cookie: request.headers.cookie
            }
        })
    return result

}

export function setCookieHeader(result, response){

    let cookie = result.headers.get("set-cookie")
    let noDomainCookie = cookie.map((value,key)=>{
        return value.replace('.filmdoms.studio',"localhost")
    })
    process.env.NODE_ENV  == 'development'?
        response.setHeader("set-cookie",[...noDomainCookie]):response.setHeader("set-cookie",[...cookie])
}
