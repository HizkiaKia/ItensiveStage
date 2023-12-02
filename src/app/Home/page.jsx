"use client";
import Head from "next/head";
import Image from "next/image";
import Featured from "@/app/components/featured/Featured";
import FeaturedProperties from "@/app/components/featuredProperties/FeaturedProperties";
import Footer from "@/app/components/footer/Footer";
import Header from "@/app/components/header/Header";
import MailList from "@/app/components/mailList/MailList";
import PropertyList from "@/app/components/propertyList/PropertyList";
import Navbar from "@/app/components/navbar/Navbar";
import bgFooterHome from "@/assets/bgFooterHome.svg";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";
import Kelingking from "@/assets/kelingking.svg"
import pantaiPantai from "@/assets/pantaiPantai.svg";
import Pandawa from "@/assets/pandawa.svg";
import Belitung from "@/assets/belitung.svg";
import Meno from "@/assets/meno.svg";
import Benoa from "@/assets/benoa.svg";
import Toba from "@/assets/toba.svg";
import Bromo from "@/assets/bromo.svg";
import Semeru from "@/assets/semeru.svg";
import Sumbing from "@/assets/sumbing.svg";
import Rebo from "@/assets/rebo.svg";
import Pergasingan from "@/assets/pergasingan.svg";
import Geopark from "@/assets/geopark.svg";
import { FaStar } from "react-icons/fa";
import "@/app/Home/page.css";

