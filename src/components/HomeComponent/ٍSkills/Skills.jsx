import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import { MonitorSmartphone } from "lucide-react";

import { SiTailwindcss } from "react-icons/si";

const skills = [
  {
    id: 1,
    name: "HTML",
    icon: FaHtml5,
    color:"#E34F26"
  },
  {
    id: 2,
    name: "css",
    icon: FaCss3Alt,
    color: "#1572B6",
  },
  {
    id: 3,
    name: "Js",
    icon: FaJs,
    color: "#F7DF1E",
  },
  {
    id: 4,
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "#06B6D4",

  },
  {
    id: 5,
    name: "React",
    icon: FaReact,
    color: "#61DAFB",
  },
  {
    id: 6,
    name: "Git",
    icon: FaGitAlt,
    color: "#F05032",
  },
  {
    id: 7,
    name: "GitHub",
    icon: FaGithub,
    color: "#181717",
  },
  {
   id: 8,
   name: "Responsive Design",
   icon: MonitorSmartphone,
   color: "#8B5CF6",

  },
];

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const skillsRef = useRef(null);
  useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    },
    {
      threshold: 0.2,
    }
  );

  if (skillsRef.current) {
    observer.observe(skillsRef.current);
  }

  return () => observer.disconnect();
}, []);

  return (
    <section
      ref={skillsRef}
      id="skills"
      className="bg-[var(--background)] py-24"
    >
      <div className="mx-auto w-full max-w-6xl px-6">

        {/* Section Header */}
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-wider text-[var(--primary)]">
            Skills
          </p>

          <h2 className="text-3xl font-bold text-[var(--text-primary)] md:text-4xl">
            Technologies I work with
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-[var(--text-secondary)]">
            Technologies and tools I use to build modern, responsive,
            and maintainable web applications.
          </p>
        </div>

        {/* Skills */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
        {skills.map((skill) => {
        const Icon = skill.icon;

        return (
            <div
              key={skill.id}
              style={{
                transitionDelay: `${skill.id * 100}ms`,
              }}
              className={`group flex items-center justify-center gap-1.5 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 text-center font-medium text-[var(--text-primary)] shadow-sm transition-[opacity,transform] duration-500 hover:-translate-y-1 hover:border-[var(--primary)] hover:shadow-md hover:duration-300 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-6 opacity-0"
            }`}
            >
         <Icon
            size={24}
            color={skill.color}
            style={{
              transitionDelay: `${skill.id * 100}ms`,
            }}
            className={`transition-[transform] duration-500 ${
              isVisible
                ? "scale-100 rotate-0"
                : "scale-0 rotate-[-45deg]"
            } group-hover:!duration-150 group-hover:scale-110`}
          />
            <span>{skill.name}</span>
            </div>
        );
        })}
        </div>

      </div>
    </section>
  );
};

export default Skills;