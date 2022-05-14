import logo from './Images/_logoo.png';
import '../styles.css';
import React, { useState } from 'react';
import { MdClose } from 'react-icons/md';
import { FiMenu } from 'react-icons/fi';
const Nav = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <header>
      <img className="logo" src={logo} alt="logo" />
      <nav>
        <div className="hamburger " onClick={handleToggle}>
          {navbarOpen ? (
            <MdClose style={{ color: '#000', width: '40px', height: '40px' }} />
          ) : (
            <FiMenu style={{ color: '#000', width: '40px', height: '40px' }} />
          )}
        </div>
        <ul className={`menuNav ${navbarOpen ? ' showMenu' : ''}`}>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