export default function Home() {
  function sayAlert() {
    alert(
      "If you want to download the application, click the Get The App icon in the footer."
    );
  }
  return (
    <div class="animasi">
      {/* <style
  dangerouslySetInnerHTML={{
    __html:
      "\n      @keyframes slideInLeft {\n        0% {\n          transform: translatex(100%);\n        }\n        100% {\n          transform: translate(0);\n        }\n      }\n      .animasi {\n        animation: 1s ease-out 0s 1 slideInLeft;\n       \n      }\n      \n    "
  }}
/> */}

      <header>
        <Navbar />
      </header>
      <div className="">
        <Header />
      </div>
      <main className="mx-14 mt-40">
        {/* 1 */}
        <div>
          <div className="flex items-center justify-between">
            <h1 className="text-4xl">Destinasi Populer</h1>
            <div className="">
              <Link
                href="/Destinasi"
                className="flex gap-1 text-red-500 items-center"
              >
                <p className="">Lihat Liburan Lainnya</p>
                <IoIosArrowRoundForward className="text-3xl text-center" />
              </Link>
            </div>
          </div>
          {/* Overflow Component */}
          <div className="pt-5">
          <div className="flex overflow-x-auto space-x-8 w-full gap-4 ">
            <section className="flex-shrink-0 shadow-2xl rounded-md border-0">
            <div className="border-0 w-80 rounded-md">
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
            </section>
            <section className="flex-shrink-0 shadow-2xl rounded-md border-0">
            <div className="border-0 w-80 rounded-md">
                <Link href="/TanjungBenoa">
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
            </section>
            <section className="flex-shrink-0 shadow-2xl rounded-md border-0">
            <div className="border-0 w-80 rounded-md">
                <Link href="/TanjungBenoa">
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
            </section>
            <section className="flex-shrink-0 shadow-2xl rounded-md border-0">
            <div className="border-0 w-80 rounded-md">
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
                        Gunung Bromo
                      </h3>
                      <div className="py-6 text-left">
                        <div>Minimum Keberangkatan 10 Orang,</div>
                        <div>Syarat & Ketentuan Berlaku</div>
                      </div>
                      <ul className="flex justify-between">
                        <li className="flex">
                          <p className="text-red-500 font-semibold">
                            Rp. 1.500.000
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
            </section>
            <section className="flex-shrink-0 shadow-2xl rounded-md border-0">
            <div className="border-0 w-80 rounded-md">
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
            </section>
            
          </div>
          </div>
        </div>
        {/* 2 */}
        <div className="pt-32">
          <div className="flex items-center justify-between">
            <h1 className="text-4xl">Vitamin Sea</h1>
            <div className="">
              <Link
                href="/Destinasi"
                className="flex gap-1 text-red-500 items-center"
              >
                <p className="">Lihat Liburan Lainnya</p>
                <IoIosArrowRoundForward className="text-3xl text-center" />
              </Link>
            </div>
          </div>
          {/* Overflow Component */}
          <div className="pt-5">
          <div className="flex overflow-x-auto space-x-8 w-full gap-4 ">
            <section className="flex-shrink-0 shadow-2xl rounded-md border-0">
            <div className="border-0 w-80 rounded-md">
                <Link href="/TanjungBenoa">
                  <div className="rounded-md ">
                    <Image
                      className="rounded-md"
                      src={Kelingking}
                      alt="{title}"
                      priority
                      width="500"
                      height="500"
                    />
                    <div className="px-4 mt-2">
                     
                      <h3 className="font-semibold text-left text-lg">
                        Pantai Kelingking, Bali
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
            </section>
            <section className="flex-shrink-0 shadow-2xl rounded-md border-0">
            <div className="border-0 w-80 rounded-md">
                <Link href="/TanjungBenoa">
                  <div className="rounded-md ">
                    <Image
                      className="rounded-md"
                      src={Pandawa}
                      alt="{title}"
                      priority
                      width="500"
                      height="500"
                    />
                    <div className="px-4 mt-2">
                     
                      <h3 className="font-semibold text-left text-lg">
                        Pantai Pandawa, Bali
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
            </section>
            <section className="flex-shrink-0 shadow-2xl rounded-md border-0">
            <div className="border-0 w-80 rounded-md">
                <Link href="/TanjungBenoa">
                  <div className="rounded-md ">
                    <Image
                      className="rounded-md"
                      src={Meno}
                      alt="{title}"
                      priority
                      width="500"
                      height="500"
                    />
                    <div className="px-4 mt-2">
                     
                      <h3 className="font-semibold text-left text-lg">
                        Gili Meno, Lombok
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
            </section>
            <section className="flex-shrink-0 shadow-2xl rounded-md border-0">
            <div className="border-0 w-80 rounded-md">
                <Link href="/TanjungBenoa">
                  <div className="rounded-md ">
                    <Image
                      className="rounded-md"
                      src={Belitung}
                      alt="{title}"
                      priority
                      width="500"
                      height="500"
                    />
                    <div className="px-4 mt-2">
                     
                      <h3 className="font-semibold text-left text-lg">
                        Pantai Tanjung Tinggi, Belitung
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
            </section>
            <section className="flex-shrink-0 shadow-2xl rounded-md border-0">
            <div className="border-0 w-80 rounded-md">
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
            </section>
            
          </div>
          </div>
        </div>
        {/* 3 */}
        <div className="pt-32">
          <div className="flex items-center justify-between">
            <h1 className="text-4xl">Naik Naik Ke Puncak Gunung</h1>
            <div className="">
              <Link
                href="/Destinasi"
                className="flex gap-1 text-red-500 items-center"
              >
                <p className="">Lihat Liburan Lainnya</p>
                <IoIosArrowRoundForward className="text-3xl text-center" />
              </Link>
            </div>
          </div>
          {/* Overflow Component */}
          <div className="pt-5">
          <div className="flex overflow-x-auto space-x-8 w-full gap-4 ">
            <section className="flex-shrink-0 shadow-2xl rounded-md border-0">
            <div className="border-0 w-80 rounded-md">
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
            </section>
            <section className="flex-shrink-0 shadow-2xl rounded-md border-0">
            <div className="border-0 w-80 rounded-md">
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
            </section>
            <section className="flex-shrink-0 shadow-2xl rounded-md border-0">
            <div className="border-0 w-80 rounded-md">
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
            </section>
            <section className="flex-shrink-0 shadow-2xl rounded-md border-0">
            <div className="border-0 w-80 rounded-md">
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
            </section>
            <section className="flex-shrink-0 shadow-2xl rounded-md border-0">
            <div className="border-0 w-80 rounded-md">
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
            </section>
            
          </div>
          </div>
        </div>
        {/* 4 */}
        <div className="pt-32">
          <div className="flex items-center justify-between">
            <h1 className="text-4xl">Menyatu Dengan Alam</h1>
            <div className="">
              <Link
                href="/Destinasi"
                className="flex gap-1 text-red-500 items-center"
              >
                <p className="">Lihat Liburan Lainnya</p>
                <IoIosArrowRoundForward className="text-3xl text-center" />
              </Link>
            </div>
          </div>
          {/* Overflow Component */}
          <div className="pt-5">
          <div className="flex overflow-x-auto space-x-8 w-full gap-4 ">
            <section className="flex-shrink-0 shadow-2xl rounded-md border-0">
            <div className="border-0 w-80 rounded-md">
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
            </section>
            <section className="flex-shrink-0 shadow-2xl rounded-md border-0">
            <div className="border-0 w-80 rounded-md">
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
            </section>
            <section className="flex-shrink-0 shadow-2xl rounded-md border-0">
            <div className="border-0 w-80 rounded-md">
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
            </section>
            <section className="flex-shrink-0 shadow-2xl rounded-md border-0">
            <div className="border-0 w-80 rounded-md">
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
            </section>
            <section className="flex-shrink-0 shadow-2xl rounded-md border-0">
            <div className="border-0 w-80 rounded-md">
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
            </section>
            
          </div>
          </div>
        </div>
      </main>
      <div className="pt-40"><button onClick={sayAlert}><Image src={bgFooterHome}/></button></div>
      <Footer />
    </div>
  );
}
