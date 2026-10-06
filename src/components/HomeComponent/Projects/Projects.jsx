import { FaGithub } from "react-icons/fa";
import { ExternalLink } from "lucide-react";
import projectsData from "./Projects.js";

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-[var(--background-secondary)] py-24"
    >
      <div className="mx-auto w-full max-w-6xl px-6">

        {/* Section Header */}
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-wider text-[var(--primary)]">
            Projects
          </p>

          <h2 className="text-3xl font-bold text-[var(--text-primary)] md:text-4xl">
            Some of my work
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-[var(--text-secondary)]">
            A selection of projects I've built using modern web technologies.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((project) => (
            <article
              key={project.id}
              className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Image */}
              <div className="aspect-video overflow-hidden bg-[var(--background-secondary)]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition duration-500 hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[var(--text-primary)]">
                  {project.title}
                </h3>

                <p className="mt-3 leading-7 text-[var(--text-secondary)]">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-md bg-[var(--background-secondary)] px-3 py-1 text-sm text-[var(--text-secondary)]"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="mt-6 flex items-center gap-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-[var(--primary)] transition hover:text-[var(--primary-hover)]"
                  >
                    Live Demo
                    <ExternalLink size={16} />
                  </a>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-[var(--text-primary)] transition hover:text-[var(--primary)]"
                  >
                    GitHub
                     <FaGithub size={22} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;