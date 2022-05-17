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
    <section id="home" className="hero--cnt">
      <div className="hero-text-cnt">
        <h1 className="name">Hi, I'm Jasmin</h1>
        <h1 className="job-title">Frontend Web Developer</h1>
        <IconContext.Provider value={{ className: 'media-icons' }}>
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
        </IconContext.Provider>
        <p>I love to level up my skills! 🤩</p>
      </div>
      <div className="hero-img-cnt">
        <img src={coder} alt="programmer" />
      </div>
    </section>
  );
};

export default Hero;
