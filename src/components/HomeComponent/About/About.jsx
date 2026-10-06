import { useEffect, useRef, useState } from "react";
const About = () => {
      const [isVisible, setIsVisible] = useState(false);
      const [animatedValues, setAnimatedValues] = useState({});
    const aboutRef = useRef(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        },
        {
          threshold: 0.25,
        }
      );

      if (aboutRef.current) {
        observer.observe(aboutRef.current);
      }

      return () => observer.disconnect();
    }, []);

    useEffect(() => {
      if (!isVisible) return;

      const duration = 1000;
      const startTime = performance.now();

      const animate = (currentTime) => {
        const progress = Math.min(
          (currentTime - startTime) / duration,
          1
        );

        const values = {};

        skills.forEach((skill) => {
        values[skill.id] = Math.round(skill.percentage * progress);
    });

    setAnimatedValues(values);

    if (progress < 1) {
      requestAnimationFrame(animate);
    }
  };

  requestAnimationFrame(animate);
}, [isVisible]);

  const skills = [
              {
                id:1,
                name:"HTML",
                percentage: 95,
              },
              {
                id:2,
                name:"CSS",
                percentage: 90,
              },
              {
                id:3,
                name:"JavaScript",
                percentage: 65,
              },
              {
                id:4,
                name:"React",
                percentage: 85,
              },
              {
                id:5,
                name:"Tailwind Css",
                percentage: 80,
              },
              {
                id:6,
                name:"GitHub",
                percentage: 75,
              }
            ]
  return (
    <section
      ref={aboutRef}
      id="about"
      className="bg-[var(--background-secondary)] py-24"
    >
      <div className="mx-auto w-full max-w-6xl px-6">

        {/* Section Header */}
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-wider text-[var(--primary)]">
            About Me
          </p>

          <h2 className="text-3xl font-bold text-[var(--text-primary)] md:text-4xl">
            Building with purpose
          </h2>
        </div>

        {/* Content */}
        <div className="grid gap-12 md:grid-cols-2 md:items-center">

          {/* Text */}
          <div>
            <h3 className="text-2xl font-semibold text-[var(--text-primary)]">
              Front-End Developer focused on modern web experiences.
            </h3>

            <p className="mt-6 leading-8 text-[var(--text-secondary)]">
              I'm a Front-End Developer passionate about building modern,
              responsive, and user-friendly websites and web applications.
              I focus on writing clean, maintainable code and creating
              interfaces that provide a great user experience.
            </p>

            <p className="mt-4 leading-8 text-[var(--text-secondary)]">
              I work mainly with React and modern JavaScript technologies,
              while continuously improving my skills and exploring better
              ways to build scalable and reliable applications.
            </p>
          </div>

          {/* Skills */}
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {skills
            .map((skill) => (
              <div
                key={skill.id}
                className="flex flex-col gap-1.5 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5 text-center font-medium text-[var(--text-primary)] shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[var(--primary)] hover:shadow-md"
              >
                <div className="relative h-24 w-24">
                  <svg
                    className="h-full w-full -rotate-90"
                    viewBox="0 0 100 100"
                  >
                    {/* Background Circle */}
                    <circle
                      cx="50"
                      cy="50"
                      r="42"
                      fill="none"
                      stroke="var(--border)"
                      strokeWidth="8"
                    />

                    {/* Progress Circle */}
                    <circle
                      cx="50"
                      cy="50"
                      r="42"
                      fill="none"
                      stroke="var(--primary)"
                      strokeWidth="8"
                      strokeLinecap="round"
                      strokeDasharray="264"
                      strokeDashoffset={
                        264 - (264 * (animatedValues[skill.id] ?? 0)) / 100
                      }                  
                    className="transition-all duration-[1000ms] ease-out"/>
                  </svg>

                  {/* Percentage */}
                  <span className="absolute inset-0 flex items-center justify-center text-sm font-semibold text-[var(--text-primary)]">
                     {animatedValues[skill.id] ?? 0}%
                  </span>
                </div>
                {skill.name}
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;