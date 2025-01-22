import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from './slice';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Product = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products?limit=30');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    toast.success(`${product.title} added to cart!`, { position: "top-right" });
  };

  return (
    <div>
      <h1 className='text-center'>Products</h1>
      <div className="cart-main" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px', padding: '20px' }}>
        {products.map(product => (
          <div className="item" key={product.id} style={{
            backgroundColor: 'white',
            border: '1px solid #ddd',
            borderRadius: '8px',
            margin: '1rem',
            padding: '1rem',
            textAlign: 'center',
            width: '300px'
          }}>
            <img src={product.image} alt={product.title} style={{ maxWidth: '100%', borderRadius: '8px' }} />
            <h2 style={{ color: '#333', margin: '0.5rem 0' }}>{product.title}</h2>
            <p style={{ color: 'black' }}>{product.description}</p>
            <p style={{ color: '#666' }}>{product.category}</p>
            <button 
              style={{
                padding: '12px 50px',
                fontSize: '1rem',
                backgroundColor: 'black',
                border: 'none',
                borderRadius: '1rem',
                color: 'white',
                fontWeight: 'bold'
              }} 
              onClick={() => handleAddToCart(product)}
            >
              ADD TO CART
            </button>
            <h3>₹{product.price}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
