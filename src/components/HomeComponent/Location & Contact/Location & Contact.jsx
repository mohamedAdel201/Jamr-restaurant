// where the restaurant located
import { MapPin, Phone, Clock } from "lucide-react";

const LocationContact = () => {
  return (
    <section
      id="contact"
      className="bg-[var(--color-bg)] px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-12 text-center">
          <span className="mb-3 block text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
            Visit Us
          </span>

          <h2 className="mb-4 text-3xl font-bold text-[var(--color-text)] sm:text-4xl lg:text-5xl">
            Come and Enjoy
            <span className="text-[var(--color-primary)]"> Jamr</span>
          </h2>

          <p className="mx-auto max-w-2xl text-base leading-8 text-[var(--color-text-muted)]">
            Visit us and enjoy authentic Egyptian grilled flavors in a modern
            and welcoming atmosphere.
          </p>
        </div>

        {/* Content */}
        <div className="grid overflow-hidden rounded-3xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] lg:grid-cols-2">

          {/* Contact Information */}
          <div className="flex items-center p-8 sm:p-10 lg:p-14">

            <div className="w-full">

              <h3 className="mb-8 text-2xl font-bold text-[var(--color-text)] sm:text-3xl">
                Contact Information
              </h3>

              {/* Address */}
              <div className="mb-7 flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)] text-[var(--color-text)]">
                  <MapPin size={20} />
                </div>

                <div>
                  <h4 className="mb-1 text-sm font-semibold text-[var(--color-text)]">
                    Address
                  </h4>

                  <p className="text-sm leading-7 text-[var(--color-text-muted)]">
                    123 Main Street, Cairo, Egypt
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="mb-7 flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)] text-[var(--color-text)]">
                  <Phone size={20} />
                </div>

                <div>
                  <h4 className="mb-1 text-sm font-semibold text-[var(--color-text)]">
                    Phone
                  </h4>

                  <a
                    href="tel:+201000000000"
                    className="text-sm text-[var(--color-text-muted)] transition hover:text-[var(--color-accent)]"
                  >
                    +20 100 000 0000
                  </a>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="mb-8 flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)] text-[var(--color-text)]">
                  <Clock size={20} />
                </div>

                <div>
                  <h4 className="mb-1 text-sm font-semibold text-[var(--color-text)]">
                    Opening Hours
                  </h4>

                  <p className="text-sm leading-7 text-[var(--color-text-muted)]">
                    Every Day
                    <br />
                    12:00 PM — 12:00 AM
                  </p>
                </div>
              </div>

              {/* Button */}
              <a
                href="tel:+201000000000"
                className="inline-flex items-center justify-center rounded-full bg-[var(--color-primary)] px-7 py-3.5 text-sm font-semibold text-[var(--color-text)] transition hover:bg-[var(--color-primary-hover)]"
              >
                Call Us
              </a>

            </div>
          </div>

          {/* Map */}
          <div className="min-h-[400px] lg:min-h-full">

            <iframe
              src="https://www.google.com/maps?q=Cairo,Egypt&output=embed"
              className="h-full min-h-[400px] w-full border-0"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              title="Jamr Restaurant Location"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
};

export default LocationContact;
