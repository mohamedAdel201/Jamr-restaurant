// what customers say
import { UserRound , Star } from "lucide-react";
import ScrollReveal from "../ScrollReveal/ScrollReveal";
const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Ahmed Hassan",
      rating: 4,
      review:
        "Amazing grilled chicken and authentic Egyptian flavors. Everything was fresh and delicious.",
    },
    {
      id: 2,
      name: "Omar Khaled",
      rating: 5,
      review:
        "The kofta and hawawshi were excellent. Great food, generous portions and a beautiful atmosphere.",
    },
    {
      id: 3,
      name: "Mariam Ali",
      rating: 3,
      review:
        "A wonderful place for Egyptian grilled food. The flavors were rich and the service was great.",
    },
  ];

  return (
    <section
      id="reviews"
      className="bg-[var(--color-bg-secondary)] px-4 py-20 sm:px-6 lg:px-8">
      <ScrollReveal>
        <div className="mx-auto max-w-7xl">

          {/* Heading */}
          <div className="mb-12 text-center">
            <span className="mb-3 block text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
              Customer Reviews
            </span>

            <h2 className="mb-4 text-3xl font-bold text-[var(--color-text)] sm:text-4xl lg:text-5xl">
              What Our
              <span className="text-[var(--color-primary)]"> Guests Say</span>
            </h2>

            <p className="mx-auto max-w-2xl text-base leading-8 text-[var(--color-text-muted)]">
              Our guests love the authentic flavors, generous portions and
              unforgettable grilled dishes at Jamr.
            </p>
          </div>

          {/* Reviews */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((item) => {
              return (
                <div
                  key={item.id}
                  className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg)] p-6 transition duration-300 hover:-translate-y-1 hover:border-[var(--color-accent)]"
                >
                  {/* Stars */}
                  <div className="mb-5 flex gap-1 text-[var(--color-accent)]">
                      
                      {
                            
                      Array.from({ length: item.rating }).map((_, index) => {
                          return <Star
                          key={index}
                          size={17}
                          fill="currentColor"
                          />;
                      })
                      }
                  </div>

                  {/* Review */}
                  <p className="mb-6 text-sm leading-7 text-[var(--color-text-muted)]">
                    “{item.review}”
                  </p>

                  {/* Customer */}
                  <div className="border-t border-[var(--color-border)] pt-4">
                      <div className="flex items-center gap-2">
                          <UserRound
                              size={20}
                              className="text-[var(--color-accent)]"
                          />
                          <div>
                              <h3 className="text-sm font-semibold text-[var(--color-text)]">
                                  {item.name}
                              </h3>

                              <span className="text-xs text-[var(--color-text-muted)]">
                                  Verified Guest
                              </span>
                          </div>
                    </div>
              
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </ScrollReveal>
    </section>
  );
};

export default Reviews;
