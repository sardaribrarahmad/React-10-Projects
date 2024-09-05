import React from 'react'

const Button = ({icon, text}) => {
  return (
    <button className=' rounded-full p-6 border-black border-4 w-auto flex gap-4 text-2xl'>
      {icon}
      {text}
    </button>
  )
}

export default Button;
