/* eslint-disable react/jsx-key */
import React from "react";

import { useState } from "react";
import { MdInbox } from "react-icons/md";
import { GoTag } from "react-icons/go";
import { MdManageAccounts } from "react-icons/md";
import { MdOutlineSyncProblem } from "react-icons/md";
import Messages from "./Messages";
import Secondsection from "./Secondsection";


const content = [
  {
    icon: <MdInbox size={"28px"} />,
    text: "Primary",
  },
  {
    icon: <GoTag size={"28px"} />,
    text: "Promotion",
  },
  {
    icon: <MdManageAccounts size={"28px"} />,
    text: "Social",
  },
  {
    icon: <MdOutlineSyncProblem size={"28px"} />,
    text: "Updates",
  },
];

const Inboxmail = () => {

const [mailType, setMailType] = useState(0);

  return (
    <>
      <main className="flex flex-col h-20 gap-6 flex-grow">
        <Secondsection 
        isMail={false}
        isMain={true}/>
        
        <div className="flex gap-16 h-10 ml-10 mr-20 items-center flex-grow w-[90%]">
          {content.map((items, index) => {
            return (
              <button
              onClick={()=>setMailType(index)}
                className= {`${mailType == index ? 'border-b-4   border-b-blue-700 text-blue-700' :'border-b-4 border-b-transparent' } flex gap-4 w-64 h-10 items-center  `}
                key={index}
              >
                {items.icon}
                <span className="text-2xl ">{items.text}</span>
              </button>
            );
          })}
        </div>
        <div className="flex gap-8 h-10 ml-10 mr-20 items-center flex-grow">
        <Messages />
        </div>
        
      </main>
    </>
  );
};

export default Inboxmail;
