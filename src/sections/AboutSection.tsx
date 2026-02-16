import { Box } from "@mui/material";
import Image from "next/image";
import '../styles/AboutSection.css';
import Reveal from "../components/animations/Reveal";

export default function AboutSection() {
  return (
    <section id="about" className="about-section">
      <Reveal>
        <div className="about-header">
          <h2 className="section-title">Astronaut👩‍🚀
          </h2>


          <div className="section-underline " />
          <p className="section-intro">
            Get to know the person behind the <span className="about-highlight">code</span>
          </p>
        </div>
      </Reveal>

      <Box
        className="about-body"
        sx={{
          display: "flex",
          flexDirection: { xs: "column-reverse", md: "row" }, // Mobile: Image top (visual), Desktop: Row
          alignItems: { xs: "center", md: "flex-start" },
          justifyContent: "center",
          gap: { xs: 4, md: 8 }, // 2rem (32px) mobile, 4rem (64px) desktop
          flexWrap: "wrap",
          textAlign: { xs: "left", md: "justify" }
        }}
      >
        <Reveal delay={0.2}>
          <Box className="about-text" sx={{ width: { xs: "100%", md: "auto" }, flex: 1, padding: { xs: "0 0.5rem", md: 0 } }}>
            <p className="about-description">
              I&apos;m a passionate frontend developer who loves building beautiful interfaces.
            </p>
            <p className="about-description">
              I enjoy learning new technologies and improving user experiences.
            </p>
            <p className="about-description">
              My goal is to bridge design and development.
            </p>
          </Box>
        </Reveal>

        <Reveal delay={0.4}>
          <Box className="about-image" sx={{ width: { xs: "100%", md: "auto" }, display: "flex", justifyContent: "center" }}>
            <div className="image-frame">
              <Image
                src="/logo/Formal_Pic.png"
                alt="Formal Picture"
                width={370}
                height={420}
                style={{ objectFit: 'cover' }}
                priority
              />
            </div>
          </Box>
        </Reveal>
      </Box>
    </section>
  );
}
