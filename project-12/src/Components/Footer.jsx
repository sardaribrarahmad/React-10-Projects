import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-900  md:px-16 lg:px-24 text-white text-xl font-bold py-8 px-4 ">
      <div className="container grid gap-8 grid-cols-1 md:grid-cols-3 lg:grid-cols-3 mx-auto">
        <div className="">
          <h1 className="text-xl font-semibold">e-Shop</h1>
          <p className="mt-4 ">
            Your one-stop for all your need, shop with us and experience the
            best online shopping experience
          </p>
        </div>

        <div className=" flex flex-col md:items-center">
          <h1 className="text-lg font-semibold">Quick Links</h1>
          <div className="flex flex-col mt-4 gap-4">
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
        </div>

        <div className=" flex flex-col ">
          <h1 className="text-lg font-semibold">Follow us</h1>
          <div className="flex space-x-8 mt-4  ">
            <a href="" className="hover:underline hover:text-red-500">
              <FaFacebook size={"28px"} />
            </a>
            <a href="" className="hover:underline hover:text-red-500">
              <FaInstagram size={"28px"} />
            </a>
            <a href="" className="hover:underline hover:text-red-500">
              <FaTwitter size={"28px"} />
            </a>
            <a href="" className="hover:underline hover:text-red-500">
              <FaLinkedin size={"28px"} />
            </a>
          </div>
          <form action="" className="flex mt-8">
            <input
              className="p-4 bg-gray-800 border outline-none border-gray-600 w-full rounded-lg rounded-r-none"
              type="email"
              placeholder="enter email"
            />
            <button className="bg-red-600 px-4 py-4 rounded-r-lg ">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-700 pt-4 ">
            <div className=" container mx-auto flex flex-col md:flex-row justify-between items-center "> 
            <p>
              &copy; 204 e-Shop All rights reserverd 
            </p>
            <div className="flex space-x-4 md:mt-0">
              <a href=""className="hover:underline hover:text-red-500">privacy policy</a>
              <a href=""className="hover:underline hover:text-red-500">Terms and conditions</a>
            </div>
          </div>
            </div>
    </footer>
  );
};

export default Footer;
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
