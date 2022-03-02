import logo from './Images/logo_.png';
import '../styles.css';
const Nav = () => {
  return (
    <header>
      <img className="logo" src={logo} alt="logo" />
      <nav>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
