import { useState } from "react";
import { Link } from "react-router-dom";

function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="relative w-full border-b border-[var(--color-border)] bg-[var(--color-bg)]">
            <nav className=" mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">

                {/* Logo */}
                <Link
                    to="/"
                    className="flex items-center gap-3"
                >
                    <img
                        src="/icon.png"
                        alt="JAMR"
                        className="h-10 w-10 object-contain"
                    />

                    <span className="text-xl font-bold tracking-wide text-[var(--color-text)]">
                        JAMR
                    </span>
                </Link>


                {/* Desktop Navigation */}
                <div className="hidden items-center gap-8 md:flex">

                    <Link
                        to="/"
                        className="text-sm font-medium text-[var(--color-text)] transition hover:text-[var(--color-accent)]"
                    >
                        Home
                    </Link>

                    <a
                        href="#menu"
                        className="text-sm font-medium text-[var(--color-text-muted)] transition hover:text-[var(--color-accent)]"
                    >
                        Menu
                    </a>

                    <a
                        href="#about"
                        className="text-sm font-medium text-[var(--color-text-muted)] transition hover:text-[var(--color-accent)]"
                    >
                        About
                    </a>

                    <a
                        href="#contact"
                        className="text-sm font-medium text-[var(--color-text-muted)] transition hover:text-[var(--color-accent)]"
                    >
                        Contact
                    </a>

                </div>


                {/* Desktop CTA */}
                <div className="hidden md:block">
                    <a
                        href="#contact"
                        className="rounded-full bg-[var(--color-primary)] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[var(--color-primary-hover)]"
                    >
                        Reserve a Table
                    </a>
                </div>


                {/* Mobile Menu Button */}
                <button
                    type="button"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--color-border)] text-[var(--color-text)] md:hidden"
                    aria-label="Toggle menu"
                    aria-expanded={isMenuOpen}
                >
                    <span className="text-xl">
                        {isMenuOpen ? "×" : "☰"}
                    </span>
                </button>

            </nav>


            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className=" absolute top-full z-50 left-0 w-full border-t border-[var(--color-border)] bg-[var(--color-bg-secondary)] md:hidden">

                    <div className="mx-auto flex max-w-7xl flex-col px-4 py-4">

                        <Link
                            to="/"
                            onClick={() => setIsMenuOpen(false)}
                            className="border-b border-[var(--color-border)] py-3 text-sm font-medium text-[var(--color-text)]"
                        >
                            Home
                        </Link>

                        <Link
                            to="/menue"
                            onClick={() => setIsMenuOpen(false)}
                            className="border-b border-[var(--color-border)] py-3 text-sm font-medium text-[var(--color-text)]"
                        >
                            Menu
                        </Link>

                        <Link
                            to="/about"
                            onClick={() => setIsMenuOpen(false)}
                            className="border-b border-[var(--color-border)] py-3 text-sm font-medium text-[var(--color-text)]"
                        >
                            About
                        </Link>

                        <Link
                            to="/contactUs"
                            onClick={() => setIsMenuOpen(false)}
                            className="py-3 text-sm font-medium text-[var(--color-text)]"
                        >
                            Contact
                        </Link>

                        <a
                            href="#contact"
                            onClick={() => setIsMenuOpen(false)}
                            className="mt-4 rounded-full bg-[var(--color-primary)] px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-[var(--color-primary-hover)]"
                        >
                            Reserve a Table
                        </a>

                    </div>

                </div>
            )}
        </header>
    );
}

export default NavBar;
