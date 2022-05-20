import '../styles.css';
import { FaTwitterSquare } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { IconContext } from 'react-icons';

const Footer = () => {
  return (
    <footer>
      <div className="links-cnt">
        <h2>Links</h2>
        <ul className="footer-ul">
          <li className="footer-li">
            <a className="footer-a" href="#home">
              Home
            </a>
          </li>
          <li className="footer-li">
            <a className="footer-a" href="#about">
              About
            </a>
          </li>
          <li className="footer-li">
            <a className="footer-a" href="#projects">
              Projects
            </a>
          </li>
        </ul>
      </div>
      <div className="contact-icons">
        <h2>Get in touch</h2>
        <IconContext.Provider value={{ className: 'media-icons  ' }}>
          <a href="https://www.linkedin.com/in/jasmin-villatoro/">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com/Jas_codes">
            <FaTwitterSquare />
          </a>
          <a href="https://github.com/Jasminvillatoro">
            <FaGithub />
          </a>
          <a href="mailto:jasminvilla321@gmail.com? subject=message from portfolio">
            <HiOutlineMail />
          </a>
          <p>&#169;2022 created by Jasmin Villatoro</p>
        </IconContext.Provider>
      </div>
    </footer>
  );
};

export default Footer;
