"use client";
import Image from "next/image";
import logoImage from "../../public/Group14.svg"
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import  Link  from "next/link";

export default function Home() {
  return( 
  <>
  <div class="animasi">
  <style
  dangerouslySetInnerHTML={{
    __html:
      "\n      @keyframes slideInLeft {\n        0% {\n          transform: translatey(300%);\n        }\n        100% {\n          transform: translate(0);\n        }\n      }\n      .animasi {\n        animation: 1s ease-out 0s 1 slideInLeft;\n       \n     "
  }}
/>

 <div className="justify-center mt-40 flex flex-col mx-auto my-auto items-center border-0 border-black h-60 w-100">
<div className=" justify-center items-center ">
  
 <Image src={logoImage} className="my-auto mx-auto  w-80 " alt="OPEN TRIP Logo" />
 <Link href="/Home">
 <MdKeyboardDoubleArrowDown className="mx-auto my-auto w-20 h-20 animate-bounce mt-5"/>
 </Link>
 </div>
 </div>
 </div>
  </>
  );
}
