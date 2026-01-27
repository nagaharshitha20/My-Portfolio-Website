"use client";
import '../styles/Navbar.css';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';

import { useTheme } from '../context/ThemeContext';

const navItems = [
  { label: "Home", icon: <HomeOutlinedIcon />, href: "/" },
  { label: "About", icon: <PersonOutlineOutlinedIcon />, href: "#about" },
  { label: "Experience", icon: <WorkspacePremiumOutlinedIcon />, href: "#experience" },
  { label: "Skills", icon: <CodeOutlinedIcon />, href: "#skills" },
  { label: "Projects", icon: <FolderOutlinedIcon />, href: "#projects" },
  { label: "Contact", icon: <MailOutlinedIcon />, href: "#contact" },
];

const Navbar = () => {
  const [activeItem, setActiveItem] = useState<string>('/');
  const { theme, toggleTheme } = useTheme();

  // Scroll Spy Logic
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems
        .filter(item => item.href.startsWith("#"))
        .map(item => item.href.substring(1));

      let currentSection = "/";

      // Check which section is in view
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If top of section is within viewport (with some offset for navbar)
          if (rect.top <= 150 && rect.bottom >= 150) {
            currentSection = `#${sectionId}`;
            break;
          }
        }
      }
      setActiveItem(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (href: string) => {
    setActiveItem(href);
    if (href.startsWith('#')) {
      const element = document.getElementById(href.substring(1));
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <div className="profile">
        <div className="profile-icon">
          <CodeOutlinedIcon className="rotating-icon" />
        </div>
        <div>
          <p className="name">Karra Naga Harshitha</p>
          <p className="title">Frontend Developer</p>
        </div>
      </div>

      <ul className="nav-links">
        {navItems.map(({ label, icon, href }) => (
          <li key={label}>
            {href.startsWith('#') ? (
              <a
                href={href}
                onClick={e => {
                  e.preventDefault();
                  handleClick(href);
                }}
                className={activeItem === href ? 'active' : ''}
              >
                {icon} <span>{label}</span>
              </a>
            ) : (
              <Link
                href={href}
                onClick={() => handleClick(href)}
                className={activeItem === href ? 'active' : ''}
                style={label === "Home" ? { color: "#fff" } : {}}
              >
                {icon} <span>{label}</span>
              </Link>
            )}
          </li>
        ))}
        {/* Theme Toggle */}
        <li style={{ display: 'flex', alignItems: 'center', padding: '0 0.5rem' }}>
          <button
            onClick={toggleTheme}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--text-primary)',
              cursor: 'pointer',
              fontSize: '1.2rem',
              display: 'flex',
              alignItems: 'center',
            }}
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
        </li>
      </ul>

    </nav>
  );
};

export default Navbar;