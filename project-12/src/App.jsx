import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Cart from "./Pages/Cart";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Checkout from "./Pages/Checkout";
import Productdetail from "./Pages/Productdetail";
import Ordersummary from "./Pages/Ordersummary";
function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />}> </Route>
          <Route path="/Shop" element={<Shop />}> </Route>
          <Route path="/Contact" element={<Contact />}> </Route>
          <Route path="/About" element={<About />}> </Route>
          <Route path="/Cart" element={<Cart />}> </Route>
          <Route path="/Register" element={<Register />}> </Route>
          <Route path="/Login" element={<Login />}> </Route>
          <Route path="/Checkout" element={<Checkout />}> </Route>
          <Route path="/Productdetail" element={<Productdetail />}> </Route>
          <Route path="/Ordersummary" element={<Ordersummary />}> </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
