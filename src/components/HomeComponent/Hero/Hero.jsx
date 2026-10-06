import profileImage from "../../../assets/images/profile_Img.png"
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import {  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaYoutube, } from "react-icons/fa";
const Hero = () => {
  return (
    <section className="flex min-h-[calc(100vh-4rem)] items-center bg-[var(--background)]">
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 py-16 md:grid-cols-2 md:items-center">
        {/* Content */}
        <div className="hero-content">
          <p className="mb-4 text-sm font-medium uppercase tracking-wider text-[var(--primary)]">
            Front-End Developer
          </p>

          <h1 className="text-4xl font-bold leading-tight text-[var(--text-primary)] md:text-6xl">
            Building modern
            <span className="block text-[var(--primary)]">
              web experiences.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--text-secondary)]">
            I build responsive, user-friendly websites and web applications
            using modern front-end technologies.
          </p>

          {/* Actions */}
          <div className="hero-actions mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-[var(--primary)] px-6 py-3 font-medium text-white transition hover:bg-[var(--primary-hover)]"
            >
              View My Work
              <ArrowRight size={18} />
            </a>

            <a
              href="#contact"
              className="rounded-lg border border-[var(--border)] px-6 py-3 font-medium text-[var(--text-primary)] transition hover:bg-[var(--background-secondary)]"
            >
              Contact Me
            </a>
          </div>

        {/* Social Links */}
        <div className="hero-social mt-8 flex items-center gap-4">
        <a
            href="https://github.com/mohamedAdel201"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-[var(--text-secondary)] transition hover:text-[var(--primary)]"
        >
            <FaGithub size={22} />
        </a>

        <a
            href="YOUR_LINKEDIN_URL"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-[var(--text-secondary)] transition hover:text-[var(--primary)]"
        >
            <FaLinkedinIn size={22} />
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
        </div>

        {/* Visual */}
<div className="hero-image flex justify-center md:justify-end">
  <div className="relative">
    <div className="absolute inset-0 -z-10  rounded-3xl bg-[var(--primary)]/20 blur-3xl" />

    <div className="h-[420px] w-[320px] overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)] shadow-xl md:h-[520px] md:w-[400px]">
      <img
        src={profileImage}
        alt="Mohamed Adel"
        className="h-full w-full object-cover object-center"
      />
    </div>
  </div>
</div>
      </div>
    </section>
  );
};

export default Hero;
