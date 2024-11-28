import { useEffect, useState } from "react";
import Todolist from "./Todolist";
import Navigation from "./Navigation";
//import { FaCheck } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
//import { MdEditDocument } from "react-icons/md";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-toastify/dist/ReactToastify.css";

export const Deleted = () => {
  const [deleteTodos, setDeleteTodos] = useState([]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("loggedInUser"));
    setDeleteTodos(user);

    let saveddeletetodos = JSON.parse(localStorage.getItem("DeletedTodos"));
    if (saveddeletetodos && user?.Email) {
      const userDeletedTodos = saveddeletetodos.filter(
        (todo) => todo.EmailId === user.Email
      );
      setDeleteTodos(userDeletedTodos);
    }
  }, []);
  
  const handleDelete = (index) => {
    let updatedTodos = [...deleteTodos];
    const deleteditem = updatedTodos.splice(index, 1)[0];
    console.log("deleted item ", deleteditem);

    setDeleteTodos(updatedTodos);
    localStorage.setItem("DeletedTodos", JSON.stringify(updatedTodos));
    toast.success("Items deleted successfully", {
      position: "top-right",
    });
  };

  return (
    <>
      <Navigation isHome={true} />
      <div className="container mx-auto w-full">
        <div className="justify-between w-full ">
          <div className="flex justify-center items-center">
            <h1 className="font-bold  items-center justify-center flex bg-green-600 p-4 text-3xl text-black mb-4">
              Deleted Task List
            </h1>
          </div>

          <div className="space-y-3 container mx-auto w-[70%]">
            {deleteTodos.map((items, index) => {
              return (
                <div key={index} className="">
                  <Todolist
                    title={<h3>{items.Title}</h3>}
                    description={<p>{items.Description}</p>}
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

export default Deleted;
