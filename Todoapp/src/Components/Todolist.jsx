import React from 'react';

const Todolist = ({ title, description, delicon, editicon, completed,time}) => {
  return (
    <div className='bg-slate-700 p-2 md:p-8 flex-col items-center space-y-4 sm:flex md:flex-row justify-between md:items-center md:space-y-0'>
      <div className='w-full justify-center flex flex-col  gap-3 ml-4 md:items-start md:w-[40%]'>
        <h3 className='text-green-200 font-bold text-3xl'>
          {title}
        </h3>
        <p className=' font-bold text-2xl '>
          {description}
        </p>
      </div>

      <div className='font-bold text-green-400 text-xl items-center ml-4 mr-4 '>
        <h1 className=''>
          {time}
        </h1>
      </div>
      <div className="flex gap-8 h-10 items-center ml-2 md:justify-between ">
        {delicon}
        {editicon}
        {completed}
      </div>
      
    </div>
  );
}

export default Todolist;
