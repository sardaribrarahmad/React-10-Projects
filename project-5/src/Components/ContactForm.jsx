import React from 'react'

const ContactForm = ({contact}) => {
  return (
  <div>
    <div className=' justify-between items-center p-2 bg-yellow rounded-xl mt-4 flex gap-2' 
        key = {contact.id}>
          <img  src="./images/fetch/1.png" alt="" />
          <div className="text-black font-semibold flex flex-col"> 
          <h1 className='text-medium'>{contact.name}</h1>
          <p className='text-sm'>{contact.email}</p>
        </div>
        <div className='flex justify-between'>
          <img  src="./images/fetch/2.png" alt="" />
          <img  src="./images/fetch/3.png" alt="" />
          
        </div>
        </div>

     </div>
      
  );
}

export default ContactForm;
