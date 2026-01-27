import { Box } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import '../styles/Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* LEFT: Logo & Info */}
        <div className="footer-left">
          <div className="footer-info">
            <h3 className="footer-name">Naga Harshitha</h3>
            <p className="footer-role">Frontend Developer</p>
          </div>
        </div>

        {/* CENTER: Social Icons */}
        <div className="footer-center">
          <a
            href="https://github.com/nagaharshitha20"
            target="_blank"
            rel="noreferrer"
            className="social-link"
            aria-label="GitHub"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="https://linkedin.com/in/naga-harshitha-karra"
            target="_blank"
            rel="noreferrer"
            className="social-link"
            aria-label="LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="mailto:knagaharshitha2005@gmail.com"
            className="social-link"
            aria-label="Email"
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </div>

        {/* RIGHT: Copyright */}
        <div className="footer-right">
          <p className="copyright">© 2025 Naga Harshitha</p>
          <p className="crafted-with">
            Crafted with <span className="heart">❤</span> and code
          </p>
        </div>
      </div>
    </footer>
  );
}
