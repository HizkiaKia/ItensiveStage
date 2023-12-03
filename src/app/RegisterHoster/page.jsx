"use client";
import Navbar from "@/app/components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Image from "next/image";
import bgUser from "@/assets/bgUser.svg";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { AiOutlineCloudUpload } from "react-icons/ai";
import "@/app/RegisterUser/page.css";

export default function SignUp() {
  function sayAlert() {
    alert("!!! SUCCESS REGISTER !!!");
  };
  
  return (
    <>
      <div class="flex flex-col h-screen justify-between">
        <header className=" ">
          <Navbar />
        </header>
        <main className="border-8 w-full flex">
          <div className="py-10 mx-auto">
            <div
              style={{ width: "800px" }}
              className="border-t-8 shadow-2xl border-red-500 bg-white"
            >
              <div className="px-12 py-10">
                <h1 className="text-4xl pb-12 font-semibold">
                  Register as Hoster
                </h1>
                <div className="pb-8">
                  <div className="border rounded-md mb-6 border-gray-500">
                    <div className="relative " data-te-input-wrapper-init="">
                      <input
                        type="text"
                        className="peer block min-h-[auto] w-full rounded border-black border-3 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-black dark:placeholder:text-black [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        id="exampleFormControlInput2"
                        placeholder="Email address"
                      />
                      <label
                        htmlFor="exampleFormControlInput2"
                        className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[2rem] peer-focus:-translate-x-[0.8rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none text-neutral-600 dark:peer-focus:text-primary"
                      >
                        Username
                      </label>
                    </div>
                  </div>
                </div>
                <div className="pb-8">
                  <div className="border rounded-md mb-6 border-gray-500">
                    <div className="relative " data-te-input-wrapper-init="">
                      <input
                        type="text"
                        className="peer block min-h-[auto] w-full rounded border-black border-3 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-black dark:placeholder:text-black [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        id="exampleFormControlInput2"
                        placeholder="Email address"
                      />
                      <label
                        htmlFor="exampleFormControlInput2"
                        className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[2rem] peer-focus:-translate-x-[0.8rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none text-neutral-600 dark:peer-focus:text-primary"
                      >
                        Password
                      </label>
                    </div>
                  </div>
                </div>
                <div className="pb-8">
                  <div className="border rounded-md mb-6 border-gray-500">
                    <div className="relative " data-te-input-wrapper-init="">
                      <input
                        type="text"
                        className="peer block min-h-[auto] w-full rounded border-black border-3 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-black dark:placeholder:text-black [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        id="exampleFormControlInput2"
                        placeholder="Email address"
                      />
                      <label
                        htmlFor="exampleFormControlInput2"
                        className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[2rem] peer-focus:-translate-x-[0.8rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none text-neutral-600 dark:peer-focus:text-primary"
                      >
                        Email
                      </label>
                    </div>
                  </div>
                </div>
                <div className="pb-8">
                  <div className="border rounded-md mb-6 border-gray-500">
                    <div className="relative " data-te-input-wrapper-init="">
                      <input
                        type="text"
                        className="peer block min-h-[auto] w-full rounded border-black border-3 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-black dark:placeholder:text-black [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        id="exampleFormControlInput2"
                        placeholder="Email address"
                      />
                      <label
                        htmlFor="exampleFormControlInput2"
                        className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[2rem] peer-focus:-translate-x-[0.8rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none text-neutral-600 dark:peer-focus:text-primary"
                      >
                        Nomor Handphone
                      </label>
                    </div>
                  </div>
                </div>
                <div className="pb-8">
                  <div className="border pb-10 rounded-md mb-6 border-gray-500">
                    <div className="relative " data-te-input-wrapper-init="">
                      <input
                        type="text"
                        className="peer block min-h-[auto] w-full rounded border-black border-3 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-black dark:placeholder:text-black [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        id="exampleFormControlInput2"
                        placeholder="Email address"
                      />
                      <label
                        htmlFor="exampleFormControlInput2"
                        className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[2rem] peer-focus:-translate-x-[0.8rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none text-neutral-600 dark:peer-focus:text-primary"
                      >
                        Alamat
                      </label>
                    </div>
                  </div>
                </div>
                <div className="pb-8">
                  <p>Upload Foto KTP</p>
                  <div className="border py-10 border-gray-500 border-dashed">
                  <AiOutlineCloudUpload className="mx-auto text-6xl text-gray-500"/>
                    <p className="mx-auto text-center text-gray-500">Upload Foto KTP "PNG, JPG"</p>
                    <div className="text-center mt-4 mx-auto">
                    <input  type="file" accept="image/*" onchange="loadFile(event)"/>
                    </div>
                  </div>
                </div>
                <div className="pb-8">
                  <p>Upload Foto Selfie Dengan KTP</p>
                  <div className="border py-10 border-gray-500 border-dashed">
                  <AiOutlineCloudUpload className="mx-auto text-6xl text-gray-500"/>
                    <p className="mx-auto text-center text-gray-500">Upload Foto Selfie Dengan KTP "PNG, JPG"</p>
                    <div className="text-center mt-4 mx-auto">
                    <input  type="file" accept="image/*" onchange="loadFile(event)"/>
                    </div>
                  </div>
                </div>
                <div className="pb-8">
                  
                  <div className="border items-center  h-10 justify-between flex border-gray-500 rounded-md">
                  <div className="relative " data-te-input-wrapper-init="">
                      <input
                        type="text"
                        className="peer block min-h-[auto] w-full rounded border-black border-3 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-black dark:placeholder:text-black [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        id="exampleFormControlInput2"
                        placeholder="Email address"
                      />
                      <label
                        htmlFor="exampleFormControlInput2"
                        className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[2rem] peer-focus:-translate-x-[0.8rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none text-neutral-600 dark:peer-focus:text-primary"
                      >
                       Bank Pembayaran
                      </label>
                    </div>
                  <button className>
                    <div className="border-0  h-10 mr-0">
                      <CiSearch className="text-red-500 pt-1 text-4xl"/>
                    </div>
                  </button>
                  </div>
                </div>
                <div className="pb-8">
                  <div className="border rounded-md mb-6 border-gray-500">
                    <div className="relative " data-te-input-wrapper-init="">
                      <input
                        type="text"
                        className="peer block min-h-[auto] w-full rounded border-black border-3 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-black dark:placeholder:text-black [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        id="exampleFormControlInput2"
                        placeholder="Email address"
                      />
                      <label
                        htmlFor="exampleFormControlInput2"
                        className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[2rem] peer-focus:-translate-x-[0.8rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none text-neutral-600 dark:peer-focus:text-primary"
                      >
                        Nomor Rekening
                      </label>
                    </div>
                  </div>
                </div>
                <div className="pb-8">
                  <p>Upload Foto Buku Tabungan</p>
                  <div className="border py-10 border-gray-500 border-dashed">
                  <AiOutlineCloudUpload className="mx-auto text-6xl text-gray-500"/>
                    <p className="mx-auto text-center text-gray-500">Upload Foto Buku Tabungan "PNG, JPG"</p>
                    <div className="text-center mt-4 mx-auto">
                    <input  type="file" accept="image/*" onchange="loadFile(event)"/>
                    </div>
                  </div>
                </div>
                <div onClick={sayAlert} className="pb-5">
                  <button className="border-0 rounded-md py-2 bg-red-500 w-full">
                    <p className="text-center text-white items-center mx-auto">
                      Register
                    </p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
        <footer class="">
          <Footer />
        </footer>
      </div>
    </>
  );
}
