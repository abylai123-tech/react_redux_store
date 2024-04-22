import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './CategoryCard.css';

const CategoryCard = ({ category }) => {
  const products = useSelector(state => state.productsSlice.products);
  const product = products.find(product => product.category === category);

  return (
    <div className='category-card'>
      <Link to={`/catalog/${category}`}>
        <div className='category-img'>
          <img src={product.image} alt='Category' height={160} />
        </div>
        <div className='category-name'>
          {category}
        </div>
      </Link>
    </div>
  );
};

export default CategoryCard;
    