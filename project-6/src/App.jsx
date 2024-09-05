import Support from './Pages/Support/Support';
import Transaction from './Pages/Transaction/Transaction';
import Dashboard from './Pages/Dashboard/Dashboard';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/Dashboard",
    element: <Dashboard />,
  },
  {
    path: "/transaction",
    element: <Transaction />,
  },
  {
    path: "/Support",
    element: <Support />,
  },
  {
    path: "/", // Adding a route for the root path
    element: <Dashboard />, // or any other default component you want to render
  },
  
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
