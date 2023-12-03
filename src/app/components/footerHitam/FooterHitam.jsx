import Link from "next/link"
import Image from "next/image"
import Instagram from "@/assets/instagram.svg";
import Twitter from "@/assets/twitter.svg";
import Youtube from "@/assets/youtube.svg";

export default function FooterHitam(){
    return(
        <div className="relative grid-cols-2 border-0 m-auto h-16 w-full justify-between bg-black mx-0">
        <div className="absolute top-5 bottom-5 right-14">
          <ul className="flex grid-cols-3">
            <li>
              <Link href="instagram.com">
              <Image src={Instagram} />
              </Link>
            </li>
            <li className="mx-3">
              <Link href="twitter.com">
              <Image src={Twitter} />
              </Link>
            </li>
            <li>
              <Link href="youtube.com">
              <Image src={Youtube} />
              </Link>
            </li>
          </ul>
        </div>
        <p className=" absolute text-white text-sm left-14 top-5 bottom-5">
          © 2023 OPENTRIP. All rights reserved
        </p>
      </div>
    )
}