import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'

const Create = () => {

  const history = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState(" ");
  const header = { "Access-Control-Allow-Origin":"*" };

  const handleSubmit = (e) => {
  e.preventDefault();
  axios.post("https://66ab3619636a4840d7c9b78f.mockapi.io/Crud-operations",{
      name: name,
      email: email,
      header: header,
  })

  .then(() => {
    toast("Data Entered Successfully");
    history('/');
  })
  .catch(() => {
    toast.error("plz enter valid email")
  });
  
  };

  return (
    <>
  <div className="flex mt-10 ">
    <div className="container border-black border-4 flex flex-col  justify-center bg-slate-500 w-456 mx-auto h-[20vh ] " >
    <form>
    <h1 className='mt-6 font-bold text-4xl flex justify-center'>
      Create
    </h1>
      <div className="mb-3 mt-6">
        <label 
        className="form-label text-4xl ">NAME</label>
        <input 
        onChange={(e) => setName(e.target.value)}
        type="name" 
        className=" text-4xl form-control" 
        id="name" 
        aria-describedby="emailHelp"/>
        
      </div>

  <div className="mb-3">
    <label className="form-label text-4xl">Email Address</label>
    <input 
    type="email" 
    onChange={(e) => setEmail(e.target.value)}
    className="text-4xl form-control" 
    id="exampleInputPassword1"/>
  </div>

  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label">Check me out</label>
  </div>

  <div className='flex justify-center'>
    <button 
      onClick={handleSubmit}
      type="submit"
      className="bg-lime-800 btn btn-primary mt-4 mb-6 text-xl w-60">
      Submit
    </button>
  </div>
    
  </form>
    </div>
    </div>
    
  
    </>
  )
}

export default Create;
