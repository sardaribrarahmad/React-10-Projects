import { Categories, mockData } from "../assets/mockData";
import HeroImage from "../assets/images/hero-page.png";
import InfoSection from "../Components/InfoSection";
import Category from "../Components/Category";
import { setProducts } from "../redux/productSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Productcart from "../Components/Productcart";
import Shop from "./Shop";
import Model from "../Components/Model";
export const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(setProducts(mockData));
  }, []);

  return (
    <div className="bg-white mt-2 px-4 md:px-16 lg:px-24 ">
      <div className="container mx-auto py-4 flex flex-col md:flex-row gap-2 ">
        <div className="w-full md:w-3/12">
          <div className="bg-red-500 p-4 cursor-pointer text-white text-lg py-2.5 hover:font-bold  transform transition-transform duration-300 scale-105 md:w-3/4 sm:w-3/6">
            SHOP BY CATEGORIES
          </div>
          <ul className="space-y-4 bg-gray-100 p-3 mb-4 shadow-xl ">
            {Categories.map((items, index) => {
              return (
                <li key={index} className="flex gap-2 items-center cursor-pointer hover:font-bold transform transition-transform duration-300 scale-105">
                  <div className="w-2 h-2 border border-red-500 rounded-full mr-2"></div>
                  {items}
                </li>
              );
            })}
          </ul>
        </div>

        <div className="w-full md:w-9/12 mt-8 md:mt-0 h-96 relative ">
          <img src={HeroImage} className="h-full w-full" alt="" />
          <div className=" absolute top-16 left-8 font-bold">
            <h1>Welcome to E-Shop</h1>
            <p>MILLONS + PRODUCT</p>
            <button className="bg-red-600 px-8 py-1.5 text-white mt-4 hover:bg-red-800 transform transition-transform  hover:scale-105">
              SHOP NOW
            </button>
          </div>
        </div>
      </div>
      <InfoSection />
      <Category />

      <div className="font-bold text-center  text-xl  px-4 md:px-16 lg:px-24">
        <h1 className='mt-10 hover:transform transition-transform duration-300 scale-105 hover:text-red-500 '>Top Products </h1>
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-5 gap-10 w-full h-full place-content-center items-center mt-10">    
        {products.products.slice(0, 5).map((product) => {
            return (
              <div key={product.id} className=" bg-white p-4  border rounded relative transform transition-transform duration-300 hover:scale-105 shadow-sm shadow-slate-500 mb-10">
                <img className="w-full h-48 object-contain mb-4" src={product.image} alt="" />
                <div className='mt-10 text-gray-600 flex items-start flex-col  '>
                  <span>
                  {product.name}
                  </span>
                <span>
                {product.price}
                </span>
                
                </div>
                <div className='flex text-sm items-start  mt-2 text-yellow-300'>
                  <FaStar></FaStar>
                  <FaStar></FaStar>
                  <FaStar></FaStar>
                  <FaStar></FaStar>
                  <FaStar className="text-gray-300"></FaStar>

                </div>
                <div className='absolute bottom-2 right-2 flex items-center justify-center w-8 h-8 bg-red-600 group text-white text-sm rounded-full hover:bg-red-700'>
                  <span className=''>+</span>
                  

                </div>
                
              </div>
            );
          })}
        </div>
      </div>
      <Shop />
      <Model />
      <Productcart />
    </div>
  );
};

export default Home;
import { FaStar } from "react-icons/fa";

