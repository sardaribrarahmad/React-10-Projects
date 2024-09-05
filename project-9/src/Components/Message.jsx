import React from "react";
import { MdCropSquare } from "react-icons/md";
import { IoStarOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
export const Message = () => {

  const navigate = useNavigate();
  const openmail = () => {

    navigate('/mail');

  }
  return (
    <div 
    onClick={openmail}
    className="flex  mt-5 pr-2 items-center justify-between flex-grow py-4">
      <div className="flex gap-3">
        <MdCropSquare size={"28px"} />
        <IoStarOutline size={"28px"} />
      </div>
      <div className="flex-1 ml-6 text-2xl">
          Lorem rumda alias asperiores enim architecto eveniet nesciunt sunt provident minus a voluptatum animi distinctio laboriosam nihil. Sunt, velit.
      </div>
      <div>
        TimeAyga
      </div>
    </div>

  );
};

export default Message;
