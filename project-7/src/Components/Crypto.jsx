import React from 'react'
import { Link } from "react-router-dom";

const Crypto = ({title, description, isForgot }) => {
  return (
    <div className=' w-456 flex flex-col gap-5 p-6 '>
      <span>
        { isForgot && (
          <Link to="/Login">
            <img className ="p-4"
            src="./Left.png" alt="left_img" />
          </Link>

        )}
      <h1 className='font-bold text-5xl p-4'>
        {title}
      </h1>
      <p className='text-xl text-grey mt-[-2] pl-4'>
      {description}
      </p>
      </span>
    </div>
  )
}

export default Crypto;
