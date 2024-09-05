import React from 'react'

const Signupverified = () => {
  return (
    <div className='flex h-screen justify-center items-center border-4px border-black'>
      <div className='flex flex-col justify-center rounded-lg shadow-md items-center gap-10 h-50'>
        <img src="./Check.png" alt="" />
        <span className='flex gap-4 flex-col justify-center items-center'>
          <h1 className='font-bold text-2xl'>
          Successfully Registration
          </h1>
          <p className='text-center text-4xl'>
          Hurray! You have successfully created your account. Enter the app to explore all it’s features.
          </p>
        </span>
        <button className='bg-purple-900 w-100 text-white flex justify-center items-center text-2xl p-4 rounded-2xl'>
          Enter The App
        </button>
      </div>
    </div>
  )
}

export default Signupverified;
