import project1 from './Images/project1.png';
import project2 from './Images/portfolio.png';
import project3 from './Images/card.png';

import project5 from './Images/plants.png';

const Projects = () => {
  return (
    <section id="projects">
      <h1 className="project-h1">Projects</h1>
      <p className="project-p">A selection of my projects</p>
      <div className="projects--container">
        <div>
          <img className="portfolio-img" src={project1} alt="project1" />
          <a href="https://jasminvillatoro.github.io/future-travels/">Live </a>
          <a href="https://github.com/Jasminvillatoro/future-travels">
            / GitHub
          </a>
        </div>
        <div>
          <img className="portfolio-img" src={project2} alt="project1" />
          <a href="https://jasminvillatoro.github.io/Jasmin-Portfolio/">
            Live{' '}
          </a>
          <a href="https://github.com/Jasminvillatoro/Jasmin-Portfolio">
            / GitHub
          </a>
        </div>
        <div>
          <img className="portfolio-img" src={project3} alt="project1" />
          <a href="https://jasminvillatoro.github.io/digital-business-card/">
            Live {''}
          </a>
          <a href="https://github.com/Jasminvillatoro/digital-business-card">
            / GitHub
          </a>
        </div>

        <div>
          <img className="portfolio-img" src={project5} alt="project1" />
          <a href="https://jasminvillatoro.github.io/Plants-101/">Live </a>
          <a href="https://github.com/Jasminvillatoro/Plants-101"> / GitHub</a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
