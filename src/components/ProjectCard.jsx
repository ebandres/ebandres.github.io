import React from 'react';

const ProjectCard = ({ project, setSelected, index }) => {
  const isGame = project.category === 'game';

  return (
    <div 
      className={`project-card animate-card ${isGame ? 'game-card' : 'dev-card'}`} 
      onClick={() => setSelected(project)}
      style={{ '--stagger': index }}
    >
      {/* If there is no image, it just won't render this div */}
      {project.image && (
        <div className="card-image-container">
          <img src={project.thumb} alt={project.title} />
        </div>
      )}
      
      <div className="card-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        
        <div className="tech-stack">
          {project.tech.slice(0, 3).map((t, i) => (
            <span key={i} className="tech-badge">{t}</span>
          ))}
        </div>
        <span className="learn-more">Click to see more</span>
      </div>
    </div>
  );
};

export default ProjectCard;