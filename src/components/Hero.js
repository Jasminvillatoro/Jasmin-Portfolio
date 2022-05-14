import '../styles.css';
import coder from './Images/programmer.jpg';

const Hero = () => {
  return (
    <section id="home" className="hero--cnt">
      <div className="hero-text-cnt">
        <h1 className="">Hi, I'm Jasmin</h1>
        <h1 className=" name">Frontend Web Developer</h1>
      </div>
      <div className="hero-img">
        <img src={coder} alt="programmer" />
      </div>
    </section>
  );
};

export default Hero;
