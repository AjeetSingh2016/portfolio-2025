"use client";

import { useState, useEffect } from "react";

export default function Header() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle the scroll event to update the active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about-me", "services", "portfolio", "blogs", "contact-me"];
      let currentSection = "";

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element && element.getBoundingClientRect().top <= window.innerHeight / 2) {
          currentSection = section;
        }
      });

      setActiveSection(currentSection);
    };

    // Set the initial active section based on the current scroll position
    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="p-4 bg-gray-800 text-white fixed w-full z-50">
      <nav className="flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-xl font-bold">ajeetSingh</h1>

        {/* Hamburger Menu for Mobile */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="block md:hidden text-white focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-4">
          {["Home", "About Me", "Services", "Portfolio", "Blogs", "Contact Me"].map((item) => {
            const sectionId = item.toLowerCase().replace(" ", "-");
            const isActive = activeSection === sectionId;
            return (
              <li key={item}>
                <a
                  href={`#${sectionId}`}
                  className={`hover:text-gray-300 ${
                    isActive ? "border-b-2 border-green-500" : ""
                  }`}
                >
                  {item}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <ul className="absolute top-16 left-0 w-full bg-gray-800 flex flex-col space-y-2 p-4 md:hidden">
            {["Home", "About Me", "Services", "Portfolio", "Blogs", "Contact Me"].map((item) => {
              const sectionId = item.toLowerCase().replace(" ", "-");
              const isActive = activeSection === sectionId;
              return (
                <li key={item}>
                  <a
                    href={`#${sectionId}`}
                    className={`block hover:text-gray-300 ${
                      isActive ? "border-b-2 border-green-500" : ""
                    }`}
                    onClick={() => setIsMenuOpen(false)} // Close menu on click
                  >
                    {item}
                  </a>
                </li>
              );
            })}
          </ul>
        )}
      </nav>
    </header>
  );
}
