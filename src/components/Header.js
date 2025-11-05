import React, { useState, useEffect } from "react";
import logo from "../assets/img/Giang.png";
import "../assets/style/Hero.css";
import SocialIcons from "./SocialIcons";

const Header = ({ setCurrentPage, currentPage }) => {
  const [hoveredButton, setHoveredButton] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const buttons = [
    { name: "home", label: "Home" },
    { name: "projects", label: "Projects" },
    { name: "skills", label: "Skills" },
    { name: "contact", label: "Contact" },
    {
      name: "pttkhdt",
      label: "Thiết kế hệ thống hướng đối tượng",
    },
  ];

  const handleMouseEnter = (buttonName) => {
    setHoveredButton(buttonName);
  };

  const handleMouseLeave = () => {
    setHoveredButton(null);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle menu state
  };

  return (
    <header className={isScrolled ? "header scrolled" : "header"}>
      <div className="header-css">
        <img src={logo} alt="My logo" />

        <button className="menu-button" onClick={toggleMenu}>
          &#9776; {/* Icon menu */}
        </button>

        {/* Nav with nav-item wrapper */}
        <nav className={`nav ${isMenuOpen ? "open" : ""}`}>
          <div className="nav-item">
            {buttons.map((button) => (
              <button
                key={button.name}
                onMouseEnter={() => handleMouseEnter(button.name)}
                onMouseLeave={handleMouseLeave}
                className={
                  hoveredButton === button.name || currentPage === button.name
                    ? "hovered"
                    : ""
                }
                onClick={() => {
                  setCurrentPage(button.name);
                  setIsMenuOpen(false); // Close menu after selection
                }}
              >
                {button.label}
              </button>
            ))}
          </div>
          <SocialIcons />
        </nav>
      </div>
    </header>
  );
};

export default Header;
