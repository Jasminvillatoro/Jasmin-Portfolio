import logo from './Images/logo_.png';
import '../styles.css';
const Nav = () => {
  return (
    <header>
      <img className="logo" src={logo} alt="logo" />
      <nav>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
