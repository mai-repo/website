import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "Experience", to: "/#experience" },
    { name: "Works", to: "/works" },
    { name: "About", to: "/about" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-brand-bg/80 backdrop-blur-md border-b border-brand-green/5">
      <div className="max-w-5xl mx-auto px-6 py-4 md:py-6 flex justify-between items-center">
        <Link to="/" className="hover:scale-110 transition-transform">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" className="text-brand-green">
            <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
          </svg>
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 text-[10px] font-bold tracking-widest uppercase opacity-60">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.to} 
              className="hover:opacity-100 transition-opacity"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 opacity-60 hover:opacity-100 transition-opacity"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden bg-brand-bg md:hidden px-6 pb-8 flex flex-col gap-6 text-[10px] font-bold tracking-widest uppercase"
          >
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.to} 
                className="opacity-60 hover:opacity-100 transition-opacity"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
