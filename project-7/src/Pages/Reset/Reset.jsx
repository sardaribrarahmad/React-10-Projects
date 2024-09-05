import React from 'react'
import Crypto from '../../Components/Crypto';

const Reset = () => {
  return (
    <div className='flex h-screen justify-center items-center border-4 border-black'>
      <div className='bg-slate-400 flex flex-col justify-center rounded-lg shadow-md items-center gap-7 h-50'>
      <Crypto 
      title="Reset password"
      description="Enter new password" />
      <label className='text-2xl font-bold' htmlFor=""> New Password
          <input className='mt-2 p-2 flex flex-col text-xl w-100 border-2 border-grey'
          type="password"
          placeholder='........' />
        </label>
        <label className='text-2xl font-bold' htmlFor=""> Repeat New Password
          <input className='mt-2 p-2 flex flex-col text-xl w-100 border-2 border-grey'
          type="password"
          placeholder='......' />
        </label>
        <button className='bg-grey mb-10  font-bold border-2 border-black w-100 text-2xl p-4 rounded-xl'>
          Reset Passowrd 
        </button>
      </div>
    </div>
    
    
  )
}

export default Reset;
