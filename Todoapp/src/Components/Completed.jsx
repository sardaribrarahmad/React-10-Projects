import React, { useState, useEffect } from "react";
import Todolist from "./Todolist";
import Navigation from "./Navigation";
import { MdDelete } from "react-icons/md";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-toastify/dist/ReactToastify.css";

export const Completed = () => {
  const [completedTodos, setCompletedTodos] = useState([]);


  useEffect(() => {
    // Load logged user from localStorage
    const user = JSON.parse(localStorage.getItem("loggedInUser"));
    setLoggeduser(user);

    // Load completed todos from localStorage
    let savedCompletedTodos = JSON.parse(localStorage.getItem("completedTodos"));

    // Filter todos by logged-in user's email
    if (savedCompletedTodos && user?.Email)
      {const userCompletedTodos = savedCompletedTodos.filter((todo) => todo.EmailId === user.Email);
      setCompletedTodos(userCompletedTodos);  
    }

  }, []);

  const handleDelete = (index) => {
    let updatedTodos = [...completedTodos];
    const deleteditem = updatedTodos.splice(index, 1)[0];
    console.log("recent deleted", deleteditem);

    setCompletedTodos(updatedTodos);
    localStorage.setItem("completedTodos", JSON.stringify(updatedTodos));
    let deletedTodos = JSON.parse(localStorage.getItem("DeletedTodos"));
    deletedTodos.unshift(deleteditem);
    localStorage.setItem("DeletedTodos", JSON.stringify(deletedTodos));
    console.log("Deleted list:", deletedTodos);

    toast.success("Items deleted successfully", {
      position: "top-right",
    });
  };

  const [loggeduser, setLoggeduser] = useState(null);

  const handleuser = () => {
    const User = JSON.parse(localStorage.getItem("loggedInUser"));
    setLoggeduser(User);
  };
  useEffect(() => {
    handleuser();
  }, []);


  
  return (
    <>
      <Navigation isHome={true} />
      <div className="container mx-auto w-full">
        <div className="justify-between w-full items-center">
          <div className="flex justify-center items-center">
            <h1 className="font-bold  items-center justify-center flex bg-green-600 p-4 text-3xl text-black mb-4">
              Compeletd Task List
            </h1>
          </div>

          <div className="container mx-auto w-[70%] space-y-6">
            {completedTodos.map((items, index) => {
              return (
                <div key={index}>
                  <Todolist
                    title={<h3>{items.Title}</h3>}
                    description={<p>{items.Description}</p>}
                    //time ={<p className="text-green-400 font-bold">Completed at: {items.completedTime}</p>}
                    delicon={
                      <MdDelete
                        className=" hover:text-red hover:rounded-full  hover:w-10 hover:bg-red-700 "
                        size={"40px"}
                        onClick={() => handleDelete(index)}
                      />
                    }
                  />
                </div>
              );
            })}
            <ToastContainer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Completed;
