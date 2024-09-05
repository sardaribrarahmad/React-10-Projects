import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoMdClose } from "react-icons/io";


const Login = ({openRegister}) => {
  
const navigate = useNavigate();

const handleRegister = () =>{
  navigate('/Register');}

const [data, setData] =useState({
  email:'',
  password:'',
});

const changeHandler =(e) => {
  setData({...data, [e.target.name]:e.target.value});
}

const handleSubmit = (e) =>{
  e.preventDefault();
  console.log(data);  
  setData({
    email: '',
    password: '',
  });
}

const [close, setClose] =useState(false);

const handleClose = ()=> {
  navigate('/')
  
}

  return (
    <div className="container mx-auto w-full h-96 shadow-xl shadow-slate-400 mt-2 mb-10">
      <div className="p-4">
        
        <div className="flex justify-between items-center ">
        <h2 className="text-2xl font-bold mb-4">Login</h2>

        </div>
      
      <form  onSubmit={handleSubmit}>

        <div className="mb-1">
          <label className="block text-gray-700" htmlFor="">Email</label>
          <input 
          onChange={changeHandler}
          value={data.email}
          className=" bg-transparent w-full px-2 py-2 border border-black"
          type="email" 
          name="email" 
          id="Email"
          placeholder="Enter email" />
        </div>

        <div className="mb-1">
          <label className="block text-gray-700" htmlFor="">Password</label>
          <input 
          onChange={changeHandler}
          value={data.password}
          className=" bg-transparentborder border-black w-full px-3 py-2 border"
          type="password"
          name='password' />
        </div>

        <div className="mb-4 flex  justify-between items-center sm:flex-col sm:p-6 md:flex-row">
          <label className="block text-gray-700 items-center flex "htmlFor="">
            <input 
            className="size-6"
            type="checkbox" 
            name="" 
            id="" />
            <span className="ml-2 text-gray-800 ">Remember me</span>
          </label>
          <a href="" className="text-red-800">Forget Password?</a>
        </div>
        <div className="flex justify-center items-center">
        <div className="mb-2">
          <button 
          type='submit'
          className="bg-red-600 text-center align-center text-white py-2 px-2">Login</button>
        </div>
        </div>
      
      </form>

      <div className="text-center">
        <span className="text-gray-700">D'not have an account?</span>
        <button 
        onClick={openRegister}
        className="text-red-800">Register</button>
      </div>
      </div>
      
    </div>
  );
};

export default Login;
