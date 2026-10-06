import { useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { NavLink } from "react-router-dom";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "#about" },
  { name: "Projects", path: "#projects" },
  { name: "Contact", path: "#contact" },
];

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("light");
    setIsDarkMode((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

const getNavLinkClass = ({ isActive }) =>
  `relative text-sm font-medium transition-colors duration-300
  after:absolute after:-bottom-2 after:left-0 after:h-0.5
  after:bg-[var(--primary)] after:transition-all after:duration-300
  ${
    isActive
      ? "text-[var(--primary)] after:w-full"
      : "text-[var(--text-secondary)] after:w-0 hover:text-[var(--primary)] hover:after:w-full"
  }`;
  
  return (
    <header className="relative sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--background)]/90 backdrop-blur">      <nav className="mx-auto flex min-h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a
            href="#home"
            className="text-xl font-bold text-[var(--text-primary)]"
            >
            Dege<span className="text-[var(--primary)]">Tag</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a 
              key={link.path}
              href={link.path}
              className={getNavLinkClass(link)}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop Dark Mode */}
        <button
          type="button"
          onClick={toggleDarkMode}
          aria-label="Toggle dark mode"
          className="hidden rounded-lg p-2 text-text-secondary transition-colors hover:bg-background-secondary hover:text-text-primary md:block"
        >
          {isDarkMode ? <Sun size={19} /> : <Moon size={19} />}
        </button>

        {/* Mobile Actions */}
        <div className="flex items-center gap-1 md:hidden">

          <button
            type="button"
            onClick={toggleDarkMode}
            aria-label="Toggle dark mode"
            className="rounded-lg p-2 text-text-secondary transition-colors hover:bg-background-secondary hover:text-text-primary"
          >
            {isDarkMode ? <Sun size={19} /> : <Moon size={19} />}
          </button>

          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            className="rounded-lg p-2 text-text-secondary transition-colors hover:bg-background-secondary hover:text-text-primary"
          >
            {isMenuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>

        </div>
      </nav>

      {/* Mobile Navigation */}
{isMenuOpen && (
  <div className="absolute left-0 top-full w-full border-b border-[var(--border)] bg-[var(--background)]/80 shadow-xl backdrop-blur-xl md:hidden">
    <div className="mx-auto max-w-6xl px-6 py-4">
      <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)]/70 p-2 backdrop-blur-md">
        {navLinks.map((link) => (
          <a
            key={link.path}
            href={link.path}
            onClick={() => setIsMenuOpen(false)}
            className="block rounded-xl px-4 py-3 text-sm font-medium text-[var(--text-secondary)] transition-all duration-200 hover:bg-[var(--background-secondary)] hover:text-[var(--primary)]"
          >
            {link.name}
          </a>
        ))}
      </div>
    </div>
  </div>
)}
    </header>
  );
};

export default NavBar;
