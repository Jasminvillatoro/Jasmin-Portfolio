import project1 from './Images/project1.png';
import project2 from './Images/githubapp.png';
import project3 from './Images/taskapp.png';
import project4 from './Images/sunnypage.png';
import project5 from './Images/space-tourism-img.png';

const Projects = () => {
  return (
    <section id='projects' className='project-section'>
      <h1 className='project-section-h1'>Projects</h1>
      <h2 className='project-section-h2'>A selection of my projects</h2>
      <div className='projects-cnt'>
        <div className='project-wrapper'>
          <div className='project-description'>
            <h1>Space Tourism</h1>
            <h2>Created with</h2>
            <p>Typescript, NextJs, Tailwindcss, Prisma, and NeonDB</p>
            <div className='btn-wrapper'>
              <a
                target='_blank'
                rel='noreferrer'
                className='project-btn-a'
                href='https://space-tourism-wheat.vercel.app/'>
                <button className='project-btn'>Live</button>
              </a>
              <a
                target='_blank'
                rel='noreferrer'
                className='project-btn-a'
                href='https://github.com/Jasminvillatoro/space-tourism'>
                <button className='project-btn'>Github</button>
              </a>
            </div>
          </div>
          <div className='project-img-cnt'>
            <img className='project-img' src={project5} alt='project 1' />
          </div>
        </div>
        <div className='project-wrapper'>
          <div className='project-description'>
            <h1>My Future Travels</h1>
            <h2>Created with</h2>
            <p>Javascript, React, and CSS</p>
            <div className='btn-wrapper'>
              <a
                target='_blank'
                rel='noreferrer'
                className='project-btn-a'
                href='https://space-tourism-wheat.vercel.app/'>
                <button className='project-btn'>Live</button>
              </a>
              <a
                target='_blank'
                rel='noreferrer'
                className='project-btn-a'
                href='https://github.com/Jasminvillatoro/space-tourism'>
                <button className='project-btn'>Github</button>
              </a>
            </div>
          </div>
          <div className='project-img-cnt'>
            <img className='project-img' src={project1} alt='project 1' />
          </div>
        </div>
        <div className='project-wrapper row-reverse'>
          <div className='project-description'>
            <h1>GitHub User Search App</h1>
            <h2>Created with</h2>
            <p>Html, CSS, JavaScript, and JSON API</p>

            <div className='btn-wrapper'>
              <a
                target='_blank'
                rel='noreferrer'
                className='project-btn-a'
                href='https://github-user-search-app012.netlify.app/'>
                <button className='project-btn'>Live</button>
              </a>
              <a
                target='_blank'
                rel='noreferrer'
                className='project-btn-a'
                href='https://github.com/Jasminvillatoro/github-user-search-app'>
                <button className='project-btn'>Github</button>
              </a>
            </div>
          </div>
          <div className='project-img-cnt'>
            <img className='project-img ' src={project2} alt='project 2' />
          </div>
        </div>
        <div className='project-wrapper'>
          <div className='project-description'>
            <h1>Task</h1>
            <h2>Created with</h2>
            <p>JavaScript, React, Tailwindcss, CRUD</p>
            <div className='btn-wrapper'>
              <a
                target='_blank'
                rel='noreferrer'
                className='project-btn-a'
                href='https://jasminvillatoro.github.io/Tasks/'>
                <button className='project-btn'>Live</button>
              </a>
              <a
                target='_blank'
                rel='noreferrer'
                className='project-btn-a'
                href='https://github.com/Jasminvillatoro/Tasks'>
                <button className='project-btn'>github</button>
              </a>
            </div>
          </div>
          <div className='project-img-cnt'>
            <img className='project-img' src={project3} alt='project 3' />
          </div>
        </div>
        <div className='project-wrapper row-reverse'>
          <div className='project-description'>
            <h1>Sunnyside Landing Page</h1>
            <h2>Created with</h2>
            <p>Html, JavaScript, CSS grid, CSS Flex Box, Animations</p>
            <div className='btn-wrapper'>
              <a
                target='_blank'
                rel='noreferrer'
                className='project-btn-a'
                href='https://jasminvillatoro.github.io/sunnyside-agency/'>
                <button className='project-btn'>Live</button>
              </a>
              <a
                target='_blank'
                rel='noreferrer'
                className='project-btn-a'
                href='https://github.com/Jasminvillatoro/sunnyside-agency'>
                <button className='project-btn'>Github</button>
              </a>
            </div>
          </div>
          <div className='project-img-cnt'>
            <img className='project-img' src={project4} alt='project 4' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
