import './App.css';
import Create from './Components/Create';
import Update from './Components/Update';
import Read from './Components/Read';


import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Read/>, // Root path component
  },
  {
    path: "/Update",
    element: <Update />,
  },
  {
    path: "/Create",
    element: <Create />,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
