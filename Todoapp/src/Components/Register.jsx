import React, { useState } from "react";
import {Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-toastify/dist/ReactToastify.css";
import { FcGoogle } from "react-icons/fc";
import { ImFacebook2 } from "react-icons/im";
const Register = () => {
  const navigate = useNavigate();

const [user, setUser] = useState(()=>{

  const saveduser = localStorage.getItem("users list");
  console.log("saved user",saveduser);

  return saveduser ? JSON.parse(saveduser) : [];
  
});

const [register, setRegister ] =useState({
  Name:'',
  Email:'',
  Password:'',
  Confrim_password:'',

})

const handleChange =(e) => {
  setRegister({...register, [e.target.name]: e.target.value.trim() });
};


const handleSignup = (e) => {
  e.preventDefault();

  const nameexits = user.some((samename)=> samename.Name === register.Name);
  if (nameexits){
    toast.error("name is already registered!", {
      position: "top-right",
    });
  }

  const emailExists = user.some((existingUser) => existingUser.Email === register.Email.trim().toLowerCase());

  if (emailExists) {
    toast.error("Email is already registered!", {
      position: "top-right",
    });
    return; // Stop the signup process if email is already registered
  }
  const newUser = {
    Name: register.Name.trim(),
    Email: register.Email.trim().toLowerCase(),
    Password: register.Password.trim(),
  };

  const newlist = [...user, newUser];
  setUser(newlist);
  localStorage.setItem("users list", JSON.stringify(newlist));
  console.log("Added user", newlist);


  setRegister({
  Name:"",
  Email:"",
  Password:"",
  Confrim_password:"",
  });
  navigate('/')
  toast.success("Account created successfully!", {
    position: "top-right",
  });
  
  };


  return (
    <div>
      <div className="text-white font-fold text-6xl flex justify-center mt-10">
        <h1>
        Todos App
        </h1>
      </div>
      <div className="flex items-center justify-center mt-6 p-2">
      <div className="bg-white container mx-auto md:max-w-[50%]  shadow-md shadow-slate-400 ">
        <div className="p-4">
          <h2 className="text-3xl font-bold mb-2  w-full flex justify-center">
            CREATE ACCOUNT 
          </h2>
          <span  className="text-3xl font-bold mb-2 w-full flex justify-center gap-8">
            <FcGoogle size={'44px'} className="hover:transtion hover:transition-transform hover:scale-125"/>
            <span className="text-blue-700 hover:transtion hover:transition-transform hover:scale-125">
            <ImFacebook2 size={'44px'}/>
            </span>
            
          </span>
          <h1 className="text-3xl font-bold mb-2 w-full flex justify-center">
            -or-
          </h1>
          <form className=" w-[100%] md:w-[60%] flex flex-col  justify-items-center mx-auto">
            <div className="mb-4">
              <label className="block text-gray-700 text-xl font-bold" htmlFor="">
                Name
              </label>
              <input
              onChange={handleChange}
              value={register.Name}
                className=" bg-transparent w-full px-2 py-2 border border-black"
                type="name"
                name="Name"
                placeholder="Enter name"
              />

            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-xl font-bold" htmlFor="">
                Email
              </label>
              <input
              onChange={handleChange}
              value={register.Email}
                className=" bg-transparent w-full px-2 py-2 border border-black"
                type="email"
                name="Email"
                placeholder="Enter email"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-xl font-bold" htmlFor="">
                Password
              </label>
              <input
              onChange={handleChange}
              value={register.Password}
                className=" bg-transparentborder border-black w-full px-3 py-2 border"
                type="password"
                name="Password"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-xl font-bold" htmlFor="">
                Confrim Password
              </label>
              <input
              onChange={handleChange}
              value={register.Confrim_password}
                className=" bg-transparentborder border-black w-full px-3 py-2 border"
                type="password"
                name="Confrim_password"
              />
            </div>

            <div className="flex justify-center items-center">
              <div className="mb-4 mt-4 w-full">
                <button
                  onClick={handleSignup}
                  className="bg-green-700 rounded-xl text-center align-center w-full text-white py-2 px-2  text-2xl"
                >
                  Sign Up
                </button>
                <ToastContainer />
              </div>
              
            </div>
          </form>

          <div className="text-center">
            <span className="text-gray-700 text-xl">Already have an account?</span>
            <button className="text-red-800 font-bold text-xl">
              <Link to='/'>
              Login
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
    
  );
};

export default Register;
