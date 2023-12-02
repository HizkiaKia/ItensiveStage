"use client";
import Image from "next/image";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  faBed,
  faCalendarDays,
  faCar,
  faPerson,
  faPlane,
  faMap,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GrLocation } from "react-icons/gr";
import bgImageDestinasi from "@/assets/bgImageDestinasi.svg";
import Navbar from "@/app/components/navbar/Navbar";
import ButtonCounter from "../components/buttonCounter/ButtonCounter";

export default function Detail() {
  const [date, setDate] = useState(new Date());
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });
  function sayHello() {
    alert("Silahkan Klik Pada Tanggal Untuk Mengubahnya !");
  }
  function sayAlert() {
    alert("!!! SUCCESS !!!");
  }
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className=" relative w-full flex h-full">
        <div className="absolute w-full flex top-0 left-0">
          <Image src={bgImageDestinasi} className="" />
        </div>
        <div style={{ width: "55%" }} className="absolute right-0 top-0">
          <div className="border-0 h-full w-full relative">
            <div className="ml-4 mt-10 mr-10">
              <div className="flex text-sm border-b border-gray pb-2 gap-2">
                <p className="text-red-500">Destinasi</p>
                <p className="">/</p>
                <p className="text-red-500">Jawa Timur</p>
              </div>
              <h1 className="text-5xl font-semibold text-gray-800 mt-8">
                Gunung Bromo
              </h1>
              <p className="pb-5 text-gray-400">
                Minimum Keberangkatan 10 Orang, Syarat & Ketentuan Berlaku
              </p>
              <div className="border flex justify-between py-4">
                <DatePicker
                  className="pl-4"
                  selected={date}
                  isClearable
                  closeOnScroll={(e) => e.target === document}
                  onChange={(date) => setDate(date)}
                />
                <div className="relative justify-center flex">
                  <div
                    onClick={sayHello}
                    className="mr-4 gap-2 text-red-500 font-semibold flex items-center"
                  >
                    <FontAwesomeIcon icon={faCalendarDays} />
                    <p>Lihat Jadwal Lain</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between pt-6">
                <div className="flex items-center gap-1">
                  <GrLocation className="text-red-500 text-xl font-bold " />
                  <p>Titik Penjemputan</p>
                </div>
                <div>
                  <div className="group relative inline-block">
                    <button className="outline-none focus:outline-none border border-gray-400 px-3 py-1 hover:bg-gray-300 bg-white rounded-lg flex items-center min-w-32">
                      <span className="pr-1 font-normal flex-1">
                        MOS - Mall Of Serang
                      </span>
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
                      <li className="rounded-sm px-3 py-1 hover:bg-gray-300">
                        MOS - Mall Of Serang
                      </li>
                      <li className="rounded-sm px-3 py-1 hover:bg-gray-300">
                        MOS - Mall Of Serang
                      </li>
                      <li className="rounded-sm px-3 py-1 hover:bg-gray-300">
                        MOS - Mall Of Serang
                      </li>
                    </ul>
                  </div>
                  <style
                    dangerouslySetInnerHTML={{
                      __html:
                        "\n  /* since nested groupes are not supported we have to use \n     regular css for the nested dropdowns \n  */\n  li>ul                 { transform: translatex(100%) scale(0) }\n  li:hover>ul           { transform: translatex(101%) scale(1) }\n  li > button svg       { transform: rotate(-90deg) }\n  li:hover > button svg { transform: rotate(-270deg) }\n\n  /* Below styles fake what can be achieved with the tailwind config\n     you need to add the group-hover variant to scale and define your custom\n     min width style.\n  \t See https://codesandbox.io/s/tailwindcss-multilevel-dropdown-y91j7?file=/index.html\n  \t for implementation with config file\n  */\n  .group:hover .group-hover\\:scale-100 { transform: scale(1) }\n  .group:hover .group-hover\\:-rotate-180 { transform: rotate(180deg) }\n  .scale-0 { transform: scale(0) }\n  .min-w-32 { min-width: 8rem }\n",
                    }}
                  />
                </div>
              </div>
              <div className="pt-6">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.087627827994!2d106.17933717440862!3d-6.11890636000151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e418ad5ed6343b3%3A0xdcca547b25249e48!2sMall%20Of%20Serang!5e0!3m2!1sid!2sid!4v1701354938943!5m2!1sid!2sid"
                  width="100%"
                  height="450"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="pt-10">
                <div className="relative h-10 ">
                  <p className="absolute top-0 left-0">
                    Harga berdasarkan jumlah orang
                  </p>
                  <div className="absolute right-0 bottom-0">
                    <div className="flex">
                      <p className="text-red-500 font-semibold">
                        Rp. 1.200.000
                      </p>
                      <p>/Orang</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-red-500 h-2.5 rounded-full"
                    style={{ width: "30%" }}
                  />
                </div>
                <p className="text-gray-800 text-sm pt-1">
                  3 dari 10 kuota sudah terisi
                </p>
              </div>
              <div className="custom-number-input flex gap-2 items-center pt-5 pb-20 w-32">
                <div>
                  <div className="flex border h-14 border-gray-400 flex-row w-full rounded-lg relative bg-transparent mt-1">
                    <button
                      data-action="decrement"
                      className=" text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
                    >
                      <span className="m-auto text-2xl font-bold">−</span>
                    </button>
                    <input
                      type="number"
                      className="outline-none focus:outline-none text-center w-full  font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  "
                      name="custom-input-number"
                      defaultValue={1}
                    />
                    <button
                      data-action="increment"
                      className=" text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
                    >
                      <span className="m-auto text-2xl text-red-500 font-bold">
                        +
                      </span>
                    </button>
                  </div>
                  <style
                    dangerouslySetInnerHTML={{
                      __html:
                        "\n  input[type='number']::-webkit-inner-spin-button,\n  input[type='number']::-webkit-outer-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n  }\n\n  .custom-number-input input:focus {\n    outline: none !important;\n  }\n\n  .custom-number-input button:focus {\n    outline: none !important;\n  }\n",
                    }}
                  />
                </div>
                <div className="">
                  <button onClick={sayAlert}>
                    <div className="border-0 bg-red-500 rounded-md h-14 w-40 flex">
                      <p className="m-auto text-white font-semibold">
                        Pesan Sekarang
                      </p>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
