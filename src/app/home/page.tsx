        "use client";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import React from "react";
import ProjectCard from "../../components/ProjectCard";
import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons"; // For Explore button
import { faDownload } from "@fortawesome/free-solid-svg-icons"; // For Download CV
import { faGithub } from "@fortawesome/free-brands-svg-icons"; // For GitHub
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"; // For LinkedIn
import { faEnvelope} from "@fortawesome/free-solid-svg-icons"; // For "main" (home/portfolio)
import StarIcon from "@mui/icons-material/Star";
import DownloadIcon from "@mui/icons-material/Download";


export default function Home() {
  useEffect(() => {
    const skillItems = document.querySelectorAll('.skill-item');
    if (skillItems.length > 0) {
      skillItems.forEach(item => {
        const proficiency = item.getAttribute('data-proficiency');
        if (proficiency) {
          const proficiencyBar = item.querySelector('.skill-proficiency');
          if (proficiencyBar) {
            try {
              proficiencyBar.style.width = '100%'; // Full width container
              const proficiencyAfter = proficiencyBar.querySelector(':after'); // Note: :after can't be queried directly, we'll handle via background
              proficiencyBar.style.background = `linear-gradient(to right, #2196F3 ${proficiency}%, #6a6a6bff ${proficiency}%)`; // Blue to light grey
            } catch (error) {
              console.error('Error setting proficiency bar style:', error);
            }
          } else {
            console.warn('No .skill-proficiency element found in:', item);
          }
        } else {
          console.warn('No data-proficiency attribute found in:', item);
        }
      });
    } else {
      console.warn('No .skill-item elements found');
    }
  }, []);
   const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          name: formData.name,    // Ensure these match your template variables
          email: formData.email,  // Ensure these match your template variables
          message: formData.message,   // Ensure these match your template variables
        },
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID!
      );

      if (result.status === 200) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' }); // Reset form
      } else {
        setStatus('Failed to send message. Please try again.');
      }
    } catch (error) {
      setStatus('An error occurred. Please try again later.');
      console.error('EmailJS submission error:', error);
    }
  };
          return (
            <>
       
              <section className="hero-section">
                {/* Welcome Badge */}
                <div className="welcome-badge">
                  <StarIcon className="welcome-icon" />
                  Welcome to my universe
                </div>

                {/* Hero Title */}
                <h1 className="hero-title">
                  <span className="hero-title-job">Frontend Developer</span>
                  <br />
                  <span className="hero-title-creative">&amp; Creative Coder</span>
                </h1>

                {/* Underline */}
                <div className="hero-underline" />

                {/* Subtitle */}
                <p className="hero-subtitle">
                  I craft <span className="hero-subtitle-beautiful">beautiful</span>,{" "}
                  <span className="hero-subtitle-interactive">interactive</span> web experiences with modern technologies.
                </p>
                <p className="hero-subtext">
                  Passionate about clean code, stunning designs, and seamless user experiences.
                </p>

                {/* Buttons */}
                <div className="hero-buttons">
                  <Button
                    variant="contained"
                    className="hero-button-primary"
                    startIcon={<StarIcon />}
                   onClick={() => {
                      const el = document.getElementById('about');
                      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
                {/* Social Icons */}
      <div className="social-icons">
  <a href="https://github.com/nagaharshitha20" target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon icon={faGithub} className="social-icon" />
  </a>
  <a href="https://www.linkedin.com/in/naga-harshitha-karra/" target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
  </a>
  <a href="mailto:knagaharshitha2005@gmail.com" target="_blank" rel="noopener noreferrer" >
  <FontAwesomeIcon icon={faEnvelope} className="social-icon" />
</a>
</div>
              </section>
              
               <section id="about" className="about-section">
  {/* About Header */}
  <div className="about-header">
    <h2 className="about-title">About Me</h2>
    <div className="about-underline" />
    <p className="about-intro">
      Get to know the person behind the <span className="about-highlight">code</span>
    </p>
  </div>

  {/* About Body (Text + Image) */}
  <div className="about-body">
    {/* Left: About Text */}
    <div className="about-text">
      <p className="about-description" style={{ textAlign: "justify" }}>
        I'm a passionate frontend developer with a love for creating beautiful,
        functional web experiences. My journey in web development started with
        curiosity and has evolved into a dedication to crafting digital
        solutions that make a difference.
      </p>
      <p className="about-description" style={{ textAlign: "justify" }}>
        When I'm not coding, you'll find me exploring new technologies,
        contributing to open-source projects, or learning about the latest
        trends in web development. I believe in continuous learning and pushing
        the boundaries of what's possible on the web.
      </p>
      <p className="about-description" style={{ textAlign: "justify" }}>
        My goal is to bridge the gap between design and development, creating
        seamless user experiences that are both visually stunning and highly
        functional.
      </p>

      <div className="about-stats">
        <div className="stat-item">
          <div className="stat-value">2+</div>
          <div className="stat-label">Years Experience</div>
        </div>
        <div className="stat-item">
          <div className="stat-value highlight-pink">15+</div>
          <div className="stat-label">Projects Completed</div>
        </div>
        <div className="stat-item">
          <div className="stat-value highlight-green">42</div>
          <div className="stat-label">School Student</div>
        </div>
      </div>
    </div>

    {/* Right: Profile Image */}
    <div className="about-image">
      <div className="image-frame">
        <img
          // src="/images/profile.jpg"
          alt="Profile"
          className="profile-image"
        />
      </div>
    </div>
  </div>
</section>

            
<section id="experience" className="experience-section">
  <h2 className="experience-title">Experience</h2>
  <div className="experience-underline" />
  <p className="experience-intro">
    My professional journey in the world of development.
  </p>
  <div className="experience-items">
    <div className="experience-item" data-color-index="0">
      <h3>Frontend Developer</h3>
      <p className="experience-company">Tech Innovate | Jun 2023 - Present</p>
      <p className="experience-description">
        Developed responsive web applications using React and Tailwind CSS, improving user engagement by 30%.
      </p>
    </div>
    <div className="experience-item" data-color-index="1">
      <h3>Junior Developer</h3>
      <p className="experience-company">Web Solutions | Jan 2022 - May 2023</p>
      <p className="experience-description">
        Built and maintained websites using HTML, CSS, and JavaScript, collaborating with design teams.
      </p>
    </div>
    <div className="experience-item" data-color-index="2">
      <h3>Intern</h3>
      <p className="experience-company">Code Academy | Jun 2021 - Dec 2021</p>
      <p className="experience-description">
        Assisted in coding projects and learned agile development practices.
      </p>
    </div>
  </div>
</section>

<section id="skills" className="skills-section">
        <h2 className="skills-title">Skills</h2>
        <div className="skills-underline" />
        <p className="skills-intro">
          My technical expertise and tools I work with.
        </p>
        <div className="skills-items">
          <div className="skill-item" data-color-index="0" data-proficiency="90">
            <div className="skill-icon-box">
              <img src="/logo/React.svg" alt="React" className="skill-icon" />
            </div>
            <p className="skill-name">React</p>
            <div className="skill-proficiency"></div>
          </div>
          <div className="skill-item" data-color-index="1" data-proficiency="85">
            <div className="skill-icon-box">
              <img src="/logo/JavaScript.svg" alt="JavaScript" className="skill-icon" />
            </div>
            <p className="skill-name">JavaScript</p>
            <div className="skill-proficiency"></div>
          </div>
          <div className="skill-item" data-color-index="2" data-proficiency="70">
            <div className="skill-icon-box">
              <img src="/logo/CSS3.svg" alt="CSS" className="skill-icon" />
            </div>
            <p className="skill-name">CSS</p>
            <div className="skill-proficiency"></div>
          </div>
          <div className="skill-item" data-color-index="3" data-proficiency="65">
            <div className="skill-icon-box">
              <img src="/logo/Node.js.svg" alt="Node.js" className="skill-icon" />
            </div>
            <p className="skill-name">Node.js</p>
            <div className="skill-proficiency"></div>
          </div>
          <div className="skill-item" data-color-index="4" data-proficiency="80">
            <div className="skill-icon-box">
              <img src="/logo/HTML5.svg" alt="HTML" className="skill-icon" />
            </div>
            <p className="skill-name">HTML</p>
            <div className="skill-proficiency"></div>
          </div>
          <div className="skill-item" data-color-index="5" data-proficiency="75">
            <div className="skill-icon-box">
              <img src="/logo/Tailwind CSS.svg" alt="Tailwind CSS" className="skill-icon" />
            </div>
            <p className="skill-name">Tailwind CSS</p>
            <div className="skill-proficiency"></div>
          </div>
          <div className="skill-item" data-color-index="6" data-proficiency="75">
            <div className="skill-icon-box">
              <img src="/logo/C.svg" alt="C" className="skill-icon" />
            </div>
            <p className="skill-name">C</p>
            <div className="skill-proficiency"></div>
          </div>
          <div className="skill-item" data-color-index="7" data-proficiency="75">
            <div className="skill-icon-box">
              <img src="/logo/C++.svg" alt="C++" className="skill-icon" />
            </div>
            <p className="skill-name">C++</p>
            <div className="skill-proficiency"></div>
          </div>
          <div className="skill-item" data-color-index="8" data-proficiency="75">
            <div className="skill-icon-box">
              <img src="/logo/Python.svg" alt="Python" className="skill-icon" />
            </div>
            <p className="skill-name">Python </p>
            <div className="skill-proficiency"></div>
          </div>
          <div className="skill-item" data-color-index="9" data-proficiency="75">
            <div className="skill-icon-box">
              <img src="/logo/Next.js.svg" alt="Next.js" className="skill-icon" />
            </div>
            <p className="skill-name">Next.js </p>
            <div className="skill-proficiency"></div>
          </div>
          <div className="skill-item" data-color-index="10" data-proficiency="75">
            <div className="skill-icon-box">
              <img src="/logo/MySQL.svg" alt="MySQL" className="skill-icon" />
            </div>
            <p className="skill-name">MySQL </p>
            <div className="skill-proficiency"></div>
          </div>
          <div className="skill-item" data-color-index="11" data-proficiency="75">
            <div className="skill-icon-box">
              <img src="/logo/Java.svg" alt="Java" className="skill-icon" />
            </div>
            <p className="skill-name">Java</p>
            <div className="skill-proficiency"></div>
          </div>
        </div>
      </section>
      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <h2 className="projects-title">Featured Projects</h2>
        <div className="projects-underline" />
        <p className="projects-intro">Selected projects showcasing design, code, and problem solving.</p>

        <div className="projects-grid">
          <ProjectCard
            title="Portfolio Website"
            description="A personal portfolio built with Next.js showcasing projects, blog and contact form. "
            tech={["Next.js", "React", "CSS"]}
            demoLink="https://github.com/nagaharshitha20"
            image={'/logo/MySQL.svg'}
          />

          <ProjectCard
            title="Task Manager App"
            description="A task management application with realtime updates and drag-drop features. Built with modern React patterns."
            tech={["React", "Node.js", "MySQL"]}
            demoLink="https://github.com/nagaharshitha20"
            image={'/logo/MySQL.svg'}
          />

          <ProjectCard
            title="Interactive UI Kit"
            description="A collection of reusable UI components with polished interactions and accessibility considerations."
            tech={["HTML", "CSS", "JavaScript"]}
            demoLink="https://github.com/nagaharshitha20"
            image={'/logo/MySQL.svg'}
          />
        </div>
      </section>
   <section id="contact" className="contact-section-wrapper">
  {/* Contact Header */}
  <div className="contact-header">
    <h2 className="contact-title-centered">Get In Touch</h2>
    <div className="contact-underline-centered" />
  </div>

  {/* Contact Body (Left: Get in Touch Box, Right: Form) */}
  <div className="contact-body">
    {/* Left: Get in Touch Box */}
    <div className="get-in-touch">
      <h3 className="get-in-touch-title">Get in Touch</h3>
      <div className="get-in-touch-item">
        <FontAwesomeIcon icon={faEnvelope} className="get-in-touch-icon" />Email:
        <a href="mailto:knagaharshitha2005@gmail.com" target="_blank" rel="noopener noreferrer">knagaharshitha2005@gmail.com</a>
      </div>
      <div className="get-in-touch-item">
        <FontAwesomeIcon icon={faLinkedin} className="get-in-touch-icon" />LinkedIn:
        <a href="https://linkedin.com/in/naga-harshitha-karra" target="_blank" rel="noopener noreferrer">naga-harshitha-karra</a>
      </div>
      <div className="get-in-touch-item">
        <FontAwesomeIcon icon={faGithub} className="get-in-touch-icon" />GitHub:
        <a href="https://github.com/nagaharshitha20" target="_blank" rel="noopener noreferrer">nagaharshitha20</a>
      </div>
    </div>

    {/* Right: Contact Form */}
    <div className="contact-section">
      <h2 className="contact-title">Contact Me</h2>
      <p className="contact-intro">
        Feel free to reach out for collaborations or inquiries.
      </p>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
            className="form-input"
          />
        </div>
        <button type="submit" className="form-submit">
          Send Message
        </button>
        {status && <p className="form-status">{status}</p>}
      </form>
    </div>
  </div>
</section>
     
            </>
          );
        }