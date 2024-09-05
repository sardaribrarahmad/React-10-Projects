import React, { useState } from "react";
import { FaPen } from "react-icons/fa";
import { MdInbox } from "react-icons/md";
import { IoStarOutline } from "react-icons/io5";
import { MdOutlineSnooze } from "react-icons/md";
import { IoSend } from "react-icons/io5";
import { MdDrafts } from "react-icons/md";
import { MdExpandMore } from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";
import Menu from "./Menu";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setOpen } from "../Redux/appSlice";

const Sidebar = () => {
const dispatch =useDispatch();


  const navigate = useNavigate();
  return (
    <div className="w-72 bg-yellow-300">
      <div className="flex gap-4 flex-col ">
        <div className="pl-3">
          <button 
          onClick={()=> dispatch(setOpen(true))}
          className=" flex text-2xl gap-10 items-center w-auto h-auto bg-[#C2E7FF] rounded-2xl p-4 hover:shadow-xl ">
            <FaPen size={"20px"} />
            Compose
          </button>
        </div>

        <Menu
          onClick={() => navigate("/Inbox")}
          icon={<MdInbox className="ml-3" size={"32px"} />}
          text="Inbox"
        />

        <Menu
          icon={<IoStarOutline className="ml-3" size={"32px"} />}
          text="Starred"
        />
        <Menu
          icon={<MdOutlineSnooze className="ml-3" size={"28px"} />}
          text="Snoozed"
        />
        <Menu icon={<IoSend className="ml-3" size={"28px"} />} text="Sent" />
        <Menu
          icon={<MdDrafts className="ml-3" size={"28px"} />}
          text="Drafts"
        />
        <Menu
          icon={<MdExpandMore className="ml-3" size={"28px"} />}
          text="More"
        />
        <div className="flex items-start justify-between gap-10 text-2xl  rounded-r-full p-3 hover:cursor-pointer hover:bg-[#D3E3FD]">
          Labels
          <AiOutlinePlus className="ml-3" size={"28px"} />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
