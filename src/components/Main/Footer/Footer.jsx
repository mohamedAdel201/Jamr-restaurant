// footer
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import {
  MapPin,
  Phone,
  Clock
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-bg-secondary)] px-4 pt-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* Footer Content */}
        <div className="grid gap-10 pb-12 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <h2 className="mb-4 text-2xl font-bold tracking-wide text-[var(--color-text)]">
              JAMR
            </h2>

            <p className="max-w-xs text-sm leading-7 text-[var(--color-text-muted)]">
              Authentic Egyptian grilled flavors with a modern touch.
              Fresh ingredients, rich flavors and unforgettable meals.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-[var(--color-text)]">
              Quick Links
            </h3>

            <ul className="space-y-3">
              <li>
                <a
                  href="#home"
                  className="text-sm text-[var(--color-text-muted)] transition hover:text-[var(--color-accent)]"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#menu"
                  className="text-sm text-[var(--color-text-muted)] transition hover:text-[var(--color-accent)]"
                >
                  Menu
                </a>
              </li>

              <li>
                <a
                  href="#about"
                  className="text-sm text-[var(--color-text-muted)] transition hover:text-[var(--color-accent)]"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#gallery"
                  className="text-sm text-[var(--color-text-muted)] transition hover:text-[var(--color-accent)]"
                >
                  Gallery
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="text-sm text-[var(--color-text-muted)] transition hover:text-[var(--color-accent)]"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-[var(--color-text)]">
              Contact
            </h3>

            <div className="space-y-4">

              {/* Address */}
              <div className="flex gap-3">
                <MapPin
                  size={18}
                  className="mt-0.5 shrink-0 text-[var(--color-accent)]"
                />

                <p className="text-sm leading-6 text-[var(--color-text-muted)]">
                  123 Main Street,
                  <br />
                  Cairo, Egypt
                </p>
              </div>

              {/* Phone */}
              <div className="flex gap-3">
                <Phone
                  size={18}
                  className="mt-0.5 shrink-0 text-[var(--color-accent)]"
                />

                <a
                  href="tel:+201000000000"
                  className="text-sm text-[var(--color-text-muted)] transition hover:text-[var(--color-accent)]"
                >
                  +20 100 000 0000
                </a>
              </div>

              {/* Hours */}
              <div className="flex gap-3">
                <Clock
                  size={18}
                  className="mt-0.5 shrink-0 text-[var(--color-accent)]"
                />

                <p className="text-sm leading-6 text-[var(--color-text-muted)]">
                  Every Day
                  <br />
                  12:00 PM — 12:00 AM
                </p>
              </div>

            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-[var(--color-text)]">
              Follow Us
            </h3>

            <p className="mb-5 text-sm leading-7 text-[var(--color-text-muted)]">
              Follow Shawaya and discover our latest dishes and special offers.
            </p>

            <div className="flex gap-3">

              <a
                href="#"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-text-muted)] transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
              >
                <FaFacebookF size={18} />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-text-muted)] transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
              >
                <FaInstagram size={18} />
              </a>

            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-[var(--color-border)] py-6 text-center">
          <p className="text-sm text-[var(--color-text-muted)]">
            © 2026 JAMR. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

