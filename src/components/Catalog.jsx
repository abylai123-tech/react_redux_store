import React, { useState, useEffect } from 'react';
import { data } from '../data/products.js';
import { useSelector } from 'react-redux';

export const Catalog = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch('https://fakestoreapi.com/products/categories');
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data.slice(0, 4)); 
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="catalog_container">
      <div className='catalog_logo'>
        <h2>Каталог</h2>
      </div>
      <div className='main_content'>
        {isLoading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error.message}</p>
        ) : (
          categories.map((category, index) => (
            <div key={index} className={`category ${category}`}>
              <span>{category}</span>
              <div className="product-list">
                {products.map((product, index) => (
                  <div key={index} className="product">
                    <div className="product-container">
                      <img src={product.image} alt={product.title} />
                      <div className="product-info">
                        <h3>{product.title}</h3>
                        <p>{product.description}</p>
                        <p>Price: {product.price}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
