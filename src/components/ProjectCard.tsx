"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  image: string;
  github: string;
}

export default function ProjectCard({
  title,
  description,
  tech,
  image,
  github,
  featured,
  className = "",
}: ProjectCardProps & { featured?: boolean; className?: string }) {
  return (
    <article className={`project-card-ref ${className}`}>
      {/* IMAGE */}
      <div
        className="project-card-ref-image"
        style={{ backgroundImage: `url(${image})` }}
      >
        {featured && <span className="featured-badge">Featured</span>}
      </div>

      {/* CONTENT */}
      <div className="project-card-ref-body">
        <h3 className="project-card-ref-title">{title}</h3>

        {/* DESCRIPTION (ALWAYS VISIBLE) */}
        <p className="project-card-ref-desc">{description}</p>

        {/* TECH */}
        <div className="project-card-ref-tech">
          {tech.map((t) => (
            <span key={t} className="project-card-ref-pill">
              {t}
            </span>
          ))}
        </div>

        {/* BUTTON */}
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="project-card-ref-btn"
        >
          <FontAwesomeIcon icon={faGithub} />
          <span>View Code</span>
        </a>
      </div>
    </article>
  );
}
