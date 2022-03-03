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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, vero.
          Facere laboriosam quia ipsa! Quod et inventore eveniet exercitationem
          ipsa ab veniam dolor doloribus incidunt! Totam iusto in soluta
          tempore. Eligendi fuga reiciendis optio, maiores molestias non
          veritatis culpa, sed reprehenderit incidunt quidem dolor perspiciatis
          illum cupiditate amet facere similique quo blanditiis hic recusandae
          nobis beatae? Nemo dicta voluptates maiores. Accusantium, reiciendis.
          Non reiciendis dolores, necessitatibus excepturi accusamus explicabo
          ad doloribus dolorem. Et temporibus ducimus repudiandae quibusdam quis
          labore adipisci placeat esse molestias vero laboriosam illum,
          asperiores ad
        </p>
      </div>
    </section>
  );
};

export default About;
