import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import '../App.css';
import '../styles/navbar.css';

const Navbar = () => {
  return (
    <nav>
      {/* Navbar */}
      <div className="navbar max-w">
        <ul>
          <li className='nav-item'>
            Trang chủ <FontAwesomeIcon icon={faChevronDown} className="icon" />
            <ul className="dropdown">
              <li><Link to="/">Quay lại Trang chủ</Link></li>
            </ul>
          </li>
          <li className='nav-item'>
            Giới thiệu <FontAwesomeIcon icon={faChevronDown} className="icon" />
            <ul className="dropdown">
              <li><Link to="/about">Xem Giới thiệu</Link></li>
            </ul>
          </li>
          <li className='nav-item'>
            Sản phẩm <FontAwesomeIcon icon={faChevronDown} className="icon" />
            <ul className="dropdown">
              <li><Link to="/products">Xem tất cả Sản phẩm</Link></li>
            </ul>
          </li>
          <li className='nav-item'>
            Thể loại <FontAwesomeIcon icon={faChevronDown} className="icon" />
            <ul className="dropdown">
              <li><Link to="/category/fruits">Trái cây</Link></li>
              <li><Link to="/category/vegetables">Rau</Link></li>
              <li><Link to="/category/roots">Củ quả</Link></li>
            </ul>
          </li>
          <li className='nav-item'>
            Liên hệ <FontAwesomeIcon icon={faChevronDown} className="icon" />
            <ul className="dropdown">
              <li><Link to="/contact">Liên hệ ngay</Link></li>
            </ul>
          </li>
          <li className='nav-item'>
            Tài khoản <FontAwesomeIcon icon={faChevronDown} className="icon" />
            <ul className="dropdown">
              <li><Link to="/signup">Đăng ký</Link></li>
              <li><Link to="/login">Đăng nhập</Link></li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
