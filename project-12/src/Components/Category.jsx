import React from 'react'
import  ManCategory  from '../assets/images/man.png'
import  WomenCategory  from '../assets/images/woman.png'
import  KidCategory  from '../assets/images/kid.png'
const Category = () => {
  const box = [
    {
      title:'Men',
      imageUrl: ManCategory,
    },
    {
      title:'Women',
      imageUrl: WomenCategory, 
    },
    {
      title:'Kids',
      imageUrl: KidCategory,
    },
    
  ];
  return (
    <div className='container mx-auto grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3'>
      {
        box.map((items, index) => {
          return (
            <div key={index} className='relative h-64 transform transition-transform  hover:scale-105 cursor-pointer'>
              <img className='w-full h-full object-cover rounded-lg shadow-md' src={items.imageUrl} alt="" />
              <div className='absolute top-20 left-12 font-bold'>
                
              {items?.title}
              <h1 className='font-normal'>
                View All
              </h1>
              </div>
            
            
            </div>
          )
        })
      }
      
    </div>
  )
}

export default Category;
