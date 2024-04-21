import React, { useState } from 'react';
import heartFilled from "../assets/heartFilled.png";
import heartEmpty from "../assets/heartEmpty.png";
import { addToCart } from '../reducers/cartSlice';
import { useSelector, useDispatch } from 'react-redux';

export const ProductCard = ({ oldPrice, newPrice, discount, inStock, product}) => {
    const dispatch = useDispatch()
    const [isFavorite, setIsFavorite] = useState(false);

    const toggleFavorite = () => {
      setIsFavorite(!isFavorite);
    };

    return (
      <div className="product-card">
        <img src={product.image} alt={product.title} />
        <div className='product_button'>
          <input type="radio" name='radio' style={{ marginRight: '10px'}}/>
          <input type="radio" name='radio' style={{ marginRight: '10px'}}/>
          <input type="radio" name='radio'/>
        </div>
        <div className="product-info">
          <h3>{product.title}</h3>
          <div className="price">
            <span className="old-price">{oldPrice}</span>
            <span className="new-price">{newPrice}</span>
            <span className="discount">{discount}</span>
          </div>
          <div className="avialable">
            <span>{inStock ? 'В наличии' : 'Нет в наличии'}</span>
          </div>
          <div className="product-buttons">
            <div className='favorites' onClick={toggleFavorite}>
              <img src={isFavorite ? heartFilled : heartEmpty} alt="heart" />
            </div>
            {inStock && <button className="add-to-cart-button" onClick={() => dispatch(addToCart(product))}>В корзину</button>} 
          </div>
        </div>
      </div>
    );
    
  };
