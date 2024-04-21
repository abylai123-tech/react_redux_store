import React from 'react';
import CartItem from './CartItem'; 
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../reducers/сartSlice'; 

function ProductList() {
  const dispatch = useDispatch(); 
  const products = useSelector(state => state.products); 

  const handleAddToCart = (product) => {
    dispatch(addToCart(product)); 
  };

  return (
    <div className="product-list">
      {products.map((product) => (
        <CartItem key={product.id} product={product} addToCart={handleAddToCart} />
      ))}
    </div>
  );
}

export default ProductList;