import React from 'react';
import { Link } from 'react-router-dom';

const Form = ({isSignup, isLogin, buttontext, linkText, linkHref }) => {
  return (
    <div >
      <form  className='flex flex-col gap-5 p-4'  action="">
      { isSignup && (
        <div className='flex gap-5 w-100'>
          <label className='flex-1 text-2xl' htmlFor="Name">
            Name
            <input 
              className='mt-2 p-2 text-xl border-2 border-grey w-full' 
              type="text" 
              id="Name" 
              placeholder='sardar' 
            />
          </label>
          <label className='flex-1 text-2xl' htmlFor="Surname">
            Surname
            <input 
              className='mt-2 p-2 text-xl border-2 border-grey w-full' 
              type="text" 
              id="Surname" 
              placeholder='ibrar' 
            />
          </label>
        </div>
      )}


        <label  className='text-2xl font-bold' htmlFor="">Email
          <input className='mt-2 p-2 flex flex-col w-100 text-xl border-2 border-grey'
           type="email"
          placeholder='example@gmail.com' />
        </label>

        <label className='text-2xl font-bold' htmlFor="">Password
          <input className='mt-2 p-2 flex flex-col text-xl w-100 border-2 border-grey'
          type="password"
          placeholder='password' />
        </label>
        {isSignup && (

        <label className='text-2xl' htmlFor="">Repeat Password
          <input className='mt-2 p-2 flex flex-col text-xl w-100 border-2 border-grey'
          type="password"
          placeholder='password' />
        </label>
        )}
        {isSignup && (<label className= '  items-center'htmlFor="">
          <input  type="checkbox" class="w-10 h-6"/>
          <span className='text-xl'>I agree with <a href="#" class="text-purple-600 hover:underline">Terms & Conditions</a>.</span>
        </label>)}

        
        {isLogin && (
        <label className= 'flex items-center'htmlFor="">
          <input  type="checkbox" class="w-10 h-6"/>
          <span className=' text-2xl flex  '>
            Remember me 
            <Link to="/Forgot" className="text-purple-600 hover:underline">Forgot Password</Link></span>
        </label>
        )}
      
        {/* button */}
        <button className='bg-grey w-100 text-2xl p-4 rounded-xl'>
          {buttontext}
        </button>
        
        {isSignup && (
        <span className='text-xl flex items-center gap-2 justify-center mb-2'>
          Already have an account?
          <Link to={linkHref} className="text-purple-600 hover:underline">{linkText}</Link>
        </span>
        )}

        {isLogin && (
          <button className='font-bold border-2 border-black w-100 text-2xl p-4 rounded-xl'>
             <Link to="/Signup" >
            Create Account
          </Link>
        </button>
    
        )}
      </form>
      
      
    </div>
  )
}

export default Form;
