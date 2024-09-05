import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Categories, mockData } from "../assets/mockData";
import HeroImage from "../assets/images/hero-page.png";
import InfoSection from "../Components/InfoSection";
import Category from "../Components/Category";
import { setProducts } from "../redux/productSlice";
import { addToCart } from '../redux/cartSlice';


const Shop = () => {

  const navigate = useNavigate();

  const handleClick = () => {
      navigate('/Productdetail')
  }

  const dispatch = useDispatch();
  const products = useSelector(state => state.product);
  useEffect(() => {
    dispatch(setProducts(mockData));
  }, []);

  const handleAddToCart = (e)=>{
    e.stopPropagation()
    e.preventDefault()
    dispatch(addToCart)
    alert('product added')

  }

  return (
    <div className="font-bold text-center  text-xl  px-4 md:px-16 lg:px-24">
      <h1 className="mt-10 hover:transform transition-transform duration-300 scale-105 hover:text-red-500 ">
        Shop
      </h1>
      <div className="container mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-10 w-full h-full place-content-center items-center mt-10">
        {products.products.slice(0, 15).map((product) => {
          return (
            <div onClick={handleClick}
              key={product.id}
              className=" bg-white p-4  border rounded relative transform transition-transform duration-300 hover:scale-105 shadow-sm shadow-slate-500 mb-10"
            >
              <img
                className="w-full h-48 object-contain mb-4"
                src={product.image}
                alt=""
              />
              <div className="mt-10 text-gray-600 flex flex-col  ">
                <span>{product.name}</span>
                <span>{product.price}</span>
              </div>
              <div className="">
                <span className="flex text-sm justify-start mt-2 text-yellow-300">
                  <FaStar></FaStar>
                  <FaStar></FaStar>
                  <FaStar></FaStar>
                  <FaStar></FaStar>
                  <FaStar className="text-gray-300"></FaStar>
                </span>
                <div
                onClick={(e)=>handleAddToCart(e, product.id)}
                className="absolute bottom-2 cursor-pointer right-1 flex items-center justify-center w-8 h-8 bg-red-600 group text-white text-sm rounded-full md:hover:w-24 hover:bg-red-700">
                  <span className="group-hover md:group-hover:hidden">+</span>
                  <span className="hidden md:group-hover:block">Add to Cart</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Shop;
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

