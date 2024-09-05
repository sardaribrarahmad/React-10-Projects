import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Read = () => {
  const navigate = useNavigate();
  
  const handleUpdate = (eachData) => {
    navigate('/update', 
      { state: { eachData }
    });
  };

    const handleDelete = (id) => {
    axios.delete(`https://66ab3619636a4840d7c9b78f.mockapi.io/Crud-operations/${id}`)
      .then(() => {
        getData();
      });
  };

  const [data, setData] = useState([]);

  const getData = () => {
    axios
      .get("https://66ab3619636a4840d7c9b78f.mockapi.io/Crud-operations")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
  };

  useEffect(() => {
    getData();
  }, []);


  const handlecreate = () =>{

    navigate('/Create');
  }

  return (
    <div className='text-4xl '>
      <h1 className='bg-gray-400 mt-5 flex justify-center items-center'>RECORDS OF SYSTEMS</h1>
      <div className='flex justify-center items-center'>
      <button onClick={handlecreate}
      className="btn btn-primary mt-4 mb-6 text-4xl hover:bg-red-500 font-bold text-white"
      >Create</button>
      </div>
      
      <div className='p-10 mt-10 flex justify-center items-center mx-auto border-style-underline bg-slate-500'>
        <table className="table table-dark table-striped">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {data.map((eachData) => (
              <tr key={eachData.id}>
                <th scope="row">{eachData.id}</th>
                <td>{eachData.name}</td>
                <td>{eachData.email}</td>
                <td>
                  <button
                    onClick={() => handleUpdate(eachData)}
                    type="button"
                    className="btn btn-success"
                  >
                    Update
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(eachData.id)}
                    type="button"
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Read;
