// Navbar.tsx
"use client";
import { useState } from "react";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About Us", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Query", href: "#query" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setMenuOpen(false);
    }
  };

  return (
    <nav className="w-full h-16 flex items-center justify-between px-3 sm:px-6 md:px-12 bg-white/95 dark:bg-gray-900/95 shadow-lg fixed top-0 left-0 z-50 backdrop-blur-md border-b border-red-100 dark:border-red-900/20">
      <button
        onClick={() => scrollToSection("#home")}
        className="font-bold text-lg sm:text-xl md:text-2xl tracking-wide bg-linear-to-r from-red-700 to-red-600 bg-clip-text text-transparent hover:from-red-800 hover:to-red-700 transition-all duration-300 cursor-pointer"
      >
        SAMASTIPUR BLOOD CENTRE
      </button>
      {/* Desktop nav */}
      <div className="hidden sm:flex gap-1 md:gap-2">
        {navLinks.map((link) => (
          <Button
            key={link.name}
            variant="ghost"
            onClick={() => scrollToSection(link.href)}
            className="text-sm md:text-base font-medium hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/20 transition-all duration-300 relative group"
          >
            {link.name}
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-red-600 to-red-700 group-hover:w-4/5 transition-all duration-300"></span>
          </Button>
        ))}
      </div>
      {/* Mobile menu button */}
      <button
        className="sm:hidden p-2 rounded-md hover:bg-red-50 dark:hover:bg-red-900/20 transition-all"
        onClick={() => setMenuOpen((v) => !v)}
        aria-label="Open menu"
      >
        <Menu className="w-6 h-6 text-red-700" />
      </button>
      {/* Mobile nav */}
      {menuOpen && (
        <div className="absolute top-16 right-3 w-44 bg-white dark:bg-gray-900 shadow-lg rounded-lg flex flex-col gap-1 py-2 z-50 border border-red-100 dark:border-red-900/20 animate-fade-in">
          {navLinks.map((link) => (
            <Button
              key={link.name}
              variant="ghost"
              onClick={() => scrollToSection(link.href)}
              className="w-full text-left px-4 py-2 text-base font-medium hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/20 transition-all duration-300"
            >
              {link.name}
            </Button>
          ))}
        </div>
      )}
    </nav>
  );
}
