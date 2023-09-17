import React from 'react'
import { BsBasket } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  return <div className="w-full h-20 lg:h-28 text-white opacity-100">
      <div className="max-w-screen-2xl h-full mx-auto px-4 flex items-center justify-between">
      <h1 className="text-3xl font-extrabold ">TravelerTale</h1>
        <ul className="hidden lg:inline-flex items- gap-8 uppercase text-sm font-semibold">
          <li className="hover:text-hoverColor cursor-pointer duration-300  hover:text-yellow-300 ">Home</li>
          <li className="hover:text-hoverColor cursor-pointer duration-300  hover:text-yellow-300">About</li>
          <li className="hover:text-hoverColor cursor-pointer duration-300  hover:text-yellow-300">Attraction</li>
          <li className="hover:text-hoverColor cursor-pointer duration-300  hover:text-yellow-300">Products</li>
          <li className="hover:text-hoverColor cursor-pointer duration-300  hover:text-yellow-300">Contact</li>
        </ul>
        <div className="hidden lg:inline-flex gap-5 items-center">
          <BsBasket className="text-xl hover:text-hoverColor"/>
          <h1>|</h1>
          <button className="w-[107px] h-[48px] bg-blue-500 text-white uppercase text-sm font-semibold rounded-3xl hover:bg-darkRed hover:text-black duration-300">
            Login
          </button>
        </div>
        <div className="inline-flex lg:hidden">
          <AiOutlineMenu className="text-3xl" />
        </div>
      </div>
    </div>
};
export default Navbar;