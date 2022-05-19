import project1 from './Images/project1.png';
import project2 from './Images/portfolio.png';
import project3 from './Images/card.png';
import project4 from './Images/plants.png';

const Projects = () => {
  return (
    <section id="project-section">
      <h1 className="project-section-h1">Projects</h1>
      <p className="project-section-p">A selection of my projects</p>
      <div className="projects-cnt">
        <div className="project-wrapper">
          <div className="project-description">
            <h1>My Future Travels</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. uae fugit
              sit consectetur aspernatur. Dicta aspernatur praesentium, vero
              molestiae odit natus nobis illo repellat repudiandae dolor
            </p>
            <div className="btn-wrapper">
              <a
                className="project-btn-a"
                href="https://jasminvillatoro.github.io/future-travels/">
                <button className="project-btn">Live</button>
              </a>
              <a
                className="project-btn-a"
                href="https://github.com/Jasminvillatoro/future-travels">
                <button className="project-btn">Github</button>
              </a>
            </div>
          </div>
          <div className="project-img-cnt">
            <img className="project-img" src={project1} alt="project 1 image" />
          </div>
        </div>
        <div className="project-wrapper">
          <div className="project-description">
            <h1>Portfolio</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum optio, sequi quod aliquid esse accusamus ipsam eum
              laudantium placeat rem ullam nesciunt exercitationem minima libero
              voluptas explicabo, maxime labore fuga? Dolorem, illo? Eaque
            </p>
            <div className="btn-wrapper">
              <a
                className="project-btn-a"
                href="https://jasminvillatoro.github.io/Jasmin-Portfolio/">
                <button className="project-btn">Live</button>
              </a>
              <a
                className="project-btn-a"
                href="https://github.com/Jasminvillatoro/Jasmin-Portfolio">
                <button className="project-btn">Github</button>
              </a>
            </div>
          </div>
          <div className="project-img-cnt">
            <img className="project-img" src={project2} alt="project 2 image" />
          </div>
        </div>
        <div className="project-wrapper">
          <div className="project-description">
            <h1>Portfolio</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum optio, sequi quod aliquid esse accusamus ipsam eum
              laudantium placeat rem ullam nesciunt exercitationem minima libero
              si deleniti voluptatum quam dolore, accusantium, eum tempore.
              Delectus.
            </p>
            <div className="btn-wrapper">
              <a
                className="project-btn-a"
                href="https://jasminvillatoro.github.io/digital-business-card/">
                <button className="project-btn">Live</button>
              </a>
              <a
                className="project-btn-a"
                href="https://github.com/Jasminvillatoro/digital-business-card">
                <button className="project-btn">github</button>
              </a>
            </div>
          </div>
          <div className="project-img-cnt">
            <img className="project-img" src={project3} alt="project 3 image" />
          </div>
        </div>
        <div className="project-wrapper">
          <div className="project-description">
            <h1>Portfolio</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum optio, sequi quod aliquid esse accusamus ipsam eum
              laudantium placeat rem ullam nesciunt exercitationem minima libero
              voluptas explicabo, maxime labore fuga? Dolorem, illo? Eaque
              voluptatibus, esse in natus el et dolor quasi deleniti voluptatum
              quam dolore, accusantium, eum tempore. Delectus.
            </p>
            <div className="btn-wrapper">
              <a
                className="project-btn-a"
                href="https://jasminvillatoro.github.io/Plants-101/">
                <button className="project-btn">Live</button>
              </a>
              <a
                className="project-btn-a"
                href="https://github.com/Jasminvillatoro/Plants-101">
                <button className="project-btn">github</button>
              </a>
            </div>
          </div>
          <div className="project-img-cnt">
            <img className="project-img" src={project4} alt="project 4 image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
