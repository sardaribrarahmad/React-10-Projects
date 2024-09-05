import React from 'react'
import { FaShippingFast } from "react-icons/fa";

const InfoSection = () => {
  const box = [
    {
      icon:<FaShippingFast />,
      text:"Free Shipping",
      desc:'Get your orders delivered with no extra money ' 
    },
    {
      icon:<FaShippingFast />,
      text:"Free Shipping",
      desc:'Get your orders delivered with no extra money ' 
    },
    {
      icon:<FaShippingFast />,
      text:"Free Shipping",
      desc:'Get your orders delivered with no extra money ' 
    },
    {
      icon:<FaShippingFast />,
      text:"Free Shipping",
      desc:'Get your orders delivered with no extra money ' 
    },
    {
      icon:<FaShippingFast />,
      text:"Free Shipping",
      desc:'Get your orders delivered with no extra money ' 
    }
  ]
  return (
    <div className='bg-white pb-8 pt-12'>
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-5 gap-4'>
          {
            box.map((items, index) =>{
              return (
                <div key={index} className='flex flex-col h-full w-full  shadow-slate-500 items-center p-4 border shadow-md rounded-lg cursor-pointer transform transition-transform  hover:scale-105'>
                  <h1 className='text-red-600'>
                  {items.icon}
                  </h1>
                  
                  <h3 className='font-bold'>
                  {items.text}
                  </h3>
                  <p className='text-center'>
                  {items.desc}
                  </p>
                  

                </div>
              )
            })
          }
      </div>
    </div>
  )
}

export default InfoSection;
