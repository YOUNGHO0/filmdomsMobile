import axios from "axios";


async function axiosGetWithCookies(url,data,request){

    let result = await axios.get(process.env.NEXT_PUBLIC_BACKEND_URL + url
        , data
        , {
            headers: {
                Cookie: request.headers.cookie
            }
        })


    return result

}

async function axiosPostWithCookies(url,data,request){

    let result = await axios.post(process.env.NEXT_PUBLIC_BACKEND_URL + url
        , data
        , {
            headers: {
                Cookie: request.headers.cookie
            }
        })
    return result

}

async function axiosPutWithCookies(url,data,request){

    let result = await axios.put(process.env.NEXT_PUBLIC_BACKEND_URL + url
        , data
        , {
            headers: {
                Cookie: request.headers.cookie
            }
        })


    return result

}

async function axiosDeleteWithCookies(url,data,request){

    let result = await axios.delete(process.env.NEXT_PUBLIC_BACKEND_URL + url
        , data
        , {
            headers: {
                Cookie: request.headers.cookie
            }
        })
    return result

}


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