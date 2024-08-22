
import { CiHome, CiCalendar, CiSearch } from "react-icons/ci";
import { FcAbout } from "react-icons/fc";

import Link from 'next/link';

const MobileNavbar = () => {
    return (
        <div className="fixed bottom-0 bg-white flex flex-row justify-around w-full  py-2 md:hidden items-center mx-auto px-4 border-t-2 border-black/70 z-50 mt-4">
            <Link href="#home" className="flex items-center  hover:text-blue-500">

                <CiHome className=" text-4xl text-black font-bold rounded-full  p-1 " />

            </Link>
            <Link href="#reserve" className="flex  items-center ">

                < CiCalendar className="text-4xl text-black font-bold" />


            </Link>
            <Link href="#search" className="flex  items-center  hover:text-blue-500">

                <CiSearch className="text-4xl text-black font-bold" />

            </Link>
            <Link href="#about" className="flex  items-center  text-black">

                <FcAbout className="text-4xl text-black font-bold" />

            </Link>
        </div>
    );
};

export default MobileNavbar;
