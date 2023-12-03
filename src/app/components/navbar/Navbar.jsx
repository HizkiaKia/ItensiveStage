import Image from "next/image";
import logoImage from "../../../../public/Group14.png";
import searchImage from "../../../../public/searchIcon.png";
import Link from "next/link";

const Navbar = () => {
  return (
    // <ul>
    //   <li className="grid grid-cols-3 ml-2 border-b-20-black py-2 px-3 text-black rounded sm:p-1  md:p-0">
    //     <Link className="" href="#">Home</Link>
    //     <Link className="" href="#">Home</Link>
    //     <Link className="" href="#">
    //       <Image src={searchImage}/>
    //     </Link>
    //   </li>
    // </ul>
    <nav className="bg-white drop-shadow-lg  w-full z-20 top-0 start-0  ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white ">
          <li>
            <Link
              href="/Home"
              className=" py-2 px-3  text-black rounded sm:p-1 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 "
              aria-current="page"
            >
              Beranda
            </Link>
          </li>
          <li>
            <Link
              href="/Destinasi"
              className=" py-2 px-3 text-black rounded sm:p-1 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500"
            >
              Destinasi
            </Link>
          </li>
          <li className="items-center pt-1">
            <Link href="#">
              <Image className="" src={searchImage} />
            </Link>
          </li>
        </ul>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <ul className="grid grid-cols-2 gap-2">
              <Link href="/Login">
            <li className="text-center text-red-500 font-bold border px-3 py-2 rounded-lg bg-gray-200">
                Login
            </li>
                </Link>
              <Link className="" href="/SignUp">
            <li className="text-center text-white font-bold border px-4 py-2 rounded-lg  bg-red-500">
                Sign Up
            </li>
                </Link>
          </ul>
        </div>
        {/* <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <ul className="grid grid-cols-2">
            <li>
          <button
            type="button"
            className="text-red-900 sm:p-1 bg-gray-200 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300  rounded-lg  px-4 py-2 text-center "
          >
            Login
          </button>
          </li>
          <li>
          <button
            type="button"
            className="text-white sm:p-1 bg-red-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300  rounded-lg  px-4 py-2 text-center "
          >
            Sign Up
          </button>
          </li>
          </ul>
         
        </div> */}
        <div
          className="items-center sm:p-1 justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <a
            href="#"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <Image src={logoImage} className="" alt="OPEN TRIP Logo" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
