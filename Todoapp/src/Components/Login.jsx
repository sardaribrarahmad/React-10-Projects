import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-toastify/dist/ReactToastify.css";
import { FcGoogle } from "react-icons/fc";
import { ImFacebook2 } from "react-icons/im";
import Home from "./Home";

const Login = () => {
  const navigate = useNavigate();
  const handleRegister = () => {
    navigate("/register");
  };

  const [userlogin, setUserlogin] = useState({
    Email: " ",
    Password: " ",
  });

  const handleChange = (e) => {
    setUserlogin({ ...userlogin, [e.target.name]: e.target.value.trim() });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const saveduser = JSON.parse(localStorage.getItem("users list")) || [];
    console.log("Stored users:", saveduser); // Debugging line
    console.log("Login attempt:", userlogin); // Debugging line

    const userFound = saveduser.find(
      (user) =>
        user.Email === userlogin.Email && user.Password === userlogin.Password
    );

    if (userFound) {
      localStorage.setItem("loggedInUser", JSON.stringify(userFound));
      console.log(`Welcome, ${userFound.Name}`);
      toast.success("logged In!", {
        position: "top-right",
      });
      navigate("/Home");
    } else {
      toast.error("Invalid email and password !", {
        position: "top-right",
      });
    }

    setUserlogin({
      Email: "",
      Password: "",
    });
  };
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
      {!loggedUser ? (
        <div className="w-screen h-screen bg-black">
          <div className="container mx-auto p-2">
            <div className="text-white font-fold text-6xl flex justify-center mt-10">
              <h1>Todos App</h1>
            </div>
            <div className="flex items-center h-[50%] mt-10 justify-center">
              <div className=" bg-white container mx-auto md:max-w-[50%]  shadow-md shadow-slate-400">
                <div className="p-4">
                  <div className=" justify-between items-center ">
                    <h2 className="text-4xl font-bold mb-8 flex justify-center items-center w-full">
                      LOGIN
                    </h2>
                    <span className="text-3xl font-bold mb-4 w-full flex justify-center gap-8">
                      <FcGoogle
                        size={"44px"}
                        className="hover:transtion hover:transition-transform hover:scale-125"
                      />
                      <span className="text-blue-700 hover:transtion hover:transition-transform hover:scale-125">
                        <ImFacebook2 size={"44px"} />
                      </span>
                    </span>
                    <h1 className="text-3xl font-bold mb-4 w-full flex justify-center">
                      -or-
                    </h1>
                  </div>

                  <form
                    className=" w-[100%] md:w-[60%] flex flex-col  justify-items-center mx-auto"
                    onSubmit={handleSubmit}
                  >
                    <div className="mb-2">
                      <label
                        className="block text-gray-800 text-xl  font-bold"
                        htmlFor=""
                      >
                        Email
                      </label>
                      <input
                        onChange={handleChange}
                        value={userlogin.Email}
                        className=" bg-transparent w-full px-2 py-2 border border-black  "
                        type="email"
                        name="Email"
                        placeholder="Enter email"
                      />
                    </div>

                    <div className="mb-2">
                      <label
                        className="block text-gray-700 text-xl font-bold"
                        htmlFor=""
                      >
                        Password
                      </label>
                      <input
                        onChange={handleChange}
                        value={userlogin.Password}
                        className=" bg-transparentborder border-black w-full px-3 py-2 border "
                        name="Password"
                        placeholder="...."
                      />
                    </div>

                    <div className="container mx-auto flex justify-between mb-6 mt-6 md:flex-row w-full">
                      <span className=" text-gray-800 font-semibold  flex items-center gap-3 ">
                        <input
                          className="size-6"
                          type="checkbox"
                          name=""
                          id=""
                        />
                        Remember me
                      </span>

                      <a href="" className="text-red-800 font-semibold text-lg">
                        Forget Password?
                      </a>
                    </div>
                    <div className="flex justify-center items-center">
                      <div className="mb-2 w-full">
                        <button
                          type="submit"
                          className="bg-green-700 text-center w-full align-center text-white py-2 px-2  rounded-xl text-2xl"
                        >
                          Sign In
                        </button>
                      </div>
                      <ToastContainer />
                    </div>
                  </form>

                  <div className="text-center space-x-2 space-y-2">
                    <span className="text-gray-700 text-xl">
                      D'not have an account?
                    </span>
                    <button
                      onClick={() => handleRegister()}
                      className="text-red-800 font-bold text-xl"
                    >
                      Register
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Home />
      )}
    </div>
  );
};

export default Login;
