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

  const renderContent = () => {
    switch (view) {
      case 'programming':
        return (
          <section className="projects-grid">
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
            <h2 className="cv-title">Curriculum Vitae</h2>
            <div className="cv-content">
              <div className="cv-group">
                <h3>Experience</h3>
                <p>Your job role here - Company (Date)</p>
              </div>
              <div className="cv-group" style={{ marginTop: '2rem' }}>
                <h3>Education</h3>
                <p>Degree Name - University</p>
              </div>
            </div>
            <a href="/resume.pdf" download className="download-btn">
              Download PDF Version
            </a>
          </section>
        );
      default:
        return (
          <section className="about-section">
            <h2>Hello!</h2>
            <p>
              I'm Emmanuel, a computer engineer with 3 years of <span className="inline-link" onClick={() => setView('cv')}>experience</span>.
            </p>
            <p>
              I'm also a game designer who loves programming and making <span className="inline-link" onClick={() => setView('game')}>fun games</span>.
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
      <div className="full-width-banner">
        <img src="/images/banner.jpg" alt="Banner" className="banner-image" />
        <div className="banner-overlay">
          <h1 onClick={() => setView('about')}>Emmanuel Bandres</h1>
        </div>
      </div>
      <div className="app-container">
        <header>
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
              onClick={() => setView('cv')}>CV</button>
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
              {selectedProject.image && <img src={selectedProject.image} alt={selectedProject.title} className="modal-img" />}
              <h2>{selectedProject.title}</h2>
              <p className="modal-desc">{selectedProject.longDescription || selectedProject.description}</p>

              <div className="modal-tech">
                {selectedProject.tech.map(t => <span key={t} className="tech-badge">{t}</span>)}
              </div>

              <div className="modal-actions">
                {selectedProject.link && <a href={selectedProject.link} target="_blank" className="btn-primary">View Source</a>}
                {selectedProject.demo && <a href={selectedProject.demo} target="_blank" className="btn-secondary">Live Demo</a>}
              </div>
            </div>
          </div>
        )}

        <footer className="footer">
          <div className="footer-content">
            <p>&copy; {new Date().getFullYear()} Emmanuel Bandres.</p>
            <div className="footer-links">
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="mailto:your@email.com">Contact</a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;