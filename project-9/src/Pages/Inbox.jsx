import React from 'react';
import Sidebar from '../Components/Sidebar';
import Navbar from '../Components/Navbar';
import Inboxmail from '../Components/Inboxmail';


const Inbox = () => {
  return (
    <div className='bg-[#F6F8FC] mt-8 h-screen w-screen overflow-hidden flex  '>
      <Sidebar />
      <Inboxmail />

    </div>
  )
}

export default Inbox;
