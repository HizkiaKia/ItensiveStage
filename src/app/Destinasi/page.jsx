"use client";
import Navbar from "@/app/components/navbar/Navbar";
import List from "../List/page";
import Image from "next/image";
import Link from "next/link";
import kotakMerah from "@/assets/kotakMerah.svg";
import DropDown from "../components/dropDown/DropDown";
import Footer from "@/app/components/footer/Footer";
import FooterHitam from "../components/footerHitam/FooterHitam";

export default function Destinasi() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="border-b border-gray-300 w-auto mx-14 relative ">
        <h1 className="font-bold text-4xl mb-2 mt-20">Semua Tur</h1>
        <Image className="absolute left-0 bottom-0" src={kotakMerah} />
        <div className="absolute right-0 bottom-2">
          <div className="font-semibold">
            Urutkan
            <DropDown className="" />
          </div>
        </div>
      </div>
      <div className="mx-14">
        <List />
        <div className="?">
        <div className="border-0 relative w-full h-10">
          <ul className="grid-cols-7 absolute top-1 right-36 flex gap-8">
            <li>-</li>
            <li className="border-0 bg-red-500 py-1 px-3 rounded-md text-white text-center">1</li>
            <Link href="/2">
            <li className="border-0 hover:bg-red-400 py-1 px-3 rounded-md text-black text-center">2</li>
            </Link>
            <Link href="/3">
            <li className="border-0 hover:bg-red-400 py-1 px-3 rounded-md text-black text-center">3</li>
            </Link>
            <Link href="/4">
            <li className="border-0 hover:bg-red-400 py-1 px-3 rounded-md text-black text-center">4</li>
            </Link>
            <Link href="/5">
            <li className="border-0 hover:bg-red-400 py-1 px-3 rounded-md text-black text-center">5</li>
            </Link>
            <Link href="/2">
            <li>+</li>
            </Link>
          </ul>
          <div className="flex absolute right-0"><div className="group relative inline-block">
        <button className="outline-none focus:outline-none border-2 border-gray-500 px-3 py-1 hover:bg-gray-300 bg-white rounded-lg flex items-center min-w-32">
          <span className="pr-1 font-normal flex-1">Page</span>
          <span>
            <svg
              className="fill-current h-4 w-4 transform group-hover:-rotate-180
  transition duration-150 ease-in-out"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </span>
        </button>
        <ul
          className="bg-white border rounded-sm transform scale-0 group-hover:scale-100 absolute 
  transition duration-150 ease-in-out origin-top min-w-32"
        >        
          <li className="rounded-sm px-3 py-1 hover:bg-gray-300">1</li>
          <Link href="/2">
          <li className="rounded-sm px-3 py-1 hover:bg-gray-300">2</li>
          </Link>
          <Link href="/3">
          <li className="rounded-sm px-3 py-1 hover:bg-gray-300">3</li>
          </Link>
          <Link href="/4">
          <li className="rounded-sm px-3 py-1 hover:bg-gray-300">4</li>
          </Link>
          <Link href="/5">
          <li className="rounded-sm px-3 py-1 hover:bg-gray-300">5</li>
          </Link>
        </ul>
      </div>
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n  /* since nested groupes are not supported we have to use \n     regular css for the nested dropdowns \n  */\n  li>ul                 { transform: translatex(100%) scale(0) }\n  li:hover>ul           { transform: translatex(101%) scale(1) }\n  li > button svg       { transform: rotate(-90deg) }\n  li:hover > button svg { transform: rotate(-270deg) }\n\n  /* Below styles fake what can be achieved with the tailwind config\n     you need to add the group-hover variant to scale and define your custom\n     min width style.\n  \t See https://codesandbox.io/s/tailwindcss-multilevel-dropdown-y91j7?file=/index.html\n  \t for implementation with config file\n  */\n  .group:hover .group-hover\\:scale-100 { transform: scale(1) }\n  .group:hover .group-hover\\:-rotate-180 { transform: rotate(180deg) }\n  .scale-0 { transform: scale(0) }\n  .min-w-32 { min-width: 8rem }\n",
        }}
      /></div>
        </div>
        </div>
      </div>
      <Footer />
      <FooterHitam/>
    </>
  );
}
