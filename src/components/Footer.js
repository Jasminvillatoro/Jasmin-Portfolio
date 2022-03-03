import '../styles.css';
import twitter from './Images/Twitter Icon.png';
import facebook from './Images/Facebook Icon.png';
import instagram from './Images/Instagram Icon.png';
import github from './Images/GitHub Icon.png';
import linkedin from './Images/linkedinicon.png';
const Footer = () => {
  return (
    <footer id="contact">
      <div className="contact-info">
        <a
          className="footer-text"
          href="mailto:jasminvilla321@gmail.com? subject=message from portfolio">
          <p className="footer-text">Click to contact me through email</p>
        </a>
        <p className="footer-text">(954)-347-4053</p>
        <p className="footer-text">&#169;Jasmin</p>
      </div>
      <div className="media-icons">
        <div>
          <a href="https://twitter.com/Jas_codes">
            <img src={twitter} alt="twitter icon" />
          </a>
        </div>
        <div>
          <a href="https://www.facebook.com/jasmin.villatoro.3">
            <img src={facebook} alt="facebook icon" />
          </a>
        </div>
        <div>
          <a href="https://www.instagram.com/jasminvillatoro99/">
            <img src={instagram} alt="instagram icon" />
          </a>
        </div>
        <div>
          <a href="https://github.com/Jasminvillatoro">
            <img src={github} alt="github icon" />
          </a>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/jasmin-villatoro/">
            <img className="linkedin-icon" src={linkedin} alt="linkedin icon" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
