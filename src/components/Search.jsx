import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchQuery } from '../actions/searchActions';

const Search = () => {
  const dispatch = useDispatch();
  const searchQuery = useSelector(state => state.search.searchQuery);
  const products = useSelector(state => state.products);

  const handleSearchInputChange = (e) => {
    dispatch(setSearchQuery(e.target.value));
  };

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <input 
        type="text" 
        placeholder="Search..." 
        value={searchQuery} 
        onChange={handleSearchInputChange} 
      />
      <div>
        {filteredProducts.map(product => (
          <div key={product.id}>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>Price: {product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
