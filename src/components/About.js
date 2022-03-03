import about from './Images/Aboutimg.jpg';
const About = () => {
  return (
    <section className="about--cnt" id="about">
      <div className="about-img-cnt">
        <img className="about-photo" src={about} alt="about" />
      </div>
      <div className="about--text">
        <h1 className="about-h1">Passionate Problem Solver</h1>
        <p className="about-p">
          Hello I'm Jasmin, <br />
          Enthusiastic Frontend Developer who loves to create beautiful user
          interfaces. A little bit about me. I'm 22 years old, been learning
          frontend development for 6 months now, getting better every day. I'm a
          dedicated individual setting goals is one of my hobbies. I think some
          of my strongest skills are communication, problem-solving, and the
          ability to receive feedback and improve upon it. I'm glad I made the
          decision to learn programming; it's taught me how to be resourceful
          and think outside the box. I've been able to accomplish many things I
          thought were impossible.
        </p>
      </div>
    </section>
  );
};

export default About;
