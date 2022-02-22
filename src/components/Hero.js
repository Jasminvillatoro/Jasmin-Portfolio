import '../styles.css';
import heroimg from './Images/hero.webp';
const Hero = () => {
  return (
    <section className="hero--cnt">
      <div className="hero--img-cnt">
        <img src={heroimg} alt="hero " />
      </div>
      <div className="hero--text-cnt">
        <h1 className="hero--text">
          Jasmin <br /> Frontend Developer
        </h1>
      </div>
    </section>
  );
};

export default Hero;
