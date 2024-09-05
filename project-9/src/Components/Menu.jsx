import React from 'react'

const Menu = ({text, icon}) => {
  return (
    <div className='flex items-start justify-start gap-10 text-2xl  rounded-r-full  p-3 hover:cursor-pointer hover:bg-[#D3E3FD]'>
      {icon}
      {text}

    </div>
  )
}

export default Menu;
