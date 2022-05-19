import '../styles.css';

const Footer = () => {
  return (
    <footer id="contact">
      <div className="contact-info">
        <a
          className="footer-text"
          href="mailto:jasminvilla321@gmail.com? subject=message from portfolio">
          <p className="footer-text">
            Click to contact me <br /> through email
          </p>
        </a>
        <p className="footer-text">(954)-347-4053</p>
        <p className="footer-text">&#169;Jasmin</p>
      </div>
    </footer>
  );
};

export default Footer;
