
import { SlSizeFullscreen } from "react-icons/sl";
import { IoMdClose } from "react-icons/io";
import { FaRegWindowMinimize } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { setOpen } from "../Redux/appSlice";
import { useState } from "react";

const SendEmail = () => {
  
  const open =useSelector(store=>store.appSlice.open);
  const dispatch = useDispatch ();

  const [data, setData] = useState({
    Recipients:'',
    Subject:'',
    message:''
  });

  const changeHandler = (e) => {
    setData({...data, [e.target.name]:e.target.value});
  }

  const submitHandler =(e) => {
    e.preventDefault();
    console.log(data);
    

  }


  return (
    <div className={`${open ? 'block' : 'hidden'} bg-white max-w-6xl shadow-xl shadow-slate-600 rounded-t-md mt-10 p-4`}>
        <div className="flex gap-10 justify-between items-center">
          <h1 className="text-2xl font-bold ">New Message</h1>
          <div className="flex w-44 items-center gap-6  ">
            <FaRegWindowMinimize size={"28px"} />
            <SlSizeFullscreen size={"28px"} />
            <IoMdClose  onClick={()=>dispatch(setOpen(false))} size={"28px"} />
          </div>
        </div>

        <form onSubmit={submitHandler} className='flex flex-col gap-6 p-3'>

          <input onChange={changeHandler}
          value={data.Recipients}
          className="text-2xl shadow-sm  shadow-slate-600 outline-none text-gray-400"
          type="text"
          name='Recipients'
          placeholder="Recipients" />

          <input  onChange={changeHandler}
          value={data.Subject}
          className=" outline-none shadow-sm shadow-slate-700 text-2xl  text-gray-400"
          type="text" 
          name="Subject"  
          id=""
          placeholder="Subject" />
          
          <textarea onChange={changeHandler}
          value={data.message}
          name="message" cols={'30'} rows={'10'}className="outline-none shadow-sm shadow-slate-700 text-2xl p-6"></textarea>

         <button className="bg-blue-600 flex gap-4 text-2xl rounded-full items-center p-4  h-14 w-40 justify-between mt-4 text-white font-bold ">
            <h1 className="ml-2">
            send
              </h1>
            <IoMdArrowDropdown size={'58px'} />

          </button>


        </form>
      
    </div>
  );
};

export default SendEmail;
