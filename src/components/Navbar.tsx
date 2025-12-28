"use client";

import Link from 'next/link';
import { useState } from 'react';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';

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
      </ul>
    </nav>
  );
};

export default Navbar;