import project1 from './Images/project1.png';
import project2 from './Images/portfolio.png';
import project3 from './Images/card.png';
import project4 from './Images/sunnypage.png';

const Projects = () => {
  return (
    <section id="projects" className="project-section">
      <h1 className="project-section-h1">Projects</h1>
      <h2 className="project-section-h2">A selection of my projects</h2>
      <div className="projects-cnt">
        <div className="project-wrapper">
          <div className="project-description">
            <h1>My Future Travels</h1>
            <p></p>
            <div className="btn-wrapper">
              <a
                target="_blank"
                rel="noopener"
                className="project-btn-a"
                href="https://jasminvillatoro.github.io/future-travels/">
                <button className="project-btn">Live</button>
              </a>
              <a
                target="_blank"
                rel="noopener"
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
        <div className="project-wrapper row-reverse">
          <div className="project-description">
            <h1>Portfolio</h1>
            <p></p>
            <div className="btn-wrapper">
              <a
                target="_blank"
                rel="noopener"
                className="project-btn-a"
                href="https://www.jasminvillatoroportfolio.com/">
                <button className="project-btn">Live</button>
              </a>
              <a
                target="_blank"
                rel="noopener"
                className="project-btn-a"
                href="https://github.com/Jasminvillatoro/Jasmin-Portfolio">
                <button className="project-btn">Github</button>
              </a>
            </div>
          </div>
          <div className="project-img-cnt">
            <img
              className="project-img "
              src={project2}
              alt="project 2 image"
            />
          </div>
        </div>
        <div className="project-wrapper">
          <div className="project-description">
            <h1>Online Business Card</h1>
            <p></p>
            <div className="btn-wrapper">
              <a
                target="_blank"
                rel="noopener"
                className="project-btn-a"
                href="https://jasminvillatoro.github.io/digital-business-card/">
                <button className="project-btn">Live</button>
              </a>
              <a
                target="_blank"
                rel="noopener"
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
        <div className="project-wrapper row-reverse">
          <div className="project-description">
            <h1>Sunnyside Landing Page</h1>
            <p></p>
            <div className="btn-wrapper">
              <a
                target="_blank"
                rel="noopener"
                className="project-btn-a"
                href="https://jasminvillatoro.github.io/sunnyside-agency/">
                <button className="project-btn">Live</button>
              </a>
              <a
                target="_blank"
                rel="noopener"
                className="project-btn-a"
                href="https://github.com/Jasminvillatoro/sunnyside-agency">
                <button className="project-btn">Github</button>
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
