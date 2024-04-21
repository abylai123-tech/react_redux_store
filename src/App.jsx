import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header';
import { Catalog } from './components/Catalog';
import { Stocks } from './components/Stocks';
import Cart from './components/Cart'; 
import Profile from './components/Profile'; 
import Search from './components/Search';
import { ProductCard } from './components/ProductCard';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGooglePlusG, faFacebookF, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

library.add(faGooglePlusG, faFacebookF, faGithub, faLinkedinIn);

function App() {
  const [currentPage, setCurrentPage] = useState('productCard'); 
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cartItems.filter(item => item.id !== productId);
    setCartItems(updatedCart);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  let pageContent;
  if (currentPage === 'productCard') { 
    pageContent = <ProductCard addToCart={addToCart} />; 
  } else if (currentPage === 'cart') {
    pageContent = <Cart cartItems={cartItems} removeFromCart={removeFromCart} />;
  } else if (currentPage === 'search') {
    pageContent = <Search />;
  }

  return (
    <Router>
      <div>
        <Header onPageChange={handlePageChange} />
        <Routes>
          <Route path="/stocks" element={<Stocks />} />
          <Route path="/cart" element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} />} />
          <Route path="/catalog" element={<Catalog/>}/>
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;