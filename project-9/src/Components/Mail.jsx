import React from "react";
import Sidebar from "./Sidebar";
import Message from "./Message";
import Secondsection from "./Secondsection";
import { ImNewTab } from "react-icons/im";
import { RiExpandUpDownLine } from "react-icons/ri";
import { IoPrintSharp } from "react-icons/io5";
import Button from "./Button";
import { HiOutlineReply } from "react-icons/hi";
import { RiArrowGoForwardFill } from "react-icons/ri";
import SendEmail from "./SendEmail";
const Mail = () => {
  return (
    <div className=" mt-8 w-screen  flex gap-10">
      <Sidebar />
      <div className="w-screen mr-10">
        <Secondsection isMail={true} isMain={false} />

        <div className="flex  justify-between mt-10 ml-10 mr-10 h-20 items-center gap-7">
          <div className="flex gap-10">
            <h1 className="text-2xl font-bold">subject</h1>
            <button className="bg-slate-400 p-2 w-24 text-black">Inbox</button>

          </div>

      

          <div className="flex items-center gap-10">
            <RiExpandUpDownLine size={"28px"} />
            <IoPrintSharp size={"28px"} />
            <ImNewTab size={"28px"} />
          </div>

        </div>
        <div className=" ml-10 text-2xl justify-center items text-start  mb-6 flex flex-col" >
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur praesentium hic fugiat delectus tempore excepturi velit perferendis exercitationem. Tenetur, unde ipsam! Omnis fugit fuga tenetur possimus magnam nulla delectus soluta!
            </p>
          </div>
  
        <div className="flex gap-10 ml-10">
          <Button icon={<HiOutlineReply />} text="Reply" />
          <Button icon={<RiArrowGoForwardFill />} text="forward" />
        </div>

      </div>
    
    </div>
    
  );
};

export default Mail;
