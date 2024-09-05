import React from 'react';

const AddContact = ({ onClose, isOpen, children }) => {
  return (
    <>
      {isOpen && (
        <div>
          <div className='px-4 p-4 flex gap-4 flex-col mt-6 mb-20 bg-white'>
            <label className='flex flex-col gap-2' htmlFor="name">Name
              <input 
                className='border-2 border-black p-2 items-center'
                type="text" 
                id='name' 
                placeholder='Enter your name' 
              />
            </label>
            <label className='flex flex-col gap-2 mb-4' htmlFor="email">Email
              <input
                className='border-2 border-black p-2 items-center' 
                type="email" 
                id='email' 
                placeholder='Enter your email' 
              />
            </label>

            <div className='flex justify-end p-2'>
              <button className='bg-darkyellow border-2 p-1 border-black rounded-lg'>
                Add Contact
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AddContact;
