import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingCart, faSearch } from '@fortawesome/free-solid-svg-icons';
import '../styles/header.css'
import '../App.css'
import logo from '../assets/logo/logo.png'
const Header = () => {
  return (
    <header>
      {/* Top Header */}
      <div className="top-header">
        <div className='max-w'><span>Chào mừng bạn đến với thực phẩm rau, củ, quả</span></div>
      </div>

      {/* Main Header */}
      <div className="header max-w">
        {/* Logo */}
        <div className="logo">
          <img src={logo} alt="Logo" /> {/* Thay logo.png bằng đường dẫn ảnh logo của bạn */}
        </div>

        {/* Thanh tìm kiếm */}
        <div className="search-bar">
          <input type="text" placeholder="Tìm kiếm..." />
          <div className='search-icon-o'>
            <FontAwesomeIcon icon={faSearch} className="search-icon" />
          </div>
        </div>

        {/* Các nút yêu thích và giỏ hàng */}
        <div className="icons">
          <button className="favorites header-item_right">
            <FontAwesomeIcon icon={faHeart} />
          </button>
          <button className="cart header-item_right">
            <FontAwesomeIcon icon={faShoppingCart} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
