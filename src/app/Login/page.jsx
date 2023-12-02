"use client";
import Link from "next/link";
import "@/app/Login/page.css";
import logo from "../../../public/Group14.png";
import Image from "next/image";

export default function Login() {
  return (
<>
<section className="h-screen bg-white">
  <div className="h-full">
    {/* Left column container with background*/}
    <div className=" flex h-screen w-full  ">
      <div className="relative shrink-1 mb-12 flex grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
        <img
          src="https://asset.kompas.com/crops/5WXmIjPLHkI60fF3Vr5EYACVONE=/0x0:780x520/750x500/data/photo/2020/11/16/5fb214bc2d6ee.jpg"
          className="contain "
          alt="Sample image"
        >
          
        </img>
        <p className="absolute bottom-6 left-10 text-white">Pantai Kelingking, Bali</p>
      </div>
      {/* Right column container */}
      <div className="h-screen relative mb-12 lg:ml-16 lg:mx-10 md:mx-auto md:mb-0 :w-8/12 md:w-5/12 xl:w-5/12">
        <form className="lg:mt-40">
          
          <div className="mb-4 flex flex-row items-center justify-center lg:justify-start">
            <Image src={logo} className="mx-auto text-lg text-white"/>
          
          </div>
         
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
              Email address
            </label>
          </div>
         </div>
        <div className="border rounded-md mb-6 border-gray-500">

          <div className="relative " data-te-input-wrapper-init="">
            <input
              type="password"
              className="peer block min-h-[auto] w-full rounded border-1 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-black dark:placeholder:text-black [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
              id="exampleFormControlInput22"
              placeholder="Password"
            />
            <label
              htmlFor="exampleFormControlInput22"
              className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[2rem] peer-focus:-translate-x-[0.8rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none text-neutral-600 dark:peer-focus:text-primary"
            >
              Password
            </label>
          </div>
        </div>
          
          <Link href="#">
          <div className="text-center lg:text-center ">
            <div className="border border-red-500 mx-2 bg-red-500 rounded-sm">
            <p
              type="button"
              className="bg-red-500 inline-block rounded bg-primary px-10 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
              data-te-ripple-init=""
              data-te-ripple-color="light"
            >
              Login
            </p>
            </div>
           
          </div>
          </Link>
          <div className="grid grid-cols-2 mt-5">
          <div className="ml-2 flex items-center justify-between">
           
            <a href="#">Forgot password?</a>
          </div>
          <div className="ml-2 ">
            <p className=" text-sm font-semibold">
              Don't have an account? 
              <Link
                href="/SignUp"
                className="ml-2 text-danger font-bold text-red-500 transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700"
              >
                Register Here
              </Link>
            </p>
            </div>
            </div>
        </form>
        <div class="items-center lg:px-2 absolute bottom-2">
  <p className=" text-gray-500">
        © 2023 OPENTRIP. All rights reserved
  </p>
</div>

      </div>
    </div>
  </div>
</section>



</>
  );
};
