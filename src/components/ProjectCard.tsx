import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

interface ProjectCardProps {
  title: string;
  description: string;
  tech?: string[];
  demoLink?: string;
  image?: string;
}

export default function ProjectCard({ title, description, tech = [], demoLink, image }: ProjectCardProps) {
  const imageUrl = image || '/logo/MySQL.svg';

  return (
    <article className="project-card">
      <div className="project-card-inner">
        <div className="project-card-image" style={{ backgroundImage: `url(${imageUrl})` }}>
          <div className="project-badge">Featured</div>
        </div>

        <div className="project-card-body">
          <div className="project-card-heading">
            <h3 className="project-card-title">{title}</h3>
          </div>

          <p className="project-card-desc">{description}</p>

          <div className="project-card-tech">
            {tech.map(t => (
              <span key={t} className="project-tech-pill">{t}</span>
            ))}
          </div>

          <div className="project-card-actions">
            {demoLink && (
              <a href={demoLink} target="_blank" rel="noopener noreferrer" className="project-demo-link">
                <span className="github-icon"><FontAwesomeIcon icon={faGithub} /></span>
                <span className="project-demo-text">View Code</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
