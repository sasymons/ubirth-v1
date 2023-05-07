import React, { useState } from "react";
import ubLogoWhite from "../assets/ubLogoWhite.svg";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);
  return (
    <div className="w-screen h-[70px] z-10 bg-[#FBB9D3] fixed drop-shadow-lg">
      <div className="px-8 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          <img src={ubLogoWhite} alt="uBirth Logo" className="w-[160px]" />
        </div>
        <div>
          <ul className="hidden md:flex text-white">
            <li>
              <a href="#home">HOME</a>
            </li>
            <li>
              <a href="#services">SERVICES</a>
            </li>
            <li>
              <a href="#about">ABOUT</a>
            </li>
            <li>
              <a href="#reviews">REVIEWS</a>
            </li>
            <li>
              <a href="#contact">CONTACT</a>
            </li>
          </ul>
        </div>
        <div className="md:hidden text-white" onClick={handleNav}>
          <FaBars />
        </div>
      </div>
      {/* Mobile Menu */}
      <div
        onClick={handleNav}
        className={
          nav
            ? "overflow-y-hidden md:hidden ease-in-300 absolute text-white left-0 top-0 h-screen w-full bg-slate-700/80 px-4 py-7 flex flex-col"
            : "absolute top-0 h-screen left-[-100%] ease-in duration-500"
        }
      >
        <ul className="h-full w-full text-center pt-12">
          <li className="text-2xl py-8">
            <a href="#home">HOME</a>
          </li>
          <li className="text-2xl py-8">
            <a href="#services">SERVICES</a>
          </li>
          <li className="text-2xl py-8">
            <a href="#about">ABOUT</a>
          </li>
          <li className="text-2xl py-8">
            <a href="#reviews">REVIEWS</a>
          </li>
          <li className="text-2xl py-8">
            <a href="#contact">CONTACT</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
