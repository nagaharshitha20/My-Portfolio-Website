import '../styles/ProjectsSection.css';
import ProjectCard from "../components/ProjectCard";
import Reveal from "../components/animations/Reveal";
import { useState } from "react";
import { Box } from "@mui/material";

export default function ProjectsSection() {
  // Mobile expansion state (tracks clicked card ID)
  // undefined = none expanded
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const handleMobileTap = (index: number) => {
    // Only toggle on mobile (check logic or rely on CSS hiding)
    // Desktop hover is CSS-based, so this state only affects classes if we use them
    if (window.innerWidth <= 768) {
      setExpandedId(prev => prev === index ? null : index);
    }
  };

  return (
    <section id="projects" className="projects-section">
      <Reveal>
        <h2 className="section-title">Featured Projects🌌</h2>
        <div className="section-underline" />
        <p className="section-intro">
          A showcase of my creative work and technical expertise
        </p>
      </Reveal>

      <Box
        className="projects-grid"
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "repeat(auto-fit, 330px)" }, // Mobile stack, Desktop grid
          gap: { xs: 3, md: 8.6 }, // 1.5rem vs ~4.3rem
          justifyContent: "center",
          padding: { xs: "0 1rem", md: 0 }
        }}
      >
        <Reveal delay={0.1}>
          <div onClick={() => handleMobileTap(0)}>
            <ProjectCard
              title="ResumePro — AI Resume Intelligence Engine"
              description="AI-powered resume–JD matching system that improves relevance detection using NLP embeddings, secure JWT authentication,automated learning roadmap generation."
              tech={["FastAPI", "NLP", "MongoDB", "JWT"]}
              image="/logo/MYSQL.svg"
              github="https://github.com/nagaharshitha20"
              featured={true}
              className={expandedId === 0 ? "mobile-expanded" : ""}
            />
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div onClick={() => handleMobileTap(1)}>
            <ProjectCard
              title="Heavenlyte — Full-Stack Restaurant Website"
              description="A responsive full-stack restaurant platform with authentication, cart management, filtering, and real-time data sync for smooth user experience."
              tech={["React", "Material UI", "Redux Toolkit", "Firebase"]}
              image="/logo/heavenlyte.png"
              github="https://github.com/nagaharshitha20"
              featured={true}
              className={expandedId === 1 ? "mobile-expanded" : ""}
            />
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <div onClick={() => handleMobileTap(2)}>
            <ProjectCard
              title="Automated Email Forwarding System"
              description="NLP-based email routing tool that classifies and forwards emails using semantic matching, reducing manual triage workload significantly."
              tech={["Python", "Streamlit", "GPT API", "NLP", "SMTP"]}
              image="/logo/MYSQL.svg"
              github="https://github.com/nagaharshitha20"
              featured={true}
              className={expandedId === 2 ? "mobile-expanded" : ""}
            />
          </div>
        </Reveal>
      </Box>
    </section>
  );
}
