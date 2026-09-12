import ScrollReveal from "../ScrollReveal/ScrollReveal";

// perve about the restaurant
const About = () => {
  return (
    <section
      id="about"
      className="bg-[var(--color-bg-secondary)] px-4 py-20 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">

            {/* Image */}
            <div className="overflow-hidden rounded-2xl">
              <img
                  src={`${import.meta.env.BASE_URL}dishes/Griled/aboutGriild.webp`}
                alt="Grilled chicken skewers"
                className="h-full min-h-[400px] w-full object-cover"
              />
            </div>

            {/* Content */}
            <div>
              <span className="text-center md:text-left mb-4 block text-sm font-semibold uppercase tracking-widest text-[var(--color-accent)]">
                About Jamr
              </span>

              <h2 className="text-center md:text-left mb-6 text-3xl font-bold leading-tight text-[var(--color-text)] sm:text-4xl lg:text-5xl">
                Authentic Egyptian Flavor,
                <span className="block text-[var(--color-primary)]">
                  Made Modern
                </span>
              </h2>

              <p className="text-center mx-auto md:mx-0 md:text-left mb-8 max-w-xl text-base leading-8 text-[var(--color-text-muted)]">
                At Shawaya, we bring the rich flavors of Egyptian cuisine to the
                table with a modern touch. From charcoal-grilled meats to
                traditional favorites, every dish is prepared with care and
                authentic spices.
              </p>

              {/* Features */}
              <div className="mb-8 grid gap-4 sm:grid-cols-3">
                <div>
                  <h3 className="mb-1 text-sm font-semibold text-[var(--color-text)]">
                    Fresh Ingredients
                  </h3>
                  <p className="text-sm text-[var(--color-text-muted)]">
                    Quality ingredients in every dish.
                  </p>
                </div>

                <div>
                  <h3 className="mb-1 text-sm font-semibold text-[var(--color-text)]">
                    Authentic Recipes
                  </h3>
                  <p className="text-sm text-[var(--color-text-muted)]">
                    Traditional Egyptian flavors.
                  </p>
                </div>

                <div>
                  <h3 className="mb-1 text-sm font-semibold text-[var(--color-text)]">
                    Charcoal Grilled
                  </h3>
                  <p className="text-sm text-[var(--color-text-muted)]">
                    Grilled fresh for rich flavor.
                  </p>
                </div>
              </div>

              {/* CTA */}
              <a
                href="#menu"
                className="inline-flex items-center rounded-full bg-[var(--color-primary)] px-6 py-3 text-sm font-semibold text-[var(--color-text)] transition hover:bg-[var(--color-primary-hover)]"
              >
                View Our Menu
              </a>
            </div>

          </div>
      </ScrollReveal>
    </section>
  );
};

export default About;
