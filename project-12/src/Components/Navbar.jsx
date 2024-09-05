import React, { useState } from "react";
import { FaSearch, FaShoppingCart, FaRegUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom"; 
import Login from "./Login";
import { useSelector } from "react-redux";
import Model from "./Model";
import Register from "./Register";
const Navbar = () => {
  const products = useSelector((state) => state.cart.products);

  const [isModelOpen, setModelOpen] = useState(false);

  const [islogin, setLogin] = useState(true);

  const openRegister = ()=> {
    setLogin(false)
    setModelOpen(true)
  }
  const openLogin = ()=>{
    setLogin(true)
    setModelOpen(true)
  }
  return (
    <>
      <nav className="bg-slate-300 shadow-xl ">
        <div className="container mx-auto px-4 md:px-16 lg:px-24 py-4 flex justify-between items-center">
          <div className="text-black font-bold text-xl">
            <Link to="/"> e-SHOP</Link>
          </div>
          <div className="relative flex-1 mx-14">
            <form className="items-center flex" action="">
              <input
                className="w-full rounded-xl px-4"
                type="text"
                placeholder="Search product"
              />
              <FaSearch className="absolute right-3 hover:text-red-500" />
            </form>
          </div>

          <div className="flex items-center gap-2">
            <Link to="/cart">
              <FaShoppingCart size={"20px"} />
              {products.length > 0 && (
                <span className="absolute top-0 text-xs w-3 left-3 bg-red-600 rounded-md">
                  {products.length}
                </span>
              )}
            </Link>
            <button
              onClick={()=> setModelOpen(true)}
              className="hidden md:block hover:bg-red-500 p-2 rounded-md hover:transfrom transition-transform duration-500 hover:scale-105"
            >
              Login | Register
            </button>
            <button className="block md:hidden">
              <FaRegUser size={"20px"} />
            </button>
          </div>
        </div>
        <div className=" flex items-center gap-4 justify-center py-4 font-bold ">
          <Link to="/" className="hover:underline hover:text-red-500">
            HOME
          </Link>
          <Link to="/shop" className="hover:underline hover:text-red-500">
            SHOP
          </Link>
          <Link to="/Contact" className="hover:underline hover:text-red-500">
            CONTACT
          </Link>
          <Link to="/About" className="hover:underline hover:text-red-500">
            ABOUT
          </Link>
        </div>
        <Model 
        isModelOpen={isModelOpen} 
        setModelOpen={setModelOpen}>
        {islogin ? <Login  openRegister={openRegister}/> : <Register openLogin={openLogin} />}
        </Model>
      </nav>
    </>
  );
};

export default Navbar;
