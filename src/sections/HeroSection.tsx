"use client";
import '../styles/HeroSection.css';
import { Button, Box } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import DownloadIcon from "@mui/icons-material/Download";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import Reveal from "@/components/animations/Reveal";


export default function HeroSection() {
  return (
    <section className="hero-section" id="home">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Welcome badge */}
        <Reveal>
          <div className="welcome-badge">
            <StarIcon sx={{ fontSize: "1.2rem", color: "#FFD700", marginRight: "0.5rem" }} />
            Welcome to my universe
          </div>
        </Reveal>

        {/* Hero title */}
        <Reveal delay={0.15}>
          <h1 className="hero-title">
            <span className="hero-title-role">Frontend Developer</span>
            <br />
            <span className="hero-title-creative">& Creative Coder</span>
          </h1>
        </Reveal>

        {/* Underline */}
        {/* Removed separate underline div as it's not in the new design explicitly or can be part of text, but keeping if user wants legcy. Image doesn't show big underline. I will comment it out to match 'exactly like this' if it's not there, but maybe keep it subtle. The image HAS a small underline under "Frontend Developer" & "Creative Coder"? No, it has a separate underline below texts. I'll keep it but maybe style it fittingly. Actually image has a red/orange line below the text. */}
        <Reveal delay={0.25}>
          <div className="hero-underline" />
        </Reveal>

        {/* Subtitle */}
        <Reveal delay={0.3}>
          <p className="hero-subtitle">
            I craft <span className="highlight-orange">beautiful</span>,{" "}
            <span className="highlight-pink">interactive</span> web experiences with modern
            technologies.
          </p>
        </Reveal>

        {/* Subtext */}
        <Reveal delay={0.4}>
          <p className="hero-subtext">
            Passionate about clean code, stunning designs, and seamless user
            experiences.
          </p>
        </Reveal>

        {/* Buttons */}
        <Reveal delay={0.5}>
          <div className="hero-buttons">
            <Button
              variant="contained"
              className="hero-button-primary"
              startIcon={<StarIcon />}
              onClick={() => {
                const el = document.getElementById("projects"); // Changed to projects or keep about? explicit request usually implies projects. I'll keep generic or move to projects.
                if (el)
                  el.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
              }}
            >
              Explore My Universe
            </Button>

            <Button
              variant="outlined"
              className="hero-button-secondary"
              startIcon={<DownloadIcon />}
            >
              Download CV
            </Button>
          </div>
        </Reveal>

        {/* Social icons */}

        {/* Social icons */}
        <Reveal delay={0.2}>
          <div className="social-icons">
            <a
              href="https://github.com/nagaharshitha20"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-link"
            >
              <FontAwesomeIcon icon={faGithub} className="social-icon" />
            </a>

            <a
              href="https://www.linkedin.com/in/naga-harshitha-karra/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-link"
            >
              <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
            </a>

            <a
              href="mailto:knagaharshitha2005@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-link"
            >
              <FontAwesomeIcon icon={faEnvelope} className="social-icon" />
            </a>
          </div>
        </Reveal>

      </Box> {/* End Main Box */}

    </section>
  );
}
