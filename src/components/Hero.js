import '../styles.css';
import HeroBg from './Images/jasmine_flower_02.jpg';
// react icons
import { FaTwitterSquare } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { IconContext } from 'react-icons';
const Hero = () => {
  return (
    <IconContext.Provider value={{ className: 'media-icons' }}>
      <section id='home' className='hero--cnt'>
        <div className='hero-text-cnt '>
          <div className=' '>
            <h1 className='name'>
              Hi, I'm <span className='jasmin'>Jasmin Villatoro</span>
            </h1>
            <h1 className='job-title'>Software Developer</h1>
            <div className='flex-icons'>
              <a
                target='_blank'
                rel='noreferrer'
                href='https://www.linkedin.com/in/jasmin-villatoro/'>
                <FaLinkedin />
              </a>
              <a
                target='_blank'
                rel='noreferrer'
                href='https://twitter.com/Jas_codes'>
                <FaTwitterSquare />
              </a>
              <a
                target='_blank'
                rel='noreferrer'
                href='https://github.com/Jasminvillatoro'>
                <FaGithub />
              </a>
              <a
                target='_blank'
                rel='noreferrer'
                href='mailto:jasminvilla321@gmail.com? subject=message from portfolio'>
                <HiOutlineMail />
              </a>
            </div>
          </div>
        </div>
      </section>
    </IconContext.Provider>
  );
};

export default Hero;
