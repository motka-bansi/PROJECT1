import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, clearCart } from './slice';
import { toast } from 'react-toastify';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (item) => {
    dispatch(removeFromCart(item));
    toast.error(`${item.title} removed from cart`, { position: "top-right" });
  };

  return (
    <div>
      <h1 className="text-center">Your Cart</h1>
      {cartItems.length === 0 ? (
        <h3 style={{ textAlign: "center" }}>Cart is empty</h3>
      ) : (
        <div style={{ padding: '20px' }}>
          {cartItems.map((item) => (
            <div key={item.id} style={{
              border: '1px solid #ddd',
              borderRadius: '8px',
              padding: '15px',
              marginBottom: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <img src={item.image} alt={item.title} style={{ width: '80px', borderRadius: '8px' }} />
              <h4>{item.title}</h4>
              <h4>₹{item.price}</h4>
              <button 
                style={{ background: 'red', color: 'white', padding: '10px 20px', borderRadius: '5px', border: 'none' }}
                onClick={() => handleRemoveFromCart(item)}
              >
                Remove
              </button>
            </div>
          ))}
          <button 
            style={{ background: 'black', color: 'white', padding: '15px 30px', borderRadius: '5px', border: 'none', marginTop: '20px' }}
            onClick={() => dispatch(clearCart())}
          >
            Clear Cart
          </button>
          <h3>
  Total: ₹{cartItems.reduce((total, item) => total + Number(item.price), 0).toFixed(2)}
</h3>
        </div>
      )}
    </div>
  );
};

export default Cart;
