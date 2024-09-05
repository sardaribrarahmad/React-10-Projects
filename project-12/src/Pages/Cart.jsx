import React from "react";
import {Cardbox} from "../Components/Cardbox";
import EmptyCart from '../assets/images/emptycart.png'
import {useSelector} from 'react-redux'
const Cart = () => {
  const cart = useSelector(state => state.cart)
  return (
    <div>
      {
        cart.products.length < 0 ?
        <div></div>
        :<div className="flex justify-center">
          <img src={EmptyCart} className="h-96" alt="" />
        </div>
      }
      <Cardbox />
    </div>
  );
};

export default Cart;
