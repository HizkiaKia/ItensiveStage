"use client";
import "./list.css";
import Footer from "@/app/components/footer/Footer"
import Navbar from "@/app/components/navbar/Navbar";
import Header from "@/app/components/header/Header";
import { useLocation } from "react-router-dom";
import Link from "next/link";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "@/app/components/searchItem/SearchItem";
import Destinasi from "@/app/Destinasi/page";
import { IoFilter } from "react-icons/io5";
import CardList from "../components/cardList/cardList";
import Card from "../components/Card";
import { AiTwotoneStar } from "react-icons/ai";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import pantaiPantai from "@/assets/pantaiPantai.svg";
import Benoa from "@/assets/benoa.svg"
import Toba from "@/assets/toba.svg"
import Bromo from "@/assets/bromo.svg"
import Semeru from "@/assets/semeru.svg"
import Sumbing from "@/assets/sumbing.svg"
import Rebo from "@/assets/rebo.svg"
import Pergasingan from "@/assets/pergasingan.svg"
import Geopark from "@/assets/geopark.svg"

const List = () => {
  // const location = useLocation();
  // const [destination, setDestination] = useState(location.state.destination);
  // const [date, setDate] = useState(location.state.date);
  // const [options, setOptions] = useState(location.state.options);
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  return (
    <div>
      <div className="mt-16 justify-center">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="text-md mb-8 text-red-500 gap-2 flex">
              <IoFilter />
              Filter
            </h1>
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label>Destination</label>
              <input placeholder="" type="text" />
            </div>
            <div className="lsItem">
              <label>Check-in Date</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(
                date[0].startDate,
                "MM/dd/yyyy"
              )}`}</span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </div>
            <div className="lsItem">
              <label>Options</label>
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Min price <small>per night</small>
                  </span>
                  <input type="number" className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Max price <small>per night</small>
                  </span>
                  <input type="number" className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Adult</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={options.adult}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Children</span>
                  <input
                    type="number"
                    min={0}
                    className="lsOptionInput"
                    placeholder={options.children}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Room</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={options.room}
                  />
                </div>
              </div>
            </div>
            <button>Search</button>
          </div>
          <ul className="">
            <li>
              <div className="text-center grid lg:grid-cols-3 md:grid-cols-1 smgrid-cols-1 justify-center sm:justify-around gap-5   w-full mr-14">
                <div className="border-0 rounded-md">
                <Link href="/TanjungBenoa">
                  <div className="rounded-md ">
                    <Image
                      className="rounded-md"
                      src={Benoa}
                      alt="{title}"
                      priority
                      width="500"
                      height="500"
                    />
                    <div className="px-4 mt-2">
                     
                      <h3 className="font-semibold text-left text-lg">
                        Tanjuang Benoa, Bali
                      </h3>
                      <div className="py-6 text-left">
                        <div>Minimum Keberangkatan 10 Orang,</div>
                        <div>Syarat & Ketentuan Berlaku</div>
                      </div>
                      <ul className="flex justify-between">
                        <li className="flex">
                          <p className="text-red-500 font-semibold">
                            Rp. 2.000.000
                          </p>
                          <p>/Orang</p>
                        </li>
                        <li>
                          <p className="flex items-center ">
                            <FaStar className="text-yellow-500" /> 4.5
                          </p>
                        </li>
                      </ul>
                      
                      <div className="pt-14 pb-4">
                        <div className="border rounded-md bg-red-500">
                          <button className="my-1 w-full h-12 text-white">
                            Pesan Sekarang
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  </Link>
                </div>
                <div className="border-0 rounded-md">
                  <Link href="/RajaAmpat">
                  <div className="rounded-md ">
                    <Image
                      className="rounded-md"
                      src={pantaiPantai}
                      alt="{title}"
                      priority
                      width="500"
                      height="500"
                    />
                    <div className="px-4 mt-2">
                      <h3 className="font-semibold text-left text-lg">
                        Raja Ampat, Papua
                      </h3>
                      <div className="py-6 text-left">
                        <div>Minimum Keberangkatan 10 Orang,</div>
                        <div>Syarat & Ketentuan Berlaku</div>
                      </div>
                      <ul className="flex justify-between">
                        <li className="flex">
                          <p className="text-red-500 font-semibold">
                            Rp. 7.000.000
                          </p>
                          <p>/Orang</p>
                        </li>
                        <li>
                          <p className="flex items-center ">
                            <FaStar className="text-yellow-500" /> 4.8
                          </p>
                        </li>
                      </ul>
                      <div className="pt-14 pb-4">
                        <div className="border rounded-md bg-red-500">
                          <button className="my-1 w-full h-12 text-white">
                            Pesan Sekarang
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  </Link>
                </div>
                <div className="border-0 rounded-md">
                <Link href="/DanauToba">
                  <div className="rounded-md ">
                    <Image
                      className="rounded-md"
                      src={Toba}
                      alt="{title}"
                      priority
                      width="500"
                      height="500"
                    />
                    <div className="px-4 mt-2">
                      <h3 className="font-semibold text-left text-lg">
                       Danau Toba, Sumbar
                      </h3>
                      <div className="py-6 text-left">
                        <div>Minimum Keberangkatan 10 Orang,</div>
                        <div>Syarat & Ketentuan Berlaku</div>
                      </div>
                      <ul className="flex justify-between">
                        <li className="flex">
                          <p className="text-red-500 font-semibold">
                            Rp. 2.300.000
                          </p>
                          <p>/Orang</p>
                        </li>
                        <li>
                          <p className="flex items-center ">
                            <FaStar className="text-yellow-500" /> 4.4
                          </p>
                        </li>
                      </ul>
                      <div className="pt-14 pb-4">
                        <div className="border rounded-md bg-red-500">
                          <button className="my-1 w-full h-12 text-white">
                            Pesan Sekarang
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  </Link>
                </div>
              </div>
            </li>
            <li>
              <div className="text-center py-20 grid lg:grid-cols-3 md:grid-cols-1 smgrid-cols-1 justify-center sm:justify-around gap-5   w-full mr-14">
                <div className="border-0 rounded-md">
                <Link href="/GunungBromo">
                  <div className="rounded-md ">
                    <Image
                      className="rounded-md"
                      src={Bromo}
                      alt="{title}"
                      priority
                      width="500"
                      height="500"
                    />
                    <div className="px-4 mt-2">
                      <h3 className="font-semibold text-left text-lg">
                        Gunung Bromo
                      </h3>
                      <div className="py-6 text-left">
                        <div>Minimum Keberangkatan 10 Orang,</div>
                        <div>Syarat & Ketentuan Berlaku</div>
                      </div>
                      <ul className="flex justify-between">
                        <li className="flex">
                          <p className="text-red-500 font-semibold">
                            Rp. 1.200.000
                          </p>
                          <p>/Orang</p>
                        </li>
                        <li>
                          <p className="flex items-center ">
                            <FaStar className="text-yellow-500" /> 4.5
                          </p>
                        </li>
                      </ul>
                      <div className="pt-14 pb-4">
                        <div className="border rounded-md bg-red-500">
                          <button className="my-1 w-full h-12 text-white">
                            Pesan Sekarang
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  </Link>
                </div>
                <div className="border-0 rounded-md">
                <Link href="/GunungSemeru">
                  <div className="rounded-md ">
                    <Image
                      className="rounded-md"
                      src={Semeru}
                      alt="{title}"
                      priority
                      width="500"
                      height="500"
                    />
                    <div className="px-4 mt-2">
                      <h3 className="font-semibold text-left text-lg">
                        Gunung Semeru
                      </h3>
                      <div className="py-6 text-left">
                        <div>Minimum Keberangkatan 10 Orang,</div>
                        <div>Syarat & Ketentuan Berlaku</div>
                      </div>
                      <ul className="flex justify-between">
                        <li className="flex">
                          <p className="text-red-500 font-semibold">
                            Rp. 3.000.000
                          </p>
                          <p>/Orang</p>
                        </li>
                        <li>
                          <p className="flex items-center ">
                            <FaStar className="text-yellow-500" /> 4.5
                          </p>
                        </li>
                      </ul>
                      <div className="pt-14 pb-4">
                        <div className="border rounded-md bg-red-500">
                          <button className="my-1 w-full h-12 text-white">
                            Pesan Sekarang
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  </Link>
                </div>
                <div className="border-0 rounded-md">
                <Link href="/GunungSumbing">
                  <div className="rounded-md ">
                    <Image
                      className="rounded-md"
                      src={Sumbing}
                      alt="{title}"
                      priority
                      width="500"
                      height="500"
                    />
                    <div className="px-4 mt-2">
                      <h3 className="font-semibold text-left text-lg">
                        Gunung Sumbing
                      </h3>
                      <div className="py-6 text-left">
                        <div>Minimum Keberangkatan 10 Orang,</div>
                        <div>Syarat & Ketentuan Berlaku</div>
                      </div>
                      <ul className="flex justify-between">
                        <li className="flex">
                          <p className="text-red-500 font-semibold">
                            Rp. 2.500.000
                          </p>
                          <p>/Orang</p>
                        </li>
                        <li>
                          <p className="flex items-center ">
                            <FaStar className="text-yellow-500" /> 4.3
                          </p>
                        </li>
                      </ul>
                      <div className="pt-14 pb-4">
                        <div className="border rounded-md bg-red-500">
                          <button className="my-1 w-full h-12 text-white">
                            Pesan Sekarang
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  </Link>
                </div>
              </div>
            </li>
            <li>
              <div className="text-center pb-10 grid lg:grid-cols-3 md:grid-cols-1 smgrid-cols-1 justify-center sm:justify-around gap-5  w-full mr-14">
                <div className="border-0 rounded-md">
                <Link href="/DesaWaeRebo">
                  <div className="rounded-md ">
                    <Image
                      className="rounded-md"
                      src={Rebo}
                      alt="{title}"
                      priority
                      width="500"
                      height="500"
                    />
                    <div className="px-4 mt-2">
                      <h3 className="font-semibold text-left text-lg">
                        Desa Wae Rebo, Flores
                      </h3>
                      <div className="py-6 text-left">
                        <div>Minimum Keberangkatan 10 Orang,</div>
                        <div>Syarat & Ketentuan Berlaku</div>
                      </div>
                      <ul className="flex justify-between">
                        <li className="flex">
                          <p className="text-red-500 font-semibold">
                            Rp. 5.000.000
                          </p>
                          <p>/Orang</p>
                        </li>
                        <li>
                          <p className="flex items-center ">
                            <FaStar className="text-yellow-500" /> 4.6
                          </p>
                        </li>
                      </ul>
                      <div className="pt-14 pb-4">
                        <div className="border rounded-md bg-red-500">
                          <button className="my-1 w-full h-12 text-white">
                            Pesan Sekarang
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  </Link>
                </div>
                <div className="border-0 rounded-md">
                <Link href="/BukitPergasingan">
                  <div className="rounded-md ">
                    <Image
                      className="rounded-md"
                      src={Pergasingan}
                      alt="{title}"
                      priority
                      width="500"
                      height="500"
                    />
                    <div className="px-4 mt-2">
                      <h3 className="font-semibold text-left text-lg">
                        Bukit Pergasingan, Lombok
                      </h3>
                      <div className="py-6 text-left">
                        <div>Minimum Keberangkatan 10 Orang,</div>
                        <div>Syarat & Ketentuan Berlaku</div>
                      </div>
                      <ul className="flex justify-between">
                        <li className="flex">
                          <p className="text-red-500 font-semibold">
                            Rp. 5.000.000
                          </p>
                          <p>/Orang</p>
                        </li>
                        <li>
                          <p className="flex items-center ">
                            <FaStar className="text-yellow-500" /> 4.5
                          </p>
                        </li>
                      </ul>
                      <div className="pt-14 pb-4">
                        <div className="border rounded-md bg-red-500">
                          <button className="my-1 w-full h-12 text-white">
                            Pesan Sekarang
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  </Link>
                </div>
                <div className="border-0 rounded-md">
                <Link href="/GeoparkCiletuh">
                  <div className="rounded-md ">
                    <Image
                      className="rounded-md"
                      src={Geopark}
                      alt="{title}"
                      priority
                      width="500"
                      height="500"
                    />
                    <div className="px-4 mt-2">
                      <h3 className="font-semibold text-left text-lg">
                        Geopark Ciletuh, Sukabumi
                      </h3>
                      <div className="py-6 text-left">
                        <div>Minimum Keberangkatan 10 Orang,</div>
                        <div>Syarat & Ketentuan Berlaku</div>
                      </div>
                      <ul className="flex justify-between">
                        <li className="flex">
                          <p className="text-red-500 font-semibold">
                            Rp. 4.000.000
                          </p>
                          <p>/Orang</p>
                        </li>
                        <li>
                          <p className="flex items-center ">
                            <FaStar className="text-yellow-500" /> 4.5
                          </p>
                        </li>
                      </ul>
                      <div className="pt-14 pb-4">
                        <div className="border rounded-md bg-red-500">
                          <button className="my-1 w-full h-12 text-white">
                            Pesan Sekarang
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  </Link>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      
    </div>
    
  );
};

export default List;
