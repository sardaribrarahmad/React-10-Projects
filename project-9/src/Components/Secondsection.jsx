import React from "react";
import { MdCropSquare } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdOutlineRefresh } from "react-icons/md";
import { IoMdMore } from "react-icons/io";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { FaKeyboard } from "react-icons/fa";

//mail imports 
import { MdOutlineMoveToInbox } from "react-icons/md";
import { IoMdMailUnread } from "react-icons/io";
import { RiSpam2Fill } from "react-icons/ri";
import { RiDeleteBinLine } from "react-icons/ri";

import { BiSolidArchiveIn } from "react-icons/bi";
import { IoMdArrowRoundBack } from "react-icons/io";

const Secondsection = ({isMain, isMail}) => {
  const Icons = [
    {
      icons: [
        // eslint-disable-next-line react/jsx-key
        <MdCropSquare size={"28px"} />,
        // eslint-disable-next-line react/jsx-key
        <IoMdArrowDropdown
          className="hover:bg-slate-400"
          style={{ marginLeft: "-2px" }}
          size={"28px"}
        />,
      ],
    },
    {
      // eslint-disable-next-line react/jsx-key
      icons: [<MdOutlineRefresh size={"28px"} />],
    },
    {
      // eslint-disable-next-line react/jsx-key
      icons: [<IoMdMore size={"28px"} />],
    },
  ];

  const Iconsright = [
    {
      icon: <FaAngleLeft size={"28px"} />,
    },
    {
      icon: <FaAngleRight size={"28px"} />,
    },
    {
      icon: <FaKeyboard size={"28px"} />,
    },
    {
      icon: (
        <IoMdArrowDropdown
          className="hover:bg-slate-400"
          style={{ marginLeft: "-2px" }}
          size={"28px"}
        />
      ),
    },
  ];


  const Mailicons = [
    {
      icon:<IoMdArrowRoundBack size={'28px'} />
    },
    {
      icon:<BiSolidArchiveIn size={'28px'} />
    },
    {
      icon:<RiSpam2Fill size={'28px'}/>

    },
    {
      icon:<RiDeleteBinLine size={'28px'} />
    },
    {
      icon: <IoMdMailUnread size={'28px'} />
    },
    {
      icon: < MdOutlineMoveToInbox size={'28px'}/>
    },
    {
      icon: <IoMdMore size={'28px'} />
    },
    
  ]

  return (
    <div className="flex bg-red-500 ml-10 mr-10 items-center flex-grow justify-between">
      {
        isMain && (
          <div className="flex gap-10 h-16 items-center">
        {Icons.map((item, index) => {
          return (
            <div key={index} className="flex">
              {item.icons.map((icon, iconIndex) => (
                <div key={iconIndex}>{icon}</div>
              ))}
            </div>
          );
        })}
      </div>
          

        )
      }
      {
        isMail && (
          <div className="flex gap-10 h-16 items-center">
        {
          Mailicons.map((items, index )=>{
            return(
              <div key={index}>
                {items.icon}
              </div>
            )
          })
        }
      </div>

        ) 
      }
      

      <div className="flex gap-10 justify-center">
        {Iconsright.map((item, index) => {
          return <div key={index}>{item.icon}</div>;
        })}
      </div>
      
      



    </div>
  );
};

export default Secondsection;
