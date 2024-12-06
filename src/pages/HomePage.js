import React from 'react';
import '../styles/HomePage.css'; // Import CSS file
import backtitle from '../assets/backtitle/02.jpg'
import Header from '../components/Header.js'
import Navbar from '../components/Navbar.js';
const HomePage = () => {
  return (
    <div className="home-page">
      <Header/>
      <Navbar/>
    </div>
  );
}

export default HomePage;
