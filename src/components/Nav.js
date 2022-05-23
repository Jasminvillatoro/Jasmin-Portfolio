import logo from './Images/_logoo.png';
import '../styles.css';
import React, { useState } from 'react';
import { MdClose } from 'react-icons/md';
import { FiMenu } from 'react-icons/fi';
import { FiMail } from 'react-icons/fi';

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
        <ul className={`menuNav nav-ul ${navbarOpen ? ' showMenu' : ''}`}>
          <li className="nav-li">
            <a className="navbar-a" href="#home">
              Home
            </a>
          </li>
          <li className="nav-li">
            <a className="navbar-a" href="#about">
              About
            </a>
          </li>
          <li className="nav-li">
            <a className="navbar-a" href="#projects">
              Projects
            </a>
          </li>
          <li className="nav-li">
            <a
              className="  contact-btn-a"
              href="mailto:jasminvilla321@gmail.com? subject=message from portfolio">
              <button className="contact-btn-nav">
                Contact <FiMail />
              </button>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
