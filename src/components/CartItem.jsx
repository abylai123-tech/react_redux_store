import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../reducers/cartSlice'; 
import './styles/CartItem.css'

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(item.id));
  };

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.title} className="cart-item-image" />
      <div className="cart-item-details">
        <h3 className="cart-item-title">{item.title}</h3>
        <p className="cart-item-description">{item.description}</p>
        <p className="cart-item-price">Price: {item.price}</p>
        <button className="cart-item-remove-button" onClick={handleRemoveFromCart}>Remove</button>
      </div>
    </div>
  );
};

export default CartItem;