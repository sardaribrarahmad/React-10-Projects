import React from 'react'
import Crypto from '../../Components/Crypto';
import { Link } from 'react-router-dom';
import Form from '../../Components/Form';

const Forgot = () => {
  return (
    <>
  <div className='flex h-screen justify-center items-center border-4 border-black'>
      <div className='bg-slate-400 flex flex-col justify-center rounded-lg shadow-md items-center gap-7 h-50'>
      <Crypto 
      isForgot={true}
      title="Forgot Password" 
      description="Enter your email address for which account you want to reset your password."/>
      
      
      <label  className='text-2xl font-bold' htmlFor="">Email
          <input className='mt-2 p-2 flex flex-col w-100 h-16 text-xl border-2 border-grey'
           type="email"
          placeholder='example@gmail.com' />
        </label>

        <button className='bg-grey font-bold border-2 border-black w-100 text-2xl p-4 rounded-xl'>
           <Link to="/Reset">Reset Password </Link>
        </button>
      </div>
    </div>

    </>
  
  );
};

export default Forgot;
