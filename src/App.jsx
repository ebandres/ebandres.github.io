import { useState, useEffect } from 'react';
import ProjectCard from './components/ProjectCard';
import { projects } from './data';
import './App.css';

function App() {
  const [view, setView] = useState('about');
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    projects.forEach((project) => {
      if (project.image) {
        const img = new Image();
        img.src = project.image;
      }
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      // Adjust the 0.2 value to change the speed (0.1 is slower, 0.5 is faster)
      const rate = scrolled * 0.2;

      document.body.style.setProperty('--scroll-offset', `${rate}px`);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const renderContent = () => {
    switch (view) {
      case 'programming':
        return (
          <section className="projects-grid">
            <div className='text-card card-content'>
              <p>Here are a few programming projects I've made, mostly as class assignments or small side projects during University.</p>
            </div>
            {projects.filter(p => p.category === 'programming').map(p => <ProjectCard key={p.id} project={p} setSelected={setSelectedProject} />)}
          </section>
        );
      case 'game':
        return (
          <section className="projects-grid games-grid">
            {projects.filter(p => p.category === 'game').map(p => <ProjectCard key={p.id} project={p} setSelected={setSelectedProject} />)}
          </section>
        );
      case 'cv':
        return (
          <section className="cv-section">
            <h2 className="cv-title">Experience & Education</h2>
            <div className="cv-timeline">
              <div className="timeline-group">
                <h3 className="timeline-category">Work</h3>

                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <h4>October 2024 - Present</h4>
                    <h5>Senior Full-Stack Developer at Mega Soft Computación</h5>
                    <ul>
                      <li>Led development of scalable web architectures using modern frameworks.</li>
                      <li>Optimized database queries, reducing load times by ~80% and improving responsiveness under high load.</li>
                      <li>Mentored junior developers and performed code reviews.</li>
                    </ul>
                  </div>
                </div>

                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <h4>August 2022 - October 2024</h4>
                    <h5>Junior Full-Stack Developer at Mega Soft Computación</h5>
                    <ul>
                      <li>Designed, developed and maintained features for core business intelligence applications.</li>
                      <li>Implemented various ETL processes in Python to manipulate and store information into a centralized database</li>
                      <li>Implemented responsive front-end components.</li>
                      <li>Implemented several services in a REST API that generate administrative and business reports for end users.</li>
                      <li>Designed and implemented a user permission system with multiple types of users and roles for each type.</li>
                      <li>Assisted in the migration of legacy systems to modern solutions.</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="timeline-group">
                <h3 className="timeline-category">Education</h3>

                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <h4>July 2024</h4>
                    <h5>Master's in Video Game Design</h5>
                    <p>Universidad Europea de Madrid</p>
                    <ul>
                      <li>Completed a capstone project involving the design and development of a roguelike cooking card game.</li>
                      <li>Showcased the project at multiple video game developer conferences.</li>
                    </ul>
                  </div>
                </div>

                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <h4>July 2023</h4>
                    <h5>Computer Engineering</h5>
                    <p>Universidad Simón Bolívar</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="skills-container">
              <h3 className="timeline-category">Technical Skills</h3>

              <div className="skills-grid">
                <div className="skill-group">
                  <h4>Engines</h4>
                  <div className="skill-badges">
                    <span className="skill-badge game">Unity</span>
                    <span className="skill-badge game">Unreal Engine 5</span>
                  </div>
                </div>

                <div className="skill-group">
                  <h4>Languages</h4>
                  <div className="skill-badges">
                    <span className="skill-badge dev">Java</span>
                    <span className="skill-badge dev">Python</span>
                    <span className="skill-badge dev">JavaScript</span>
                    <span className="skill-badge dev">C#</span>
                    <span className="skill-badge dev">C++</span>
                    <span className="skill-badge dev">C</span>
                  </div>
                </div>

                <div className="skill-group">
                  <h4>Tools & Tech</h4>
                  <div className="skill-badges">
                    <span className="skill-badge game">GIMP</span>
                    <span className="skill-badge game">Krita</span>
                    <span className="skill-badge game">Inkscape</span>
                    <span className="skill-badge game">Balsamiq</span>
                    <span className="skill-badge dev">React</span>
                    <span className="skill-badge dev">Git</span>
                    <span className="skill-badge dev">PostgreSQL</span>
                    <span className="skill-badge dev">Trello</span>
                    <span className="skill-badge dev">Miro</span>
                    <span className="skill-badge dev">Spring Boot</span>
                    <span className="skill-badge dev">pandas</span>
                  </div>
                </div>
              </div>
            </div>

            <a href="/EN CV Emmanuel Bandres 2026.pdf" download className="download-btn">
              Download Resume
            </a>
          </section>
        );
      default:
        return (
          <section className="about-section">
            <h2>Hello!</h2>
            <p>
              I'm Emmanuel, a game designer and computer engineer!
            </p>
            <p>
              With three years of <span className="inline-link" onClick={() => setView('cv')}>hands-on full-stack development experience</span> and a passion for making <span className="inline-link" onClick={() => setView('game')}>fun and interesting games</span>,
              I blend solid software engineering fundamentals with creative gameplay mechanics. My work spans scalable web applications and interactive experiences that prioritize performance, clean architecture, and player enjoyment.
            </p>
            <p>
              You can check out my <span className="inline-link" onClick={() => setView('programming')}>other projects here </span>
              or select a category above to see my work.
            </p>
          </section>
        );
    }
  };

  return (
    <>
      <div className="app-container">
        <header>
          <h1 className="main-title" onClick={() => setView('about')}>
            Emmanuel Bandres
          </h1>
          <nav>
            <button
              className={view === 'about' ? 'active' : ''}
              onClick={() => setView('about')}>About</button>
            <button
              className={view === 'game' ? 'active' : ''}
              data-view="game"
              onClick={() => setView('game')}>Games</button>
            <button
              className={view === 'programming' ? 'active' : ''}
              onClick={() => setView('programming')}>Other Stuff</button>
            <button
              className={view === 'cv' ? 'active' : ''}
              onClick={() => setView('cv')}>Resume</button>
          </nav>
        </header>

        <main className="content-area">
          {renderContent()}
        </main>

        {selectedProject && (
          <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
            <div className={`modal-content ${selectedProject.category === 'game' ? 'game-modal' : ''}`} onClick={(e) => e.stopPropagation()}>
              <button className="close-btn" onClick={() => setSelectedProject(null)} aria-label="Close">
              </button>
              <div className="modal-scroll-area">
                {selectedProject.image && <img src={selectedProject.image} alt={selectedProject.title} className="modal-img" />}
                <div className="modal-header">
                  <h2>{selectedProject.title}</h2>
                  <div className="modal-actions">
                    {selectedProject.link && (
                      <a href={selectedProject.link} target="_blank" rel="noopener noreferrer" className="btn-primary">
                        <span className="icon-github"></span>
                        <span>View Source</span>
                      </a>
                    )}

                    {selectedProject.demo && (
                      <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                        <span className="icon-itchio"></span>
                        <span>Play it here!</span>
                      </a>
                    )}
                  </div>
                </div>

                <p className="modal-desc">
                  {selectedProject.longDescription.map((paragraph, index) => (
                    <p key={index} style={{ marginBottom: '1rem' }}>
                      {paragraph}
                    </p>
                  ))}
                </p>

                <div className="modal-tech">
                  {selectedProject.tech.map(t => <span key={t} className="tech-badge">{t}</span>)}
                </div>
              </div>
            </div>
          </div>
        )}

        <footer className="footer">
          <div className="footer-content">
            <p>&copy; {new Date().getFullYear()} Emmanuel Bandres</p>
            <div className="footer-links">
              <a href="https://github.com/ebandres" target="_blank" rel="noopener noreferrer">
                <img src="/github-mark-white.svg" alt="GitHub" className="footer-icon" />
              </a>
              <a href="https://linkedin.com/in/emmanuel-bandres/" target="_blank" rel="noopener noreferrer">
                <img src="/linkedinlogo.svg" alt="LinkedIn" className="footer-icon" />
              </a>
              <a href="https://mcgrock.itch.io/" target="_blank" rel="noopener noreferrer">
                <img src="/itchio-logo-textless-white.svg" alt="itch.io" className="footer-icon" />
              </a>
              <a href="mailto:contact@emmanuelbandres.com">
                <img src="/email-svgrepo-com.svg" alt="Contact" className="footer-icon" />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;