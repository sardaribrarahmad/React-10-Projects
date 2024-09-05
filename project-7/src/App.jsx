
import Verified from './Pages/Verified/Signupverified';
import Login from './Pages/Login/Login';
import Signup from './Pages/Signup/Signup';
import Forgot from './Pages/Forgot/Forgot';
import Reset from './Pages/Reset/Reset';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/Login",
    element: <Login />,
  },
  {
    path: "/Forgot",
    element: <Forgot />,
  },
  {
    path: "/Verified",
    element: <Verified />,
  },
  {
    path: "/Reset",
    element: <Reset />,
  },
  {
    path: "/Signup", // Adding a route for the root path
    element: <Signup/>, // or any other default component you want to render
  },
  
]);

const App = () => {
  return (
    <>
    <RouterProvider router={router} />
  </>
  )
}

export default App;
