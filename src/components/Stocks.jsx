import React, { useState, useEffect } from 'react';
import { ProductCard } from './ProductCard';
import Cart from './Cart';

export const Stocks = () => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
      })
      .catch(error => console.log('Error fetching data:', error));
  }, []);

  const addToCart = (product) => {
    setCartItems(prevCartItems => [...prevCartItems, product]);
  };

  return (
    <div className="sale-container">
      <h2>Акции</h2>
      <div className="product-list">
        {products.map((product, index)  => (
          <ProductCard
            key={product.id}
            product={product}
            oldPrice={product.price * 2 + " ₽"} 
            newPrice={product.price + " ₽"}
            discount="-20%" 
            inStock={true} 
            onError={(e) => {
              e.target.src = 'https://i.pravatar.cc';
            }}
            addToCart={() => addToCart(product)} 
          />
        ))}
      </div>
    </div>
  );
};
