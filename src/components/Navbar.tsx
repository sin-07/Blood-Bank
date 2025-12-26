// Navbar.tsx
"use client";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { Menu, X, Home, Info, Briefcase, HelpCircle, Phone, Images } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "#home", icon: Home },
  { name: "About Us", href: "#about", icon: Info },
  { name: "Services", href: "#services", icon: Briefcase },
  { name: "Gallery", href: "#gallery", icon: Images },
  { name: "Query", href: "#query", icon: HelpCircle },
  { name: "Contact", href: "#contact", icon: Phone },
] as const;

// Animation variants (optimized - defined outside component)
const sidebarVariants = {
  closed: {
    x: "100%",
    transition: { type: "spring" as const, stiffness: 400, damping: 40 },
  },
  open: {
    x: 0,
    transition: { type: "spring" as const, stiffness: 400, damping: 40 },
  },
};

const overlayVariants = {
  closed: { opacity: 0 },
  open: { opacity: 1 },
};

const navItemVariants = {
  closed: { x: 50, opacity: 0 },
  open: (i: number) => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: i * 0.1,
      type: "spring" as const,
      stiffness: 300,
      damping: 24,
    },
  }),
};

const footerDotVariants = {
  animate: { scale: [1, 1.2, 1] },
  transition: { repeat: Infinity, duration: 1.5 },
};

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Freeze background when sidebar is open
  useEffect(() => {
    if (menuOpen) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.top = `-${window.scrollY}px`;
      document.body.style.width = "100%";
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      const scrollY = document.body.style.top;
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.paddingRight = "";
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || "0") * -1);
      }
    }
  }, [menuOpen]);

  const handleNavigation = useCallback((href: string) => {
    // Close menu first to unfreeze the body
    setMenuOpen(false);
    
    // Check if it's a hash link or a page route
    if (href.startsWith('#')) {
      // Wait for body to unfreeze, then scroll
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    } else {
      // Navigate to page
      window.location.href = href;
    }
  }, []);

  const toggleMenu = useCallback(() => setMenuOpen((v) => !v), []);
  const closeMenu = useCallback(() => setMenuOpen(false), []);

  return (
    <>
      <nav className="w-full h-16 flex items-center justify-between px-3 sm:px-6 md:px-12 bg-white/95 dark:bg-gray-900/95 shadow-lg fixed top-0 left-0 z-50 backdrop-blur-md border-b border-red-100 dark:border-red-900/20">
        <button
          onClick={() => handleNavigation("#home")}
          className="flex items-center gap-2 sm:gap-3 hover:opacity-80 transition-opacity cursor-pointer"
        >
          <Image
            src="/logo.jpeg"
            alt="Samastipur Blood Centre Logo"
            width={40}
            height={40}
            className="rounded-full w-8 h-8 sm:w-10 sm:h-10"
          />
          <span className="font-bold text-sm sm:text-lg md:text-xl tracking-wide bg-linear-to-r from-red-700 to-red-600 bg-clip-text text-transparent">
            SAMASTIPUR BLOOD CENTRE
          </span>
        </button>
        {/* Desktop nav */}
        <div className="hidden md:flex gap-1 md:gap-2">
          {navLinks.map((link) => (
            <Button
              key={link.name}
              variant="ghost"
              onClick={() => handleNavigation(link.href)}
              className="text-sm md:text-base font-medium hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/20 transition-all duration-300 relative group"
            >
              {link.name}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-linear-to-r from-red-600 to-red-700 group-hover:w-4/5 transition-all duration-300"></span>
            </Button>
          ))}
        </div>
        {/* Mobile/Tablet menu button */}
        <motion.button
          className="md:hidden p-2 rounded-full hover:bg-red-50 dark:hover:bg-red-900/20 transition-all z-60"
          onClick={toggleMenu}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          whileTap={{ scale: 0.9 }}
        >
          <motion.div
            animate={{ rotate: menuOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {menuOpen ? (
              <X className="w-6 h-6 text-red-700" />
            ) : (
              <Menu className="w-6 h-6 text-red-700" />
            )}
          </motion.div>
        </motion.button>
      </nav>

      {/* Mobile/Tablet Sidebar */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop overlay */}
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-55 md:hidden"
              variants={overlayVariants}
              initial="closed"
              animate="open"
              exit="closed"
              onClick={closeMenu}
            />

            {/* Sidebar */}
            <motion.div
              className="fixed top-0 right-0 h-full w-72 sm:w-80 bg-linear-to-b from-white via-red-50/30 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 shadow-2xl z-56 md:hidden overflow-y-auto"
              variants={sidebarVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              {/* Sidebar Header */}
              <div className="flex items-center justify-between p-6 border-b border-red-100 dark:border-red-900/30 sticky top-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm z-10">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden shadow-lg ring-2 ring-red-200 dark:ring-red-800">
                    <Image
                      src="/logo.jpeg"
                      alt="Samastipur Blood Centre Logo"
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-gray-800 dark:text-white text-sm">Samastipur</p>
                    <p className="text-xs text-red-600 dark:text-red-400">Blood Centre</p>
                  </div>
                </div>
                <motion.button
                  className="p-2 rounded-full hover:bg-red-100 dark:hover:bg-red-900/30 transition-colors"
                  onClick={closeMenu}
                  whileTap={{ scale: 0.9 }}
                  whileHover={{ rotate: 90 }}
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                </motion.button>
              </div>

              {/* Navigation Links */}
              <nav className="flex flex-col py-6 px-4" role="navigation">
                {navLinks.map((link, i) => {
                  const Icon = link.icon;
                  return (
                    <motion.button
                      key={link.href}
                      custom={i}
                      variants={navItemVariants}
                      initial="closed"
                      animate="open"
                      onClick={() => handleNavigation(link.href)}
                      className="flex items-center gap-4 px-4 py-4 rounded-xl text-left font-medium text-gray-700 dark:text-gray-200 hover:bg-linear-to-r hover:from-red-100 hover:to-red-50 dark:hover:from-red-900/30 dark:hover:to-red-900/10 transition-all duration-300 group"
                      aria-label={`Navigate to ${link.name}`}
                    >
                      <div className="w-10 h-10 rounded-lg bg-linear-to-br from-red-100 to-red-200 dark:from-red-900/40 dark:to-red-800/40 flex items-center justify-center group-hover:from-red-500 group-hover:to-red-600 transition-all duration-300 shadow-sm">
                        <Icon className="w-5 h-5 text-red-600 dark:text-red-400 group-hover:text-white transition-colors duration-300" />
                      </div>
                      <span className="text-base group-hover:text-red-700 dark:group-hover:text-red-400 transition-colors duration-300">
                        {link.name}
                      </span>
                      <svg className="w-5 h-5 text-red-500 ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </motion.button>
                  );
                })}
              </nav>

              {/* Sidebar Footer */}
              <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-red-100 dark:border-red-900/30 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm">
                <div className="text-center">
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Donate Blood, Save Lives
                  </p>
                  <div className="flex justify-center gap-2 mt-3">
                    {[0, 0.2, 0.4].map((delay, idx) => (
                      <motion.div
                        key={idx}
                        className={`w-2 h-2 rounded-full ${idx === 0 ? 'bg-red-500' : idx === 1 ? 'bg-red-400' : 'bg-red-300'}`}
                        {...footerDotVariants}
                        transition={{ ...footerDotVariants.transition, delay }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
