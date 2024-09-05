import React from 'react'

const SignupEmail = () => {
  return (
    <div className='flex h-screen justify-center items-center border-4px border-black'>
      <div className='flex flex-col justify-center rounded-lg shadow-md items-center gap-8 bg-red h-50'>
        <img src="./Email.png" alt="" />
        <span className='flex gap-4 flex-col justify-center items-center'>
          <h1 className='font-bold text-2xl'>
          Email Verification
          </h1>
          <p className='text-center text-4xl'>
          We have sent you an email verification to <b>jenny.wilson@gmail.com.</b> If you didn’t receive it, click the button below.
          </p>
        </span>
        <button className='bg-grey flex justify-center items-center text-2xl p-4 rounded-2xl'>
          Re-Send EMAil 
        </button>
      </div>
    </div>
  )
}

export default SignupEmail;
