import React from "react";
import { IoMdMenu } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { IoMdOptions } from "react-icons/io";
import { PiQuestionDuotone } from "react-icons/pi";
import { IoSettingsOutline } from "react-icons/io5";
import { CgMenuGridO } from "react-icons/cg";
import { RiAccountCircleFill } from "react-icons/ri";

const Navbar = () => {
  return (
    <div className="bg-orange-300 h-20">
      <div className="flex gap-10  items-center  justify-between">
        <div className="flex items-center gap-5 p-2">
          <div className="p-3 text-4xl rounded-full hover:bg-gray-500 cursor-pointer">
            <IoMdMenu />
          </div>
          <div className="hidden md:flex items-center gap-4">
            <img
              className="w-8"
              src="https://cdn-icons-png.flaticon.com/512/5968/5968534.png"
              alt=""
            />
            <h1 className="font-bold text-2xl">Gmail</h1>
          </div>
        </div>

        <div className="md:block sm:ml-2 ml-24 mt-4 w-full flex items-center  p-2 justify-center">
          <div className=" w-full max-w-3xl flex items-center bg-white rounded-full shadow-xl px-4 py-2 border-2 border-black">
            <FaSearch size={"20px"} className="text-gray-700 cursor-pointer" />
            <input
              className=" ml-3 text-black text-lg bg-transparent w-full outline-none"
              type="text"
              placeholder="Search mail"
            />
            <IoMdOptions
              size={"20px"}
              className="text-gray-700 cursor-pointer"
            />
          </div>
        </div>

        <div className=" hidden md:block flex p-2 justify-between">
          <div className="flex items-center justify-between gap-5  ">
            <PiQuestionDuotone
              size={"35px"}
              className=" hover:bg-slate-400 cursor-pointer rounded-full"
            />
            <IoSettingsOutline
              size={"35px"}
              className="items-center hover:bg-slate-400 cursor-pointer rounded-full"
            />
            <CgMenuGridO
              size={"35px"}
              className=" items-center hover:bg-slate-400 cursor-pointer rounded-full"
            />
            <RiAccountCircleFill
              size={"35px"}
              className="items-center hover:bg-slate-400 cursor-pointer rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
