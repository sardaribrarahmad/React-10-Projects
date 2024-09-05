import React from 'react'
import Crypto from "../../Components/Crypto";
import Form from "../../Components/Form";
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <>
    <div className="flex justify-center items-center h-screen ">
    <div className="container border-black border-4 flex gap-10 flex-col items-center justify-center bg-red-300 w-456 mx-auto h-[20vh ] w-rounded-md" >
    <Crypto 
    title="Welcome to Crypto App" 
    description="Enter your credentials to access the account." />
    <Form 
    isLogin={false}
    isSignup={true}
    buttontext="Create Account" 
    linkText="Login"
    linkHref="/Login"/>
    </div>
    </div>
    </>
  )
}

export default Signup;
