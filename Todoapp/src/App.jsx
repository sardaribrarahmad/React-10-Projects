
import './App.css'
import Completed from './Components/Completed';
import Home from './Components/Home';
import Login from './Components/Login';
import Navigation from './Components/Navigation';
import Register from './Components/Register';
import Deleted  from './Components/Deleted';

import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="Register" element={<Register />}></Route>
        <Route path="/Home" element={<Home />}></Route>
        <Route path="/Completed" element={<Completed />}></Route>
        <Route path="/Deleted" element={<Deleted />}></Route>
      </Routes>
      </BrowserRouter>

      
    </>
  )
}

export default App;
