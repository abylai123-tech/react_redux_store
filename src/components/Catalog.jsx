import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import '../components/styles/Catalog.css';

export const Catalog = () => {
  const { category } = useParams();
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
        setProducts(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const filteredProducts = category
    ? products.filter(product => product.category === category)
    : products;

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
          <div>
            <div className="category_links">
              {categories.map((cat, index) => (
                <Link key={index} to={`/catalog/${cat}`} className="category_link">
                  <span>{cat}</span>
                </Link>
              ))}
            </div>
            <div className="product_list">
              {filteredProducts.map((product, idx) => (
                <div key={idx} className="product">
                  <div className="product-container">
                    <img src={product.image} alt={product.title} />
                    <div className="product-info">
                      <h3>{product.title}</h3>
                      <p>{product.description}</p>
                      <p>Price: {product.price}₽</p> 
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
