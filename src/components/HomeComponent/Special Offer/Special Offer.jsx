// banar for the special offer

import ScrollReveal from "../ScrollReveal/ScrollReveal";

// "/dishes/Griled/specialOffer.webp"
const SpecialOffer = () => {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <ScrollReveal>
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-3xl bg-[var(--color-bg-secondary)] lg:grid-cols-2">

          {/* Image */}
          <div
            className="min-h-[320px] bg-cover bg-center bg-no-repeat sm:min-h-[420px] lg:min-h-[520px]"
             style={{
              backgroundImage: `url('${import.meta.env.BASE_URL}dishes/Griled/specialOffer.webp')`,
                }}
          />

          {/* Content */}
          <div className="flex items-center px-6 py-12 sm:px-10 md:px-14 lg:px-16 xl:px-20">

            <div className="w-full max-w-xl">

              {/* Label */}
              <span className="mb-4 block text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
                Special Offer
              </span>

              {/* Title */}
              <h2 className="mb-5 text-4xl font-bold leading-tight text-[var(--color-text)] sm:text-5xl">
                Family
                <span className="block text-[var(--color-primary)]">
                  Grill Meal
                </span>
              </h2>

              {/* Description */}
              <p className="mb-8 text-base leading-8 text-[var(--color-text-muted)] sm:text-lg">
                A generous family meal prepared with delicious grilled chicken,
                Egyptian rice, tahini and fresh salad. Perfect for sharing.
              </p>

              {/* Meal Items */}
              <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2">

                <div className="flex items-center gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)] text-sm text-[var(--color-text)]">
                    ✓
                  </span>

                  <span className="text-sm text-[var(--color-text)]">
                    Half Chicken
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)] text-sm text-[var(--color-text)]">
                    ✓
                  </span>

                  <span className="text-sm text-[var(--color-text)]">
                    5 Chicken Pieces
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)] text-sm text-[var(--color-text)]">
                    ✓
                  </span>

                  <span className="text-sm text-[var(--color-text)]">
                    Egyptian Rice
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)] text-sm text-[var(--color-text)]">
                    ✓
                  </span>

                  <span className="text-sm text-[var(--color-text)]">
                    Tahini
                  </span>
                </div>

                <div className="flex items-center gap-3 sm:col-span-2">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)] text-sm text-[var(--color-text)]">
                    ✓
                  </span>

                  <span className="text-sm text-[var(--color-text)]">
                    Fresh Salad
                  </span>
                </div>

              </div>

              {/* Bottom */}
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center">

                {/* Button */}
                <a
                  href="#contact"
                  className="inline-flex w-fit items-center justify-center rounded-full bg-[var(--color-primary)] px-7 py-3.5 text-sm font-semibold text-[var(--color-text)] transition hover:bg-[var(--color-primary-hover)]"
                >
                  Order Now
                </a>

                {/* Offer */}
              <div>
                  <span className="block text-xs text-[var(--color-text-muted)]">
                      Special Price
                  </span>

                  <div className="flex items-center gap-3">
                      <span className="text-lg text-[var(--color-text-muted)] line-through">
                      $30
                      </span>

                      <span className="text-3xl font-bold text-[var(--color-accent)]">
                      $24
                      </span>
                  </div>
              </div>

              </div>

            </div>
          </div>

        </div>
      </ScrollReveal>
    </section>
  );
};

export default SpecialOffer;
