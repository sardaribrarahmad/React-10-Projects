import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navigation = (isHome) => {

  const [loggedUser, setLoggedUser] = useState(null);

  const handleUser = () => {
    const userFound = JSON.parse(localStorage.getItem("loggedInUser"));
    setLoggedUser(userFound);
  };

  useEffect(() => {
    handleUser();
  }, []);

  return (
    <div>
      {isHome && (
        <nav className="bg-slate-500 ">
          <div className="mb-4 container mx-auto flex flex-col flex-start md:flex-row md:justify-between md:items-center p-4">
            <div>
              <h1 className="font-bold p-3 text-3xl flex items-center justify-center md:justify-start">
                TODO APP
              </h1>
            </div>
            <div className=" flex items-center gap-4 justify-center py-4 font-bold ">
              <Link to="/Home" className="hover:underline hover:text-red-500">
                HOME
              </Link>
              <Link
                to="/Completed"
                className="hover:underline hover:text-red-500"
              >
                COMPLETED
              </Link>
              <Link
                to="/Deleted"
                className="hover:underline hover:text-red-500"
              >
                DELETED
              </Link>
            </div>

            <div className="flex  gap-5 items-center justify-center flex-col md:flex-row">
              {/* <div className=" text-lime-500 font-bold text-xl">
                {loggedUser ? `welcome, ${loggedUser.Name}` : ""}
              </div> */}

              <div className=" font-bold  sm:w-auto p-2 text-black border border-black hover:transform transition-transform hover:scale-105 rounded-xl text-xl md:w-auto bg-blue-500 ">
              <button className="px-4 ">
                <Link to="/">Logout</Link>
              </button>
            </div>
            </div>
          
          </div>
        </nav>
      )}
    </div>
  );
};

export default Navigation;
