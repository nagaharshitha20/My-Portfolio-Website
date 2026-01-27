"use client";
import '../styles/SkillsSection.css';
import Reveal from "../components/animations/Reveal";

const categories = [
  {
    title: "Languages",
    type: "icons",
    items: [
      { name: "C", logo: "/logo/C.svg" },
      { name: "C++", logo: "/logo/C++.svg" },
      { name: "Python", logo: "/logo/Python.svg" },
      { name: "Java", logo: "/logo/Java.svg" },
      { name: "JavaScript", logo: "/logo/JavaScript.svg" },
      { name: "HTML", logo: "/logo/HTML5.svg" },
      { name: "CSS", logo: "/logo/CSS3.svg" },
    ]
  },
  {
    title: "Frameworks & Libraries",
    type: "pills",
    items: [
      "React.js",
      "Next.js",
      "Flask",
      "pandas",
      "matplotlib",
      "spaCy",
      "Sentence Transformers"
    ]
  },
  {
    title: "Developer Tools",
    type: "pills",
    items: [
      "Git",
      "VS Code",
      "Google Colab",
      "Power BI",
      "Excel",
      "Google Sheets",
      "Docker"
    ]
  },
  {
    title: "Databases",
    type: "pills",
    items: [
      "MongoDB",
      "MySQL",
      "PostgreSQL"
    ]
  },
  {
    title: "Concepts",
    type: "pills",
    items: [
      "Data Structures",
      "Algorithms (DSA)",
      "Machine Learning",
      "NLP"
    ]
  },
  {
    title: "Soft Skills",
    type: "pills",
    items: [
      "Communication",
      "Problem-Solving",
      "Teamwork",
      "Leadership",
      "Consistency"
    ]
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="skills-section">
      <Reveal>
        <h2 className="section-title">Constellation✨</h2>
        <div className="section-underline" />
        <p className="section-intro">
          Technologies in my universe.
        </p>
      </Reveal>

      <div className="categories-grid">
        {categories.map((category, index) => (
          <Reveal key={category.title} delay={index * 0.1}>
            <div className="category-card">
              <h3 className="category-title">{category.title}</h3>
              <div className="category-content">
                {category.type === "icons" ? (
                  <div className="icons-grid">
                    {(category.items as { name: string; logo: string }[]).map((item) => (
                      <div key={item.name} className="icon-box">
                        <img
                          src={item.logo}
                          alt={item.name}
                          className="skill-icon"
                        />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="pills-grid">
                    {(category.items as string[]).map((item) => (
                      <div key={item} className="skill-pill">
                        {item}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
