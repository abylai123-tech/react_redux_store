import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';

const Cart = () => {
  const cartItems = useSelector(({ cartSlice }) => cartSlice.cartItems);

  if(cartItems.length === 0){
    return(
      <p>Ваша корзина пуста</p>
    )
  }

  return (
    <div className="cart-container">
      <h2>Корзина</h2>
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
