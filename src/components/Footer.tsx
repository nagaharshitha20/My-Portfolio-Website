import { Box } from "@mui/material";

export default function Footer() {
  return (
    <footer className="footer">
      <Box
        className="footer-container"
        sx={{
          display: "flex",
          maxWidth: "1200px",
          margin: "0 auto",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: { xs: 4, md: 2 }, // 2rem mobile gap
          flexDirection: { xs: "column", md: "row" },
          textAlign: { xs: "center", md: "left" }
        }}
      >
        {/* ---------- LEFT ---------- */}
        <div className="footer-left">
          <div>
            <h3 className="footer-name">Naga Harshitha</h3>
            <p className="footer-role">
              AI / ML Engineer • Frontend Developer
            </p>
          </div>
        </div>

        {/* ---------- CENTER ---------- */}
        <div className="footer-socials">
          <a
            href="https://github.com/nagaharshitha20"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <i className="fab fa-github" />
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin-in" />
          </a>

          <a
            href="mailto:knagaharshitha2005@gmail.com"
            aria-label="Email"
          >
            <i className="fas fa-envelope" />
          </a>
        </div>

        {/* ---------- RIGHT ---------- */}
        <Box className="footer-right" sx={{ textAlign: { xs: "center", md: "right" } }}>
          <p>© {new Date().getFullYear()} Naga Harshitha</p>
          <span>
            Crafted with<span className="heart">♥</span>& clean code
          </span>
        </Box>
      </Box>
    </footer>
  );
}
