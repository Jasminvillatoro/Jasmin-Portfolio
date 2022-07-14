import '../styles.css';
import coder from './Images/programmer.jpg';
// react icons
import { FaTwitterSquare } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { IconContext } from 'react-icons';

const Hero = () => {
  return (
    <IconContext.Provider value={{ className: 'media-icons' }}>
      <section id="home" className="hero--cnt">
        <div className="hero-text-cnt">
          <h1 className="name">Hi, I'm Jasmin</h1>
          <h1 className="job-title">Frontend Web Developer</h1>
          <div className="flex-icons">
            <a
              target="_blank"
              rel="noopener"
              href="https://www.linkedin.com/in/jasmin-villatoro/">
              <FaLinkedin />
            </a>
            <a
              target="_blank"
              rel="noopener"
              href="https://twitter.com/Jas_codes">
              <FaTwitterSquare />
            </a>
            <a
              target="_blank"
              rel="noopener"
              href="https://github.com/Jasminvillatoro">
              <FaGithub />
            </a>
            <a
              target="_blank"
              rel="noopener"
              href="mailto:jasminvilla321@gmail.com? subject=message from portfolio">
              <HiOutlineMail />
            </a>
          </div>
        </div>
        <div className="hero-img-cnt">
          <img className="hero-img" src={coder} alt="programmer" />
        </div>
      </section>
    </IconContext.Provider>
  );
};

export default Hero;
