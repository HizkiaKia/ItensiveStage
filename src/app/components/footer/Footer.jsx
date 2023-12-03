"use client";
import React from "react";
import logo from "../../../../public/Group14.png";
import Image from "next/image";
import Link from "next/link";
import googlePlay from "@/assets/googlePlay.svg";
import appStore from "@/assets/appStore.svg";
import "@/app/components/footer/Footer.css"

const Footer = () => {
  return (
    <footer className="bg-white shadow-inner">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <ul className="grid grid-cols-5 mt-10">
          <li className="pt-2">
            <Image src={logo} />
          </li>
          <li className="">
            <p className="pb-6 text-gray-800 font-bold">Company</p>
           <p className="py-1">About</p>
           <p className="py-1">Press</p>
           <p className="py-1">Careers</p>
           <p className="py-1">Contact</p>
          </li>
          <li>
            <p className="pb-6 text-gray-800 font-bold">Support</p>
           <p className="py-1">Help Center</p>
           <p className="py-1">Terms of Service</p>
           <p className="py-1">Legal</p>
           <p className="py-1">Privacy Police</p>
          </li>
          <li>
            <p className="pb-6 text-gray-800 font-bold">Kerja Sama</p>
           <p className="py-1">Daftar Jadi Hoster</p>
           <p className="py-1">Hoster Terdaftar</p>
          </li>
          <li>
            <p className="pb-6 text-gray-800 font-bold">Get The App</p>
           <span className="grid grid-cols-2">
            <Link href="https://play.google.com/">
            <Image className="downloadG" src={googlePlay}/>
            </Link>
            <Link href="https://www.apple.com/id/app-store/">
            <Image className="downloadA" src={appStore}/>
            </Link>

           </span>
          </li>
        </ul>
      </div>
    </footer>
  );
};
export default Footer;
