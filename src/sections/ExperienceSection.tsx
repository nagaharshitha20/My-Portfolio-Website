"use client";
import '../styles/ExperienceSection.css';
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Reveal from "@/components/animations/Reveal";
const ROCKET_DURATION = 2500; // ms
const CARD_FADE_DELAY = 1000; // ms after rocket stops

const experiences = [
  {
    id: 0,
    title: "Web Development Intern — CCC Digital Pvt. Ltd., Hyderabad",
    duration: "May 2025 – Aug 2025",
    desc: [
      "Designed responsive UI components using React and Material UI.",
      "Built reusable components and optimized frontend performance.",
      "Collaborated with cross-functional teams to deliver scalable UI solutions.",
    ],
    tech: ["React.js", "Material UI", "Redux Toolkit", "Firebase"],
  },
  {
    id: 1,
    title: "Currently Studying — B.Tech CSE",
    institute: "SRM AP University",
    status: "3rd Year Undergraduate Student",
    desc: [
      "Actively building real-world web applications.",
      "Strengthening frontend and problem-solving skills.",
      "Continuously learning modern web technologies.",
    ],
    tech: [],
  },
];

export default function ExperienceSection() {
  
  // 🚀 Rocket position (start at bottom)
  const [activeIndex, setActiveIndex] = useState(experiences.length - 1);

  // 📄 Card index (delayed for readability)
  const [visibleIndex, setVisibleIndex] = useState(activeIndex);

  // 🚫 Prevent double animation (StrictMode)
  const hasAnimated = useRef(false);

  // 🚀 Auto move rocket upward (slow)
  useEffect(() => {
    if (hasAnimated.current) return;
    hasAnimated.current = true;

    const timer = setTimeout(() => {
      setActiveIndex(0);
    }, 600); // wait before rocket moves

    return () => clearTimeout(timer);
  }, []);

  // 📄 Delay card change so user can read
  useEffect(() => {
  const timer = setTimeout(() => {
    setVisibleIndex(activeIndex);
  }, ROCKET_DURATION - CARD_FADE_DELAY);

  return () => clearTimeout(timer);
}, [activeIndex]);


  return (
    <section id="experience" className="experience-section">
      <Reveal>
        <h2 className="section-title">Flight Log 🚀</h2>
        <div className="section-underline" />
        <p className="section-intro">My professional journey.</p>
      </Reveal>

      <div className="timeline-container">
        {/* Radio Controls */}
        <Reveal>
          <div className="timeline-controls">
            {experiences.map((_, idx) => (
              <div key={idx} className="timeline-radio">
                <input
                  type="radio"
                  checked={activeIndex === idx}
                  onChange={() => setActiveIndex(idx)}
                  aria-label={`Timeline point ${idx + 1}`}
                />
              </div>
            ))}
          </div>
        </Reveal>
<Reveal>
        {/* Timeline Line */}
        <div className="timeline-line" />

        {/* 🚀 Rocket (slow & cinematic) */}
        <motion.div
          className="timeline-rocket"
          initial={{ y: (experiences.length - 1) * 120 }}
          animate={{ y: activeIndex * 120 }}
          transition={{
            type: "tween",
            duration: 1.8,        // ⬅ slow rocket
            ease: "easeInOut",
          }}
        >
          🚀
        </motion.div>
</Reveal>
        {/* 📄 Experience Card (slow fade) */}
        <Reveal>
          <motion.div
            key={visibleIndex}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,     // ⬅ slow card
              ease: "easeOut",
            }}
          >
            <div className="timeline-card">
              <h3 className="timeline-title">
                {experiences[visibleIndex].title}
              </h3>

              {experiences[visibleIndex].duration && (
                <p className="timeline-duration">
                  {experiences[visibleIndex].duration}
                </p>
              )}

              {experiences[visibleIndex].institute && (
                <p className="timeline-institute">
                  {experiences[visibleIndex].institute}
                </p>
              )}

              {experiences[visibleIndex].status && (
                <p className="timeline-status">
                  {experiences[visibleIndex].status}
                </p>
              )}

              <ul className="timeline-desc">
                {experiences[visibleIndex].desc.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>

              {experiences[visibleIndex].tech.length > 0 && (
                <div className="timeline-tech">
                  {experiences[visibleIndex].tech.map((t, i) => (
                    <span key={i} className="tech-pill">
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
