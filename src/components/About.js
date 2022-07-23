import about from './Images/Aboutimg.jpg';
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
import { FiMail } from 'react-icons/fi';
const About = () => {
  return (
    <>
      <section className="about--cnt" id="about">
        <div className="about-img-cnt">
          <img className="about-photo" src={about} alt="about section photo" />
        </div>
        <div className="about--text-cnt">
          <h1>About Me</h1>
          <p className="about-p">
            Hello! My name is Jasmin, I'm a Frontend Web Developer who loves to
            code beautiful interfaces with HTML, CSS, JavaScript, and Reactjs.
            I've created multiple UI projects as well as collaborated with other
            software developers. I'm an open-minded individual who loves
            learning new technologies.
          </p>
          <a
            href="mailto:jasminvilla321@gmail.com? subject=message from portfolio"
            className="contact-btn-a">
            <button className="contact-btn-about">
              Contact <FiMail />
            </button>
          </a>
        </div>
      </section>
      <section className="skills-section">
        <h1>Tech Stack & Tools</h1>
        <div className="skills-cnt">
          <div className="skill-items-cnt">
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
              <FaGithub style={{ color: '#000' }} />
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
