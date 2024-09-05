
import Mail from './Components/Mail';
import Inbox from "./Pages/Inbox"; 
import {
  createBrowserRouter,
  RouterProvider,
} 


from "react-router-dom";
import "./index.css";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import SendEmail from './Components/SendEmail';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Inbox />,
    // children:[
    //   {
    //     path: "/",
    //     elemet:<Inbox />
    //   },
    //   {
    //     path: "/mail/:id",
    //     elemet:<Mail />
    //   },
    // ]
  },

  {
    path:'/mail',
    id:'alnlslASaospjaSJAsoAnSO',
    element:<Mail />
  }

  
]);

function App() {

  return (
    <>
    <Navbar />
    <RouterProvider router={router} />
    <div className='absolute w-[30%] bottom-0 right-36 z-10'>
    <SendEmail />
    </div>
        </>
    
  );
}

export default App;
