import React from 'react';
import { useSelector, useDispatch } from 'react-redux'; 
import { Link } from 'react-router-dom';
import search from "../assets/search.png";
import { addToCart } from '../reducers/cartSlice';

export const Header = () => {
  const cartItems = useSelector(({cartSlice}) => cartSlice.cartItems);
  const dispatch = useDispatch(); 

  const handleAddToCart = () => {
    if (cartItems.length > 0) {
      const product = cartItems[0];
      dispatch(addToCart(product));
    }
  };

  return (
    <header className="list">
      <div className="container">
        <div className="logo">
          <h1>GLANCE</h1>
        </div>
        <div className="search-bar">
          <img src={search} alt="search" className="search-icon"/>
          <input type="text" placeholder="Поиск" style={{ paddingLeft: 35 }}/>
        </div>
        <div className="user-actions">
          <div className="catalog">
            <Link to="/catalog">
              <button className="catalog-button">Каталог</button>
            </Link>
          </div>
          <div className="stocks">
            <Link to="/stocks"> 
              <button className="stocks-button">Акции</button>
            </Link>
          </div>
          <div className="cart">
            <Link to="/cart">
              <button className="cart-button" onClick={handleAddToCart}>Корзина ({cartItems.length})</button>
            </Link>
          </div>
          <div className="profile">
            <Link to="/profile"> 
              <button className="profile-button">Профиль</button>
            </Link>
          </div>
        </div>
      </div>
      <hr/>
    </header>
  );
}
