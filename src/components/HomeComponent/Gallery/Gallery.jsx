import ScrollReveal from "../ScrollReveal/ScrollReveal";

// photo on the restaurant
const Gallery = () => {
  const galleryImages = [
    {
      id: 1,
      image: "/dishes/Gallery/aboutGriild.webp",
      alt: "Grilled chicken",
    },
    {
      id: 2,
      image: "/dishes/Gallery/kofta.webp",
      alt: "Egyptian kofta",
    },
    {
      id: 3,
      image: "/dishes/Gallery/hawawshy.webp",
      alt: "Egyptian hawawshi",
    },
    {
      id: 4,
      image: "/dishes/Gallery/specialOffer.webp",
      alt: "Grilled chicken skewers",
    },
    {
      id: 5,
      image: "/dishes/Gallery/meat.webp",
      alt: "Grilled meat pieces",
    },
    {
      id: 6,
      image: "/dishes/Gallery/aCichen.webp",
      alt: "Egyptian grilled food",
    },
  ];

  return (
    <section
      id="gallery"
      className="bg-[var(--color-bg)] px-4 py-20 sm:px-6 lg:px-8">
      <ScrollReveal>
        <div className="mx-auto max-w-7xl">

          {/* Heading */}
          <div className="mb-12 text-center">
            <span className="mb-3 block text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
              Our Gallery
            </span>

            <h2 className="mb-4 text-3xl font-bold text-[var(--color-text)] sm:text-4xl lg:text-5xl">
              A Taste of
              <span className="text-[var(--color-primary)]"> Jamr</span>
            </h2>

            <p className="mx-auto max-w-2xl text-base leading-8 text-[var(--color-text-muted)]">
              Discover our grilled specialties and authentic Egyptian flavors.
            </p>
          </div>

          {/* Gallery */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map((item) => {
              return (
                <div
                  key={item.id}
                  className="group overflow-hidden rounded-2xl"
                >
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
              );
            })}
          </div>

        </div>
      </ScrollReveal>
    </section>
  );
};

export default Gallery;
