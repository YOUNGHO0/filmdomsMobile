import Image from "next/image";
import {useRouter} from "next/navigation";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";

export function toDate(number){
    const timestamp = number;
    var myDate = new Date(timestamp);
    let year = myDate.getFullYear();
    let month = myDate.getMonth()+1;
    let date = myDate.getDate();
    return (year + '.' + month + '.'+ date)
}

export function BackButton(props) {

    const router = useRouter();

    return <div onClick={() => router.back()} style={{display: "flex"}}>
        <Image alt={"backButton"} src={'/buttonBack.svg'} width={28} height={28}></Image>
        <div style={{fontSize:"20px",fontFamily:"Pretendard",fontWeight:"700"}}> {props.title}</div>
    </div>;
}

export function ProfileImage(props){

    return   <Image  alt={"profileImage"} style={{marginRight:"6px", borderRadius:"100px"}} src={process.env.NEXT_PUBLIC_BACKEND_URL + '/image/' +props.uuidFileName} width={props.width} height={props.height}></Image>
}
