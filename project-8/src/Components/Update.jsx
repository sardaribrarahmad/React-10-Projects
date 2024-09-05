import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Update = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { eachData } = location.state || {};

  const [name, setName] = useState(eachData?.name || '');
  const [email, setEmail] = useState(eachData?.email || '');

  useEffect(() => {
    if (!eachData) {
      navigate('/');
    }
  }, [eachData, navigate]);

  const handleUpdate = (e) => {
    e.preventDefault();
    axios.put(`https://66ab3619636a4840d7c9b78f.mockapi.io/Crud-operations/${eachData.id}`, { name, email })
      .then(() => {
        navigate('/');
      });
  };

  return (
    <div className="">
      <div className="container border-black items-center border-4 flex flex-col justify-center mt-10 bg-slate-500 w-456 mx-auto ">
        <form onSubmit={handleUpdate}>
          <h1 className='mt-6 font-bold text-4xl'>Update</h1>
          <div className="mb-3 mt-6">
            <label className="form-label text-4xl">NAME</label>
            <input
              type="text"
              className="form-control text-4xl"
              value={name}
              onChange={(e) => setName(e.target.value)}
              id="name"
              aria-describedby="nameHelp"
            />
          </div>
          <div className="mb-3">
            <label className="form-label text-4xl">Email Address</label>
            <input
              type="email"
              className="form-control text-4xl border-5"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email"
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary mt-4 mb-6 text-4xl hover:bg-red-500 font-bold text-white"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default Update;
