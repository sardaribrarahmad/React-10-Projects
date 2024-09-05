import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export const Checkout = () => {

  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate('/Ordersummary')
  }
  const [billing, setBilling] = useState(true);
  const [shipping, setShipping] = useState(true);

  const [payment , setPayment] = useState(true);


  return (
    <div className="container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24">
      <h1 className="text-2xl font-bold mb-4">CHECKOUT</h1>
      <div className="flex flex-col md:flex-row justify-between space-x-10 mt-8">
        <div className="md:w-2/3">
          <div className="border p-2 mb-6 shadow-lg shadow-slate-300">
            <div
              onClick={() => setBilling(!billing)}
              className="flex items-center justify-between"
            >
              <h1 className="text-lg font-bold mb-2">Billing Information</h1>

              {billing ? <FaAngleDown /> : <FaAngleUp />}
            </div>

            <div className={`${billing ? " " : "hidden"}`}>
              <div>
                <label className="block text-gray-800" htmlFor="">
                  Name
                </label>
                <input
                  className=" w-full px-3 py-2 border border-black font-bold"
                  type="text"
                />
              </div>
              <div>
                <label className="block text-gray-800" htmlFor="">
                  Email
                </label>
                <input
                  className=" w-full px-3 py-2 border border-black font-bold"
                  type="text"
                />
              </div>

              <div>
                <label className="block text-gray-800" htmlFor="">
                  PhoneNumber
                </label>
                <input
                  className="w-full px-3 py-2 border border-black font-bold"
                  type="text"
                />
              </div>
            </div>
          </div>



          <div className="border p-2 mb-6 shadow-lg shadow-slate-300"
            >
            <div className="flex items-center justify-between"
            onClick={()=> setShipping(!shipping)} >
              <h1 className="text-lg font-bold mb-2">Shipping Information</h1>
              {shipping ? <FaAngleDown />: <FaAngleUp />}
            </div>

            <div className={`${shipping ? " " : "hidden"}`}>
              <div>
                <label className="block text-gray-800" htmlFor="">
                  Address
                </label>
                <input
                  className=" w-full px-3 py-2 border border-black font-bold"
                  type="text"
                />
              </div>
              <div>
                <label className="block text-gray-800" htmlFor="">
                  Email
                </label>
                <input
                  className=" w-full px-3 py-2 border border-black font-bold"
                  type="text"
                />
              </div>

              <div>
                <label className="block text-gray-800" htmlFor="">
                  PhoneNumber
                </label>
                <input
                  className="w-full px-3 py-2 border border-black font-bold"
                  type="text"
                />
              </div>
            </div>
          </div>

          <div 
          className="border p-2 mb-6 shadow-lg shadow-slate-300">
            <div className="flex items-center justify-between"
            onClick={()=>setPayment(!payment)}>
              <h1 className="text-lg font-bold mb-2">Payment Method</h1>
              {payment ? <FaAngleDown />: <FaAngleUp />}
            </div>

            <div className={`${payment ? " " :"hidden"}`}>
              <div className="flex gap-10 items-center">
                <input
                  className="border border-black font-bold"
                  type="radio"
                  name="payment "
                />
                <label className="block text-gray-800" htmlFor="">
                  Cash on delivery 
                </label>
               </div>
              
              <div className="flex gap-10 items-center">
                <input
                  className="border border-black font-bold"
                  type="radio"
                  name="payment "
                />
                <label className="block text-gray-800" htmlFor="">
                  Debit card
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-1/3 bg-white p-6 rounded-lg shadow-xl shadow-slate-500 border">
        <h3>
          order summary 

        </h3>

        <h1>
          Total price
        </h1>
        <button
         onClick={handleClick}
         className="bg-red-700 text-white font-bold w-full p-2">
          Place order 
        </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
