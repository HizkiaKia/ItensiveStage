"use client";
import Navbar from "@/app/components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Image from "next/image";
import bgUser from "@/assets/bgUser.svg";
import Link from "next/link";
import "@/app/RegisterUser/page.css";

export default function SignUp() {
  function sayAlert() {
    alert("!!! SUCCESS REGISTER !!!");
  }
  return (
    <>
      <div class="flex flex-col h-screen justify-between">
        <header className=" ">
          <Navbar />
        </header>
        <main className="border-0 flex relative">
          <Image src={bgUser} />

          <div style={{width : "38%"}} className="absolute top-40 border-t-8 border-red-500 bg-white left-14">
            <div className="pl-4 pt-10 pr-4">
            <h1 className="text-4xl pb-12 font-semibold">
              Register
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
            <div onClick={sayAlert} className="pb-5">
              <button className="border-0 rounded-md py-2 bg-red-500 w-full">
            <p className="text-center text-white items-center mx-auto">
              Register
            </p>
              </button>
            </div>
            </div>
          </div>
          <div className="absolute right-20 bottom-8">
              <p className="text-white">Candi Borobudur, Magelang</p>
            </div>
        </main>
        <footer class="">
          <Footer />
        </footer>
      </div>
    </>
  );
}
