import logo from './Images/Jascodes-removebg.png';
import '../styles.css';
const Nav = () => {
  return (
    <header>
      <img className="logo" src={logo} alt="logo" />
      <nav>
        <ul>
          <li>HOME</li>
          <li>ABOUT</li>
          <li>PROJECTS</li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
