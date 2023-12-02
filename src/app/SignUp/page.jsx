"use client";
import Navbar from "@/app/components/navbar/Navbar";
import Link from "next/link";
import "@/app/SignUp/page.css";
import Footer from "../components/footer/Footer";

export default function SignUp() {
  return (
    <>
      <div class="flex flex-col h-screen justify-between">
        <header className=" ">
          <Navbar />
        </header>
        <main class="background"  >
          <div  >
            <div className="mt-20 mb-40 ml-20 mr-20 ">
              <div className="border-t-4 flex border-red-500 bg-white justify-center items-center drop-shadow-lg h-80 w-80">
                <ul className="grid grid-rows-4 flex ">
                  <li className="text-left">
                    <p className="text-lg font-semibold">Choose Registration</p>
                  </li>
                  <li className="text-center">
                    <Link href="/RegisterUser">
                      <button className="py-1 px-16 text-white border  rounded-md bg-red-500">
                        Register as User
                      </button>
                    </Link>
                  </li>
                  <li className="text-center items-center py-6 pt-2">
                    <p className="text-gray-400">or</p>
                  </li>
                  <li className="text-center ">
                    <Link href="/RegisterHoster">
                      <button className="py-1 px-14 text-white border  rounded-md bg-red-500">
                        Register as Hoster
                      </button>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <p className=" text-white absolute bottom-8 right-20 ">Candi Borobudur, Magelang</p>
        </main>
        <footer class="">
          <Footer />
        </footer>
      </div>
    </>
  );
}
