import React, { useState, useEffect } from "react";
import { Code, Menu, X } from "lucide-react";
import { navLinks, personalInfo } from "../../utils/constants.js";
import {
  useScrollSpy,
  scrollToSection,
} from "../../hooks/useScrollSpy.js";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const activeSection = useScrollSpy(
    navLinks.map((link) => link.id)
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[1000] w-full py-4 transition-all duration-300 ${
        isScrolled
          ? "bg-black/30 backdrop-blur-lg"
          : "bg-transparent"
      }`}
      style={{ transform: "translate3d(0,0,0)" }}
    >
      <div className="max-w-[1320px] mx-auto px-5">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center gap-4">
            <Code className="w-6 h-6 text-primary" />

            <button
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
              className="text-2xl font-bold bg-gradient-to-r from-primary via-primary/50 to-primary/30 bg-clip-text text-transparent hover:opacity-80 transition"
              aria-label="home"
            >
              {personalInfo.name.split(" ")[0]}
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-base font-medium transition-all duration-300 ${
                  activeSection === link.id
                    ? "text-white"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={() => handleNavClick("contact")}
              className="px-7 py-3.5 bg-white text-[#212121] font-medium text-base rounded-[17px] border border-white hover:bg-white/90 transition-all duration-300"
            >
              Hire Me
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 flex flex-col gap-4 pb-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-left text-base font-medium ${
                  activeSection === link.id
                    ? "text-white"
                    : "text-white/70"
                }`}
              >
                {link.label}
              </button>
            ))}

            <button
              onClick={() => handleNavClick("contact")}
              className="px-5 py-3 bg-white text-black rounded-xl"
            >
              Hire Me
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;