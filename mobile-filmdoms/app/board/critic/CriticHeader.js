import Image from "next/image";

export default function CriticHeader() {

    return <div>
            <Image src={'/critic/criticHeader.png'} alt={"hello"} width={0} height={0} sizes={"100vw"} style={{width:"100%" , height:"auto"}}></Image>
        </div>




}