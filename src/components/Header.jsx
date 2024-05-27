// src/Header.js
import React from 'react';
import headerImage from '../logos.webp';
import logoImage from '../logo-javascript@2x.png';
import './Header.css';

const Header = () => {
  return (
    <header>
        <div className="d-flex bg-gradient">
          <div className="d-flex flex-grow-1">
            <nav className="courseTitle">
              <button className="navbar-brand border-0">
              <img
                src={headerImage}
                alt="logo"
                className="header-logo"
              />
              </button>
            </nav>
            <div className="flex-grow-1">
              <div className="ReactTitle ps-3  d-flex align-items-center">
              <img
                src={logoImage}
                alt="logo"
                className="header-img"
              />
              <h3 className="mb-0">React Apps</h3>
            </div> 
              <div className="d-flex ps-3 align-items-center">
                <div className="flex-grow-1">
                  <h4>Rocket Launch</h4>
              <p>Purpose : Replicates the JS Rocket Launch App Using React</p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </header>
  );
};

export default Header;
