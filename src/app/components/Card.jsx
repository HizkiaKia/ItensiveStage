import Image from "next/image";
import {AiTwotoneStar} from 'react-icons/ai'
import pantaiPantai from "@/assets/pantaiPantai.svg"

export default function Card({
    image,
    title,
    popularity,
    overview
}){
    ''
    return(
        <>
        <div className="rounded-md bg-gray-200">
            <Image className="rounded-t-md" src={pantaiPantai} alt="{title}" priority width="500" height="500" />
            <div className="px-2 mt-2">
                <h3 className="font-semibold text-lg">tittle</h3>
                <div>
                    hjkl
                </div>
                <p className="flex items-center gap-3"><AiTwotoneStar /> popularity</p>
            </div>
        </div>
        </>
    )
}