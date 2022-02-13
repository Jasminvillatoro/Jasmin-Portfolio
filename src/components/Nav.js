import logo from './Images/logo.png';
import '../styles.css';
const Nav = () => {
  return (
    <header>
      <img className="logo" src={logo} alt="logo" />
      <nav>
        <ul>
          <li>
            <a href="#">HOME</a>
          </li>
          <li>
            <a href="#">ABOUT</a>
          </li>
          <li>
            <a href="#">PROJECTS</a>
          </li>
          <li>
            <a href="#">CONTACT</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
