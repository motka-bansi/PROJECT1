import React from 'react';

import { useCart } from '../CartContext';  


const Cart = () => {
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity, clearCart } = useCart();

  return (
    <div>
      <h1 className="text-center">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p style={{ textAlign: 'center' }}>Your cart is empty.</p>
      ) : (
        <div className="cart-main" style={{ padding: '20px' }}>
          {cartItems.map((item) => (
            <div 
              key={item.id} 
              style={{ border: '1px solid #ddd', padding: '10px', marginBottom: '10px' }}
            >
              <img src={item.image} alt={item.title} style={{ maxWidth: '100px', borderRadius: '8px' }} />
              <h2>{item.title}</h2>
              <p>Price: ₹{item.price}</p>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                <button 
                  style={{ padding: '5px 15px', background: 'black', color: 'white', border: 'none', borderRadius: '5px' }}
                  onClick={() => decreaseQuantity(item.id)}
                >
                  -
                </button>
                <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{item.quantity}</span>
                <button 
                  style={{ padding: '5px 15px', background: 'black', color: 'white', border: 'none', borderRadius: '5px' }}
                  onClick={() => increaseQuantity(item.id)}
                >
                  +
                </button>
              </div>
              <button 
                style={{ background: 'red', color: 'white', padding: '10px 20px', borderRadius: '5px', border: 'none', marginTop: '10px' }}
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </div>
          ))}
          
          <button 
            style={{ background: 'black', color: 'white', padding: '15px 30px', borderRadius: '5px', border: 'none', marginTop: '20px' }}
            onClick={clearCart}
          >
            Clear Cart
          </button>

          <h3>
            Total: ₹
            {cartItems.reduce((total, item) => total + item.price * Number(item.quantity), 0).toFixed(2)}
          </h3>
        </div>
      )}
    </div>
  );
};

export default Cart;
