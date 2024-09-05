import React from 'react'

const Register = ({openLogin}) => {
  return (
    <div className="container mx-auto  shadow-xl shadow-slate-600 mt-4">
      <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Register</h2>
      <form action="">
      <div className="mb-4">
          <label className="block text-gray-700" htmlFor="">Name</label>
          <input 
          className=" bg-transparent w-full px-2 py-2 border border-black"
          type="name" 
          name="email" 
          id="Email"
          placeholder="Enter email" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="">Email</label>
          <input 
          className=" bg-transparent w-full px-2 py-2 border border-black"
          type="email" 
          name="email" 
          id="Email"
          placeholder="Enter email" />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="">Password</label>
          <input 
          className=" bg-transparentborder border-black w-full px-3 py-2 border"
          type="password" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="">Confrim Password</label>
          <input 
          className=" bg-transparentborder border-black w-full px-3 py-2 border"
          type="password" />
        </div>

        <div className="flex justify-center items-center">
        <div className="mb-4">
          <button className="bg-red-600 text-center align-center text-white py-2 px-2">Signup</button>
        </div>
        </div>
      
      </form>

      <div className="text-center">
        <span className="text-gray-700">Already  have an account?</span>
        <button 
        onClick={openLogin}
        className="text-red-800">Login</button>
      </div>
      </div>
      
    </div>
  )
}

export default Register
