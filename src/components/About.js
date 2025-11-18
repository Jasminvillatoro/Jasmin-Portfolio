import about from './Images/2025_linkedin_profile.jpeg';
import { IconContext } from 'react-icons';
import { AiFillHtml5 } from 'react-icons/ai';
import { IoLogoCss3 } from 'react-icons/io';
import { IoLogoJavascript } from 'react-icons/io';
import { FaReact } from 'react-icons/fa';
import { FaGitAlt } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { SiVisualstudiocode } from 'react-icons/si';
import { SiTailwindcss } from 'react-icons/si';
import { BsBootstrapFill } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';
const About = () => {
  return (
    <>
      <section className='about--cnt' id='about'>
        <div className='about-img-cnt'>
          <img
            className='about-photo'
            src={about}
            alt='about section profile'
          />
        </div>
        <div className='about--text-cnt'>
          <h1>About Me</h1>
          <p className='about-p'>
            Hey there! Welcome to my website. I’m currently working toward my
            Bachelor’s in Software Engineering. My love for programming began
            back in 2022 when I randomly came across this career online—and I’ve
            been hooked ever since!
          </p>
          <p className='about-p'>
            I graduated from a coding bootcamp and landed a job as a Frontend
            Developer, where I worked with HTML, CSS, JavaScript, and .NET.
            Since then, I’ve explored modern tools like React, Next.js, and
            TypeScript, and even jumped into backend development with Python.
            I’ve built several projects and had the chance to contribute to an
            open-source project, which was an awesome experience.
          </p>
          <div className='contact-btn-about'>
            <a
              className='mail-a'
              target='_blank'
              rel='noreferrer'
              href='mailto:jasminvilla321@gmail.com? subject=message from portfolio'>
              <HiOutlineMail className='mail-icon' />
              Contact
            </a>
          </div>
        </div>
      </section>
      <section className='skills-section'>
        <h1>Tech Stack & Tools</h1>
        <div className='skills-cnt'>
          <div className='skill-items-cnt'>
            <IconContext.Provider value={{ className: 'skill-items' }}>
              <AiFillHtml5 style={{ color: '#f55a42' }} />
              <IoLogoCss3 style={{ color: '#066BF7' }} />
              <IoLogoJavascript
                style={{
                  color: '#000',
                  backgroundColor: '#EDD62E ',
                  fontSize: '5rem',
                }}
              />
              <FaReact style={{ color: '#066BF7 ' }} />
              <FaGitAlt style={{ color: '#f55a42' }} />
              <FaGithub style={{ color: '#fff' }} />
              <SiVisualstudiocode style={{ color: '#066BF7 ' }} />
              <SiTailwindcss style={{ color: '#38bdf8' }} />
              <BsBootstrapFill style={{ color: '#6d28d9' }} />
            </IconContext.Provider>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
