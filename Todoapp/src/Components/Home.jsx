import { useState, useEffect } from "react";
import Todolist from "./Todolist";
import { MdDelete } from "react-icons/md";
import { MdEditDocument } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-toastify/dist/ReactToastify.css";
import Navigation from "./Navigation";
const Home = () => {

  // for getting name dynamically
  const [loggeduser, setLoggeduser] = useState(null);
  const handleuser = () => {
    const User = JSON.parse(localStorage.getItem("loggedInUser"));
    setLoggeduser(User);
  };
  useEffect(() => {
    handleuser();
  }, []);
  
  
  const Notify = () => {
    toast("items added to list successfully", {
      position: "top-right",
    });
  };

    const currentTime = new Date().toLocaleString('en-GB', {
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      day: '2-digit',
      hour12:true,
    });

  // from submission 
  
  const [todos, setTodos] = useState([]);

  const [todo, setTodo] = useState({
    Title: "",
    Description: "",
    EmailId: loggeduser ? loggeduser.Email : '',
    time:currentTime,

    
  });

  const handleChange = (e) => {
    setTodo({ ...todo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

// storing the emial id in todolist along with orther details 
    const newTodo = {...todo, EmailId: loggeduser ? loggeduser.Email : "",time:currentTime}

    const newTodos = [newTodo, ...todos];

    setTodos(newTodos);
    localStorage.setItem("todolist", JSON.stringify(newTodos));
    console.log("Added todos:", newTodos);
    setTodo({
      Title: "",
      Description: "",
      EmailId: loggeduser ? loggeduser.Email : "",
    });
  };

  // Fetching data from local storage on component mount
  useEffect(() => {
    let savedlist = JSON.parse(localStorage.getItem("todolist"));

    if (savedlist) {
      setTodos(savedlist);
    }
  }, []);

  // Handle edit button click to populate the edit form
  const [currentedit, setCurrentEdit] = useState(null);
const [currentediteditem, setCurrentEditedItem] = useState({
  Title: "",
  Description: "",
  
});
  const handleUpdate = (index, item) => {
    console.log("Editing item at index:", index); // Debugging output
    setCurrentEdit(index);
    setCurrentEditedItem(item);
  };

  // Update title in the edit form
  const handleUpdateTitle = (value) => {
    setCurrentEditedItem((prev) => {
      return { ...prev, Title: value };
    });
  };

  // Update description in the edit form
  const handleUpdateDesc = (value) => {
    setCurrentEditedItem((prev) => {
      return { ...prev, Description: value };
    });
  };

  // Save the updated item back to the todo list
  const handleUpdatelist = () => {
    console.log("Saving edited item:", currentediteditem); // Debugging output
    let newlist = [...todos];
    newlist[currentedit] = currentediteditem;
    setTodos(newlist);
    localStorage.setItem("todolist", JSON.stringify(newlist));
    setCurrentEdit(null); // Exit editing mode
  };

  //handle completed

  const handleComplete = (index) => {
    let updatedTodos = [...todos];
    
  //const completedTime = [...todos, currentTime];
   //const Ctime =[completedTime];

    const completedItem = updatedTodos.splice(index, 1)[0]; // Remove the item from the list
    console.log("completedItem", completedItem); // for seeing output which one completed

    setTodos(updatedTodos); // Update the state

    //console.log("your time is here",Ctime)
    localStorage.setItem("todolist", JSON.stringify(updatedTodos)); // Update the local storage

  
    // Save the completed item in a different local storage key
    let completedTodos = JSON.parse(localStorage.getItem("completedTodos")) || [];
    completedTodos.unshift(completedItem);
    localStorage.setItem("completedTodos", JSON.stringify(completedTodos));
    console.log("Completed Todos:", completedTodos);
    toast.success("Task marked as complete!", {
      position: "top-right",
    });
  };

  // Deletion of an item
  const handleDelete = (index) => {
    let updatedTodos = [...todos];
    const deleteditem = updatedTodos.splice(index, 1)[0];

    console.log("Deleted item:", deleteditem);

    setTodos(updatedTodos);
    localStorage.setItem("todolist", JSON.stringify(updatedTodos)); // Update the local storage

    // Retrieve the deleted items array from local storage
    let DeletedTodos = JSON.parse(localStorage.getItem("DeletedTodos")) || [];

    // Add the deleted item to the beginning of the array
    DeletedTodos.unshift(deleteditem);

    // Store the updated array back in local storage
    localStorage.setItem("DeletedTodos", JSON.stringify(DeletedTodos));

    console.log("Deleted list:", DeletedTodos);

    toast.success("Item deleted successfully!", {
      position: "top-right",
    });
  };
  
  const filteredTodos = todos.filter((todo) => todo.EmailId === loggeduser?.Email);
  //console.log("Todos for specific email id",filteredTodos);
  
  return (
    <>
      <Navigation isHome={true} />
      <div className="container mx-auto">
        <div className="">
          <h1 className="p-8  text-lime-400 flex items-center justify-center text-2xl mt-2 md:text-5xl">
            {loggeduser ? `Welcome ${loggeduser.Name}` : ""}
          </h1>
          <div className="p-6 mb-10">
            <div className=" container mx-auto flex flex-col bg-light max-h-[40%] p-10 gap-8 lg:w-[70%] ">
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col md:flex-row md:justify-between gap-8 justify-start  ">
                  <div className="flex flex-col gap-3 w-full md:w-4/12 ">
                    <label className="text-3xl font-bold" htmlFor="">
                      Title:
                    </label>
                    <input
                      onChange={handleChange}
                      value={todo.Title}
                      className="p-2 border bg-white outline-none text-gray-700 md:p-4 md:text-2xl  "
                      type="text"
                      placeholder="whats the title of your todo"
                      name="Title"
                    />
                  </div>
                  <div className="flex flex-col gap-3 w-full md:w-4/12">
                    <label className="font-bold text-3xl" htmlFor="">
                      Description:
                    </label>
                    <input
                      onChange={handleChange}
                      value={todo.Description}
                      className="p-2 bg-white w-full  outline-none text-gray-700 md:p-4 md:text-2xl"
                      type="text"
                      placeholder="whats the title of your todo"
                      name="Description"
                    />
                  </div>

                  <div className="mt-4 md:mt-12">
                    <button
                      onClick={Notify}
                      type="submit"
                      className="bg-green-500 flex items-center text-white p-4 font-bold text-2xl px-6 "
                    >
                      ADD
                    </button>
                    <ToastContainer />
                  </div>
                </div>
              </form>

              <div className="border-t flex justify-center gap-5 border-white pt-8">
                <div className="container mx-auto flex gap-5 w-full flex-col md:flex-row md:justify-center md:gap-5 ">
                  <button className="bg-teal-600 text-white p-5 font-bold text-2xl w-full md:w-48">
                    To DO
                  </button>
                  <button className="w-full md:w-48 bg-blue-600 text-white p-5 font-bold text-2xl ">
                    <Link to="/Completed">Completed</Link>
                  </button>

                  <button className="w-full md:w-48 bg-emerald-700 text-white p-5 font-bold text-2xl ">
                    <Link to="/Deleted">Deleted</Link>
                  </button>
                </div>
              </div>

              {filteredTodos.map((item, index) => {
                if (currentedit === index) {
                  return (
                    <div key={index}>
                      <div className="flex flex-col gap-8 justify-start md:justify-between md:flex-row md:w-full">
                        <div className="flex flex-col gap-3 w-full md:w-6/12 ">
                          <label className="text-3xl font-bold" htmlFor="">
                            Updated Title:
                          </label>
                          <input
                            onChange={(e) => handleUpdateTitle(e.target.value)}
                            value={currentediteditem.Title}
                            className="p-2 border bg-white outline-none text-gray-700 md:p-4 md:text-2xl  "
                            type="text"
                            placeholder="Updated title "
                            name="Updated Title"
                          />
                        </div>
                        <div className="flex flex-col gap-3 w-full md:w-6/12">
                          <label className="font-bold text-3xl" htmlFor="">
                            New Description:
                          </label>
                          <input
                            onChange={(e) => handleUpdateDesc(e.target.value)}
                            value={currentediteditem.Description}
                            className="p-2 bg-white w-full  outline-none text-gray-700 md:p-4 md:text-2xl"
                            type="text"
                            placeholder="Edit description"
                            name="New Description"
                          />
                        </div>

                        <div className="mt-12">
                          <button
                            onClick={handleUpdatelist}
                            type="button"
                            className="bg-green-500 flex items-center text-white p-4 font-bold text-2xl px-6"
                          >
                            Update
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                } else {
                  return (
                        <div key={index}>
                      <Todolist
                        title={item.Title}
                        description={item.Description}
                        time={item.time}
                        delicon={
                          <MdDelete
                            className=" hover:text-red hover:rounded-full  hover:w-10 hover:bg-red-700 "
                            size={"40px"}
                            onClick={() => handleDelete(index)}
                          />}
                        editicon={
                          <MdEditDocument
                            className="hover:rounded-full hover:w-10  hover:bg-yellow-400"
                            size={"40px"}
                            onClick={() => handleUpdate(index, item)}
                          />}
                        completed={
                          <FaCheck
                            className="hover:rounded-full hover:w-10  hover:bg-green-800"
                            size={"40px"}
                            onClick={() => handleComplete()}
                          />}
                      />
                      </div> 
                  );
                }
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;

import { FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";
