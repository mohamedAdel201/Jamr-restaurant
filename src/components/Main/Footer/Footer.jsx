import { FaGithub, FaLinkedinIn , FaYoutube , FaFacebookF } from "react-icons/fa";
import { ArrowUp } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--background-secondary)]">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-6 px-6 py-10 md:flex-row md:justify-between">

        {/* Copyright */}
        <p className="text-sm text-[var(--text-secondary)]">
          © {currentYear} DegeTag. All rights reserved.
        </p>

        {/* Social Links */}
        <div className="flex items-center gap-5">
          <a
            href="https://github.com/mohamedAdel201"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-[var(--text-secondary)] transition hover:text-[var(--primary)]"
          >
            <FaGithub size={20} />
          </a>

          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-[var(--text-secondary)] transition hover:text-[var(--primary)]"
          >
            <FaLinkedinIn size={20} />
          </a>
          <a
                href="https://www.youtube.com/@DegeTag"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="text-[var(--text-secondary)] transition hover:text-[var(--primary)]"
            >
                <FaYoutube size={22} />
            </a>
    
            <a
                href="https://web.facebook.com/profile.php?id=61568395748953&locale=ar_AR"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="text-[var(--text-secondary)] transition hover:text-[var(--primary)]"
            >
                <FaFacebookF size={22} />
            </a>
         </div>
                  

        {/* Back To Top */}
        <a
          href="#"
          aria-label="Back to top"
          className="flex items-center gap-2 text-sm font-medium text-[var(--text-secondary)] transition hover:text-[var(--primary)]"
          >
          Back to top
          <ArrowUp size={18} />
        </a>

          </div>
    </footer>
  );
};

export default Footer;