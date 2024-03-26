import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import logo from '../Pictures/logo.png';
import './model.css'; 
import { Link } from 'react-router-dom';
function Header() {
    return (
      <header className="header">
        <div className="header-left">
        <img src={logo} alt="Logo" className="logo" />
          
        </div>
        <nav className="header-right">
          <ul>
            <li><Link to="/">Available Models</Link></li>
            <li><Link to="/featured">Featured Models</Link></li>
          </ul>
        </nav>
      </header>
    );
  }
  export default Header;