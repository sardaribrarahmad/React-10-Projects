import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export const Cardbox = () => {
  const cart = useSelector(state => state.cart)
  const navigate = useNavigate();

  return (
    <div>
      <h3>SHOPPING CART</h3>
      <div>
        <div>
          <p>PRODUCTS</p>
          <div>
            <p>Price</p>
            <p>Quantity</p>
            <p>SubTotal</p>

            <div className='flex items-center justify-center'>
             <button onClick={()=>navigate('/Checkout')} 
                className='bg-red-500 p-4 font-bold'>checkout </button>
            </div>
          
          </div>
        </div>
        <div>
          {cart.products.map((product) => (
            <div key={product.id} style={{ display: 'flex', marginBottom: '10px' }}>
              <div>
                <img src={product.image} alt={product.name} style={{ width: '50px', height: '50px' }} />
              </div>
              <div style={{ marginLeft: '10px' }}>
                <p>{product.name}</p>
                <p>Price: ${product.price}</p>
                <p>Quantity: {product.quantity}</p>
                <p>SubTotal: ${product.price * product.quantity}</p>

                
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Cardbox;
