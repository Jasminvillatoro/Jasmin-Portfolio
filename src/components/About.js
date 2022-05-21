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
            Hello, I'm Jasmin, Enthusiastic Frontend Developer who loves to
            create beautiful user interfaces. I'm a dedicated individual who
            loves to accomplish my goals. Some of my most vital skills are
            communication, problem-solving, and the ability to receive feedback
            and improve upon it. I'm glad I decided to learn to program. It's
            taught me how to become resourceful and think outside the box. I've
            been able to accomplish many things I thought were impossible.
          </p>
          <a
            href="mailto:jasminvilla321@gmail.com? subject=message from portfolio"
            className="contact-btn-a">
            <button className="contact-btn">
              Contact <FiMail />
            </button>
          </a>
        </div>
      </section>
      <section className="skills-section">
        <h1>Skills & Tools</h1>
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
